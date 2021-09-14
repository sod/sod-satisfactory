import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class JsonService {
    toJson(value: unknown): string {
        try {
            return JSON.stringify(value);
        } catch {}

        return '';
    }

    fromJson(value: any): unknown {
        try {
            return JSON.parse(value);
        } catch {}

        return undefined;
    }
}
