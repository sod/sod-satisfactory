import {createReducer, on} from '@ngrx/store';
import * as AppActions from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {}

export const initialState: AppState = {};

export const reducer = createReducer(
    initialState,

    on(AppActions.loadApps, (state) => state),
);
