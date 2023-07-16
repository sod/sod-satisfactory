import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface RouterState {
    state: {
        url: string;
        params: Record<string, string>;
        queryParams: Record<string, string>;
        data: Record<string, string>;
        fragment?: string;
    };
    navigationId: number;
}

export interface RouterStateOnGlobalState {
    router: RouterState;
}

const selectRouterState = createFeatureSelector<RouterState>('router');

export const selectRouterParam = (key: string) =>
    createSelector(selectRouterState, (state): string | undefined => state?.state?.params?.[key]);
