import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ROUTER_NAVIGATED} from '@ngrx/router-store';
import {Store} from '@ngrx/store';
import {pick} from 'lodash-es';
import {EMPTY} from 'rxjs';
import {mergeMap, switchMap, switchMapTo, take, tap} from 'rxjs/operators';
import {PersistAppService} from '../../service/persist-app.service';
import {ProductionsService} from '../../service/productions-service';
import {GlobalState} from '../global-state';
import {
    addItemPackage,
    addItemToProductionClicked,
    addProductionWithOutputNameClicked,
    closeProductionClicked,
    deleteProductionClicked,
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
import {selectRouterParam} from '../router/router.selector';

@Injectable()
export class AppEffects {
    private id$ = this.store.select(selectRouterParam('id'));

    persist$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(
                    addItemToProductionClicked,
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

    delete$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(deleteProductionClicked),
                switchMapTo(this.store.pipe(take(1))),
                tap((store: GlobalState) => {
                    this.persistAppService.delete(pick(store, [plannerFeatureKey]));
                    this.productionsService.update();
                    this.router.navigate(['/']);
                }),
            ),
        {dispatch: false},
    );

    restore$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            take(1),
            switchMap(() =>
                this.id$.pipe(
                    mergeMap((id) => {
                        const data = this.persistAppService.restore(id);

                        if (!data) {
                            return EMPTY;
                        }

                        return [plannerStoreRestored({state: {...data[plannerFeatureKey]}})];
                    }),
                ),
            ),
        ),
    );

    constructor(
        private actions$: Actions,
        private store: Store<GlobalState>,
        private persistAppService: PersistAppService,
        private productionsService: ProductionsService,
        private router: Router,
    ) {}
}
