import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {routerNavigatedAction} from '@ngrx/router-store';
import {Store} from '@ngrx/store';
import {pick} from 'lodash-es';
import {EMPTY} from 'rxjs';
import {delay, mergeMap, switchMap, switchMapTo, take, tap} from 'rxjs/operators';
import {InitialRenderService} from '../../service/initial-render-service';
import {PersistAppService} from '../../service/persist-app.service';
import {ProductionsService} from '../../service/productions-service';
import {GlobalState} from '../global-state';
import {
    addItemPackage,
    addItemToProductionClicked,
    addProductionWithOutputNameClicked,
    closeProductionClicked,
    createProductionClicked,
    deleteProductionClicked,
    editProductionClicked,
    inputCoveredClicked,
    plannerStoreNotFound,
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
    private navigationId = 0;
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
                    this.productionsService.update();
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
                    const uuid = this.persistAppService.getPersistedUuid();
                    this.router.navigate([uuid ? `/id/${uuid}` : '/']);
                }),
            ),
        {dispatch: false},
    );

    new$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(createProductionClicked),
                tap(() => {
                    this.router.navigate([`/id/${this.persistAppService.getNewUuid()}`]);
                }),
            ),
        {dispatch: false},
    );

    restore$ = createEffect(() =>
        this.actions$.pipe(
            ofType(routerNavigatedAction),
            take(1),
            switchMap(() => {
                return this.id$.pipe(
                    mergeMap((uuid) => {
                        const data = uuid ? this.persistAppService.restore(uuid) : undefined;
                        const navigationId = (this.navigationId += 1);

                        if (!data && !this.persistAppService.isUuid(uuid)) {
                            this.router.navigate([
                                `/id/${this.persistAppService.getPersistedUuid() ?? this.persistAppService.getNewUuid()}`,
                            ]);
                            return EMPTY;
                        }

                        this.productionsService.update();

                        if (!data) {
                            return [plannerStoreNotFound({uuid: uuid!, navigationId})];
                        }

                        return [plannerStoreRestored({state: {...data[plannerFeatureKey]}})];
                    }),
                );
            }),
        ),
    );

    firstRenderDone$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(routerNavigatedAction),
                take(1),
                delay(1),
                tap(() => {
                    this.initialRenderService.setDone();
                }),
            ),
        {dispatch: false},
    );

    constructor(
        private actions$: Actions,
        private store: Store<GlobalState>,
        private persistAppService: PersistAppService,
        private productionsService: ProductionsService,
        private router: Router,
        protected readonly initialRenderService: InitialRenderService,
    ) {}
}
