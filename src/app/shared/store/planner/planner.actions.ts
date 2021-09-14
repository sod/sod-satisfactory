import {createAction, props} from '@ngrx/store';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {ItemParentRelationForItemPackage, ItemParentRelationForProduction} from 'src/app/shared/entities/item-parent-relations';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {PlannerState} from './planner.reducer';

export const plannerStoreRestored = createAction('[Planner] Store Restored', props<{state: PlannerState}>());

export const addProduction = createAction('[Planner] Add Production');
export const removeProduction = createAction('[Planner] Remove Production', props<ItemParentRelationForProduction>());
export const clearProduction = createAction('[Planner] Clear Production');

export const addItemPackage = createAction(
    '[Planner] Add Item Package',
    props<{relation: ItemParentRelationForProduction; target: RecipeTarget}>(),
);
export const updateItemPackage = createAction(
    '[Planner] Update Item Package',
    props<{relation: ItemParentRelationForItemPackage; itemPackage: Partial<ItemPackage>}>(),
);
export const removeItemPackage = createAction('[Planner] Remove Item Package', props<{relation: ItemParentRelationForItemPackage}>());
