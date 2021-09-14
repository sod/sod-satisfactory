import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {TrackByService} from 'src/app/shared/service/track-by-service';
import {GlobalState} from '../../../shared/store/global-state';
import {selectProductions} from '../../../shared/store/planner/planner.selectors';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
    public productions$ = this.store.select(selectProductions);

    constructor(private store: Store<GlobalState>, public trackByService: TrackByService) {}
}
