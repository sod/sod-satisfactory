import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, Observable} from 'rxjs';
import {concatMap} from 'rxjs/operators';
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {
    loadApps$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.loadApps),
            /** An EMPTY observable only emits completion. Replace with your own observable API request */
            concatMap(() => EMPTY as Observable<{type: string}>),
        );
    });

    constructor(private actions$: Actions) {}
}
