import {Injectable} from '@angular/core';
import {PlannerState} from '../store/planner/planner.reducer';
import {LocalStorageService} from './local-storage-service';

export interface PersistAppData {
    planner: PlannerState;
}

@Injectable({providedIn: 'root'})
export class PersistAppService {
    private store = this.localStorageService.getStore<PersistAppData>('sod-satisfactory');

    constructor(private localStorageService: LocalStorageService) {}

    persist(data: PersistAppData) {
        this.store.set(data);
    }

    restore(): PersistAppData | undefined {
        return this.store.get();
    }
}
