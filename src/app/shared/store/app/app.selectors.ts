import {createFeatureSelector} from '@ngrx/store';
import * as fromApp from './app.reducer';

export const selectAppState = createFeatureSelector<fromApp.State>(fromApp.appFeatureKey);
