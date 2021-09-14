import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TrackByService {
    public index(index: number): number {
        return index;
    }
}
