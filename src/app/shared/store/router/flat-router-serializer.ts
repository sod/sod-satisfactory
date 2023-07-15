import {RouterStateSnapshot} from '@angular/router';
import {RouterStateSerializer} from '@ngrx/router-store';

// the default minimal serializer isn't minimal at all
export class FlatRouterSerializer implements RouterStateSerializer {
    public serialize(routerState: RouterStateSnapshot) {
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const {
            url,
            root: {queryParams},
        } = routerState;
        const {params, data, fragment} = route;

        return {url, params, queryParams, data, fragment};
    }
}
