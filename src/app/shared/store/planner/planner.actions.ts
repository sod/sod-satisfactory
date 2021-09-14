import {createAction, props} from '@ngrx/store';
import {Production} from '../../entities/production';

export const addProduction = createAction('[Planner] Add Production');
export const removeProduction = createAction('[Planner] Remove Production', props<{production: Production}>());
