import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AppEffects} from './store/app/app.effects';
import * as fromApp from './store/app/app.reducer';
import {PlannerEffects} from './store/planner/planner.effects';
import * as fromPlanner from './store/planner/planner.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EffectsModule.forFeature([AppEffects, PlannerEffects, PlannerEffects, AppEffects]),
        StoreModule.forFeature(fromPlanner.plannerFeatureKey, fromPlanner.reducer),
        StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducer),
    ],
})
export class SharedModule {}
