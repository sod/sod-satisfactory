import {appFeatureKey, AppState} from './app/app.reducer';
import {plannerFeatureKey, PlannerState} from './planner/planner.reducer';

export interface GlobalState {
    [appFeatureKey]: AppState;
    [plannerFeatureKey]: PlannerState;
}
