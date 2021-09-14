import {createReducer, on} from '@ngrx/store';
import {without} from 'lodash-es';
import {createProduction, Production} from '../../entities/production';
import * as PlannerActions from './planner.actions';

export const plannerFeatureKey = 'planner';

export interface PlannerState {
    productions: Production[];
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
        productions: state.productions.concat(createProduction()),
    })),

    on(PlannerActions.removeProduction, (state, {production}) => ({
        ...state,
        productions: without(state.productions, production),
    })),

    on(PlannerActions.clearProduction, (state) => ({
        ...state,
        productions: [],
    })),
);
