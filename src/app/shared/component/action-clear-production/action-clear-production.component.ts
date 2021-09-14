import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {clearProduction} from '../../store/planner/planner.actions';

@Component({
    selector: 'app-action-clear-production',
    templateUrl: './action-clear-production.component.html',
    styleUrls: ['./action-clear-production.component.scss'],
})
export class ActionClearProductionComponent {
    clearProduction = clearProduction;

    constructor(public store: Store) {}
}
