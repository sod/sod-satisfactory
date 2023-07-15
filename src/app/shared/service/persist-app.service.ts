import {Injectable} from '@angular/core';
import {distinctUntilKeyChanged, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {v4 as uuidv4} from 'uuid';
import {isDefined} from '../function/is-defined';
import {PlannerState} from '../store/planner/planner.reducer';
import {JsonService} from './json-service';
import {LocalStorageService} from './local-storage-service';

export interface PersistAppData {
    planner: PlannerState;
}

export function generateShortUuid(): string {
    return uuidv4().substring(0, 8);
}

@Injectable({providedIn: 'root'})
export class PersistAppService {
    private uuids = this.localStorageService.getStore<{uuid: string}[]>('sod-satisfactory__uuids');

    constructor(
        private localStorageService: LocalStorageService,
        private jsonService: JsonService,
    ) {
        this.migrate();
    }

    migrate(): void {
        const store = this.localStorageService.getStore<PersistAppData>(`sod-satisfactory`);
        const old = store.get();

        if (old) {
            this.persist(old);
            store.delete();
        }
    }

    persist(data: PersistAppData) {
        this.getStore(data.planner.uuid).set(data);
    }

    delete(data: PersistAppData) {
        const uuid = data.planner.uuid;

        if (uuid) {
            const uuids = this.uuids.get()?.filter((inner) => inner.uuid !== uuid);
            this.uuids.set(uuids ?? []);
            this.localStorageService.delete(this.key(uuid));
        }
    }

    restore(uuid?: string): PersistAppData | undefined {
        if (!uuid) {
            uuid = this.uuids.get()?.[0]?.uuid;
        }

        return uuid ? this.getStore(uuid).get() : undefined;
    }

    getAll(tick$: Observable<void>): Observable<PersistAppData[]> {
        return tick$.pipe(
            map(() => {
                const rawData = (this.uuids.get() ?? [])
                    .map((inner) => this.localStorageService.getRaw(this.key(inner.uuid)))
                    .filter(isDefined);

                return {rawData, id: rawData.join('::\n::')};
            }),
            distinctUntilKeyChanged('id'),
            map(({rawData}) => {
                return rawData.map((value) => this.jsonService.fromJson(value) as PersistAppData | undefined).filter(isDefined);
            }),
        );
    }

    private getStore(uuid: string) {
        return this.localStorageService.getStore<PersistAppData>(this.key(this.getUuid(uuid)));
    }

    private getUuid(uuid: string = generateShortUuid()): string {
        const uuids = this.uuids.get() ?? [];
        const has = uuids.some((inner) => inner.uuid === uuid);

        if (!has) {
            this.uuids.set(uuids.concat({uuid}));
        }

        return uuid;
    }

    private key(uuid: string): string {
        return `sod-satisfactory__${uuid}`;
    }
}
