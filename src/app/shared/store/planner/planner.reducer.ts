import {createReducer, on} from '@ngrx/store';
import {without} from 'lodash-es';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {Production} from 'src/app/shared/entities/production';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {Recipe} from 'src/app/shared/entities/recipe';
import {removeFromArray} from 'src/app/shared/function/remove-from-array';
import * as PlannerActions from './planner.actions';

export const plannerFeatureKey = 'planner';

export interface PlannerState {
    edit?: {index: number};
    productions: ProductionDto[];
}

export const initialState: PlannerState = {
    edit: undefined,
    productions: [],
};

export const reducer = createReducer(
    initialState,

    on(PlannerActions.plannerStoreRestored, (state, action) => ({
        ...action.state,
    })),

    on(PlannerActions.addProduction, (state) => ({
        ...state,
        edit: {index: state.productions.length},
        productions: state.productions.concat(Production.createDto()),
    })),

    on(PlannerActions.addProductionWithOutputNameClicked, (state, action) => ({
        ...state,
        edit: {index: state.productions.length},
        productions: state.productions.concat(Production.createDto(action.itemPackage)),
    })),

    on(PlannerActions.removeProductionClicked, (state, {relation}) => ({
        ...state,
        edit: undefined,
        productions: without(state.productions, relation.production),
    })),

    on(PlannerActions.clearProduction, () => ({
        ...initialState,
    })),

    on(PlannerActions.addItemPackage, (state, action) => ({
        ...state,
        productions: Recipe.update(state.productions, action.relation, (recipe) => ({
            ...recipe,
            [action.target]: recipe[action.target].concat({...ItemPackage.createDto(), ...(action.itemPackage ?? {})}),
        })),
    })),

    on(PlannerActions.updateItemPackage, (state, action) => ({
        ...state,
        productions: ItemPackage.update(state.productions, action.relation, (itemPackage) => ({
            ...itemPackage,
            ...action.itemPackage,
        })),
    })),

    on(PlannerActions.updateProductionClicked, (state, action) => ({
        ...state,
        productions: Production.update(state.productions, action.relation, (production) => ({
            ...production,
            ...action.production,
        })),
    })),

    on(PlannerActions.removeItemPackage, (state, action) => ({
        ...state,
        productions: Recipe.update(state.productions, action.relation, (recipe) => ({
            ...recipe,
            inputs: removeFromArray(recipe.inputs, action.relation.itemPackage),
            outputs: removeFromArray(recipe.outputs, action.relation.itemPackage),
        })),
    })),

    on(PlannerActions.editProductionClicked, (state, action) => ({
        ...state,
        edit: action.index === state.edit?.index ? undefined : {index: action.index},
    })),
);
