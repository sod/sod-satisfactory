import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {sortBy} from 'lodash-es';
import {map} from 'rxjs/operators';
import {TrackByService} from 'src/app/shared/service/track-by-service';
import {GlobalState} from '../../../shared/store/global-state';
import {selectPlannerEditProduction, selectProductions} from '../../../shared/store/planner/planner.selectors';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
    public productions$ = this.store.select(selectProductions).pipe(map((productions) => sortBy(productions, 'built')));
    public edit$ = this.store.select(selectPlannerEditProduction);

    constructor(private store: Store<GlobalState>, public trackByService: TrackByService) {}
}
