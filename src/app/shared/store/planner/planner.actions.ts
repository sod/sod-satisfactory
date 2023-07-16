import {createAction, props} from '@ngrx/store';
import {ItemPackageDto} from 'src/app/shared/entities/item-package-dto';
import {
    ItemParentRelationForItemPackage,
    ItemParentRelationForProduction,
    ItemParentRelationForRecipe,
} from 'src/app/shared/entities/item-parent-relations';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {RecipeDataDto} from 'src/app/shared/entities/recipe-data-item-dto';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {InputCoveredDto, PlannerState} from './planner.reducer';

export const plannerStoreRestored = createAction('[Planner] Store Restored', props<{state: PlannerState}>());
export const plannerStoreNotFound = createAction('[Planner] Store Not Found', props<{uuid: string; navigationId: number}>());

export const addItemToProductionClicked = createAction('[Planner] Add Item To Production Clicked');
export const createProductionClicked = createAction('[Planner] Create Production Clicked');
export const addProductionWithOutputNameClicked = createAction(
    '[Planner] Add Production With Output Name Clicked',
    props<{itemPackage: Partial<ItemPackageDto>}>(),
);
export const removeProductionClicked = createAction(
    '[Planner] Remove Production Clicked',
    props<{relation: ItemParentRelationForProduction}>(),
);
export const deleteProductionClicked = createAction('[Planner] Delete Production Clicked');

export const addItemPackage = createAction(
    '[Planner] Add Item Package',
    props<{relation: ItemParentRelationForRecipe; target: RecipeTarget; itemPackage?: Partial<ItemPackageDto>}>(),
);
export const updateItemPackage = createAction(
    '[Planner] Update Item Package',
    props<{relation: ItemParentRelationForItemPackage; itemPackage: Partial<ItemPackageDto>}>(),
);
export const recipeSelected = createAction(
    '[Planner] Recipe Selected',
    props<{relation: ItemParentRelationForProduction; recipe: RecipeDataDto}>(),
);
export const removeItemPackage = createAction('[Planner] Remove Item Package', props<{relation: ItemParentRelationForItemPackage}>());

export const updateProductionClicked = createAction(
    '[Planner] Update Production',
    props<{relation: ItemParentRelationForProduction; production: Partial<ProductionDto>}>(),
);
export const productionBuiltClicked = createAction(
    '[Planner] Production Built Clicked',
    props<{relation: ItemParentRelationForProduction}>(),
);
export const productionUpNextClicked = createAction(
    '[Planner] Production Up Next Clicked',
    props<{relation: ItemParentRelationForProduction}>(),
);

export const editProductionClicked = createAction('[Planner] Edit Production Clicked', props<{index: number}>());
export const closeProductionClicked = createAction('[Planner] Close Production Clicked');

export const inputCoveredClicked = createAction('[Planner] Input Covered Clicked', props<InputCoveredDto>());
