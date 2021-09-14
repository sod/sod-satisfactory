import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Production} from 'src/app/shared/entities/production';
import * as fromPlanner from './planner.reducer';

export const selectPlannerState = createFeatureSelector<fromPlanner.PlannerState>(fromPlanner.plannerFeatureKey);

export const selectProductions = createSelector(selectPlannerState, (state): Production[] =>
    state.productions.map((production) => new Production(production)),
);
