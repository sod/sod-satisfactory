import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {pick} from 'lodash-es';
import {EMPTY, of} from 'rxjs';
import {mergeMap, switchMapTo, take, tap} from 'rxjs/operators';
import {PersistAppService} from '../../service/persist-app.service';
import {GlobalState} from '../global-state';
import {
    addItemPackage,
    addProduction,
    addProductionWithOutputNameClicked,
    clearProduction,
    closeProductionClicked,
    editProductionClicked,
    inputCoveredClicked,
    plannerStoreRestored,
    productionBuiltClicked,
    productionUpNextClicked,
    recipeSelected,
    removeItemPackage,
    removeProductionClicked,
    updateItemPackage,
    updateProductionClicked,
} from '../planner/planner.actions';
import {plannerFeatureKey} from '../planner/planner.reducer';

@Injectable()
export class AppEffects {
    persist$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(
                    addProduction,
                    clearProduction,
                    addItemPackage,
                    removeItemPackage,
                    updateItemPackage,
                    updateProductionClicked,
                    editProductionClicked,
                    closeProductionClicked,
                    removeProductionClicked,
                    addProductionWithOutputNameClicked,
                    recipeSelected,
                    productionBuiltClicked,
                    productionUpNextClicked,
                    inputCoveredClicked,
                ),
                switchMapTo(this.store.pipe(take(1))),
                tap((store: GlobalState) => {
                    this.persistAppService.persist(pick(store, [plannerFeatureKey]));
                }),
            ),
        {dispatch: false},
    );

    restore$ = createEffect(() =>
        of('once').pipe(
            mergeMap(() => {
                const data = this.persistAppService.restore();

                if (!data) {
                    return EMPTY;
                }

                return [plannerStoreRestored({state: data[plannerFeatureKey]})];
            }),
        ),
    );

    constructor(
        private actions$: Actions,
        private store: Store<GlobalState>,
        private persistAppService: PersistAppService,
    ) {}
}
