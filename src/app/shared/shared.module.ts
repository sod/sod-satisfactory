import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {ActionAddProductionComponent} from 'src/app/shared/component/action-add-production/action-add-production.component';
import {ActionClearProductionComponent} from 'src/app/shared/component/action-clear-production/action-clear-production.component';
import {SharedNgZorroModule} from '../shared-ng-zorro/shared-ng-zorro.module';
import {ItemPackageComponent} from './component/item-package/item-package.component';
import {ItemComponent} from './component/item/item.component';
import {ProductionComponent} from './component/production/production.component';
import {RecipeComponent} from './component/recipe/recipe.component';
import {AppEffects} from './store/app/app.effects';
import * as fromApp from './store/app/app.reducer';
import {PlannerEffects} from './store/planner/planner.effects';
import * as fromPlanner from './store/planner/planner.reducer';
import { ActionAddItemPackageComponent } from './component/action-add-item-package/action-add-item-package.component';

@NgModule({
    declarations: [
        RecipeComponent,
        ActionAddProductionComponent,
        ProductionComponent,
        ActionClearProductionComponent,
        ItemComponent,
        ItemPackageComponent,
        ActionAddItemPackageComponent,
    ],
    imports: [
        CommonModule,
        SharedNgZorroModule,
        EffectsModule.forFeature([AppEffects, PlannerEffects, PlannerEffects, AppEffects]),
        StoreModule.forFeature(fromPlanner.plannerFeatureKey, fromPlanner.reducer),
        StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducer),
        FormsModule,
    ],
    exports: [
        SharedNgZorroModule,
        RecipeComponent,
        ActionAddProductionComponent,
        ProductionComponent,
        ActionClearProductionComponent,
        FormsModule,
        ItemComponent,
        ItemPackageComponent,
        ActionAddItemPackageComponent,
    ],
})
export class SharedModule {}
