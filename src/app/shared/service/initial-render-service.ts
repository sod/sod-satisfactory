import {Injectable} from '@angular/core';

/**
 * call setDone after first render completed - then `done` can be used to only activate certain things after the initial render pass - like animations
 */

@Injectable({providedIn: 'root'})
export class InitialRenderService {
    public readonly done = false;

    public setDone() {
        return ((this as any).done = true);
    }
}
