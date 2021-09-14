import {createAction, props} from '@ngrx/store';
import {ItemPackageDto} from 'src/app/shared/entities/item-package-dto';
import {
    ItemParentRelationForItemPackage,
    ItemParentRelationForProduction,
    ItemParentRelationForRecipe,
} from 'src/app/shared/entities/item-parent-relations';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {PlannerState} from './planner.reducer';

export const plannerStoreRestored = createAction('[Planner] Store Restored', props<{state: PlannerState}>());

export const addProduction = createAction('[Planner] Add Production');
export const removeProductionClicked = createAction(
    '[Planner] Remove Production Clicked',
    props<{relation: ItemParentRelationForProduction}>(),
);
export const clearProduction = createAction('[Planner] Clear Production');

export const addItemPackage = createAction(
    '[Planner] Add Item Package',
    props<{relation: ItemParentRelationForRecipe; target: RecipeTarget; itemPackage?: Partial<ItemPackageDto>}>(),
);
export const updateItemPackage = createAction(
    '[Planner] Update Item Package',
    props<{relation: ItemParentRelationForItemPackage; itemPackage: Partial<ItemPackageDto>}>(),
);
export const removeItemPackage = createAction('[Planner] Remove Item Package', props<{relation: ItemParentRelationForItemPackage}>());

export const updateProductionClicked = createAction(
    '[Planner] Update Production',
    props<{relation: ItemParentRelationForProduction; production: Partial<ProductionDto>}>(),
);

export const editProductionClicked = createAction('[Planner] Edit Production Clicked', props<{index: number}>());
