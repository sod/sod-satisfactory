import {createReducer, on} from '@ngrx/store';
import * as PlannerActions from './planner.actions';

export const plannerFeatureKey = 'planner';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
    initialState,

    on(PlannerActions.loadPlanners, (state) => state),
);
