import {createReducer, on} from '@ngrx/store';
import * as AppActions from './app.actions';

export const appFeatureKey = 'app';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
    initialState,

    on(AppActions.loadApps, (state) => state),
);
