import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Production} from 'src/app/shared/entities/production';
import * as fromPlanner from './planner.reducer';
import {PlannerState} from './planner.reducer';

export const selectPlannerState = createFeatureSelector<fromPlanner.PlannerState>(fromPlanner.plannerFeatureKey);

export const selectProductions = createSelector(selectPlannerState, (state): Production[] =>
    state.productions.map((production, index) => new Production(production, index)),
);
export const selectPlannerEdit = createSelector(selectPlannerState, (state): PlannerState['edit'] => state.edit);

export const selectPlannerEditProduction = createSelector(
    selectProductions,
    selectPlannerEdit,
    (productions, edit): Production | undefined => (edit ? productions[edit.index] : undefined),
);
