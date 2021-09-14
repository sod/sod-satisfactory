import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPlanner from './planner.reducer';

export const selectPlannerState = createFeatureSelector<fromPlanner.PlannerState>(fromPlanner.plannerFeatureKey);

export const selectProductions = createSelector(selectPlannerState, (state) => state.productions);
