import {createAction, props} from '@ngrx/store';
import {Production} from '../../entities/production';
import {PlannerState} from './planner.reducer';

export const plannerStoreRestored = createAction('[Planner] Store Restored', props<{state: PlannerState}>());

export const addProduction = createAction('[Planner] Add Production');
export const removeProduction = createAction('[Planner] Remove Production', props<{production: Production}>());
export const clearProduction = createAction('[Planner] Clear Production');
