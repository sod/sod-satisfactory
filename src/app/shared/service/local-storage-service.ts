import {Injectable} from '@angular/core';
import {JsonService} from './json-service';

export interface LocalStorageStore<T> {
    set: (data: T) => void;
    get: () => T | undefined;
    delete: () => void;
}

@Injectable({providedIn: 'root'})
export class LocalStorageService {
    constructor(private jsonService: JsonService) {}

    getStore<T>(namespace: string): LocalStorageStore<T> {
        return {
            set: (data) => this.set(namespace, data),
            get: () => this.get<T>(namespace),
            delete: () => this.delete(namespace),
        };
    }

    set(key: string, value: any): void {
        localStorage.setItem(key, this.jsonService.toJson(value) ?? '');
    }

    get<T = unknown>(key: string): T | undefined {
        return (this.jsonService.fromJson(this.getRaw(key)) ?? undefined) as T | undefined;
    }

    getRaw(key: string): string | undefined {
        return localStorage.getItem(key) || undefined;
    }

    delete(key: string): void {
        localStorage.removeItem(key);
    }
}
