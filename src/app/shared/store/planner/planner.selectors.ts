import {createFeatureSelector} from '@ngrx/store';
import * as fromPlanner from './planner.reducer';

export const selectPlannerState = createFeatureSelector<fromPlanner.PlannerState>(fromPlanner.plannerFeatureKey);