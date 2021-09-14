import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

@Injectable()
export class PlannerEffects {
    constructor(private actions$: Actions) {}
}
