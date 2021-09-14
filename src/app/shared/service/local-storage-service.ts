import {Injectable} from '@angular/core';
import {JsonService} from './json-service';

export interface LocalStorageStore<T> {
    set: (data: T) => void;
    get: () => T | undefined;
}

@Injectable({providedIn: 'root'})
export class LocalStorageService {
    constructor(private jsonService: JsonService) {}

    getStore<T>(namespace: string): LocalStorageStore<T> {
        return {
            set: (data) => this.set(namespace, data),
            get: () => this.get<T>(namespace),
        };
    }

    set(key: string, value: any): void {
        localStorage.setItem(key, this.jsonService.toJson(value) ?? '');
    }

    get<T = unknown>(key: string): T | undefined {
        return (this.jsonService.fromJson(localStorage.getItem(key)) ?? undefined) as T | undefined;
    }
}
