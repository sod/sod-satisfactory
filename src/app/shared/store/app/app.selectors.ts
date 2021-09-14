import {createFeatureSelector} from '@ngrx/store';
import * as fromApp from './app.reducer';

export const selectAppState = createFeatureSelector<fromApp.AppState>(fromApp.appFeatureKey);
