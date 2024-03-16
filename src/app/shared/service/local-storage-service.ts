import {Injectable, Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {Observable, Subject, concat, defer, of} from 'rxjs';
import {ZodSchema, z} from 'zod';
import {JsonService} from './json-service';

export interface LocalStorageStore<T> {
    set: (data: T) => undefined;
    get: () => T | undefined;
    delete: () => undefined;
}

export interface LocalStorageStoreWithInitializer<T> extends Pick<LocalStorageStore<T>, 'set' | 'delete'> {
    get: () => T;
    observable: Observable<T>;
    toSignal: () => Signal<T>;
}

@Injectable({providedIn: 'root'})
export class LocalStorageService {
    private localStorage?: Storage = typeof localStorage === 'undefined' ? undefined : localStorage;

    constructor(private jsonService: JsonService) {}

    getStore<T>(namespace: string): LocalStorageStore<T> {
        return {
            set: (data) => {
                this.set(namespace, data);
            },
            get: () => this.get<T>(namespace),
            delete: () => {
                this.delete(namespace);
            },
        };
    }

    getStrictStore<Z extends ZodSchema, T extends z.infer<Z>, INIT extends () => T>(
        namespace: string,
        schema: Z,
        initialValue: INIT,
    ): LocalStorageStoreWithInitializer<T> {
        const unsafeStore = this.getStore<unknown>(namespace);
        const validate = (data: unknown, errorPrefix?: string): data is T => {
            const result = schema.safeParse(data);
            if (!result.success) {
                console.error(new Error(`${errorPrefix}Data doesn't match schema.`), {
                    error: result.error,
                    schema,
                    data,
                });
            }

            return result.success;
        };

        const change$ = new Subject<T>();
        const observable: Observable<T> = concat(
            defer(() => of(safeStore.get())),
            change$,
        );

        const safeStore = {
            delete: (): undefined => {
                unsafeStore.delete();
                const value = initialValue();
                change$.next(value);
            },
            set: (data: T): undefined => {
                if (validate(data, 'localStorage.getStrictStore().set(...): ')) {
                    unsafeStore.set(data);
                    change$.next(data);
                }
            },
            get: (): T => {
                const data = unsafeStore.get();
                if (data !== undefined && validate(data, 'localStorage.getStrictStore().set(...): ')) {
                    return data;
                }

                return initialValue();
            },
            observable,
            toSignal: () => toSignal(observable, {requireSync: true}),
        } satisfies LocalStorageStoreWithInitializer<T>;

        return safeStore;
    }

    set(key: string, value: any): void {
        this.localStorage?.setItem(key, this.jsonService.toJson(value) ?? '');
    }

    get<T = unknown>(key: string): T | undefined {
        return (this.jsonService.fromJson(this.getRaw(key)) ?? undefined) as T | undefined;
    }

    getRaw(key: string): string | undefined {
        return this.localStorage?.getItem(key) || undefined;
    }

    delete(key: string): void {
        this.localStorage?.removeItem(key);
    }
}
