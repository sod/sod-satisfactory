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
    productions: ProductionDto[];
}

export const initialState: PlannerState = {
    productions: [],
};

export const reducer = createReducer(
    initialState,

    on(PlannerActions.plannerStoreRestored, (state, action) => ({
        ...action.state,
    })),

    on(PlannerActions.addProduction, (state) => ({
        ...state,
        productions: state.productions.concat(Production.createDto()),
    })),

    on(PlannerActions.removeProduction, (state, {production}) => ({
        ...state,
        productions: without(state.productions, production),
    })),

    on(PlannerActions.clearProduction, (state) => ({
        ...state,
        productions: [],
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

    on(PlannerActions.removeItemPackage, (state, action) => ({
        ...state,
        productions: Recipe.update(state.productions, action.relation, (recipe) => ({
            ...recipe,
            inputs: removeFromArray(recipe.inputs, action.relation.itemPackage),
            outputs: removeFromArray(recipe.outputs, action.relation.itemPackage),
        })),
    })),
);
