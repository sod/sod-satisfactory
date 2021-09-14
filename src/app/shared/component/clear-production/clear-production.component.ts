import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {clearProduction} from '../../store/planner/planner.actions';

@Component({
    selector: 'app-clear-production',
    templateUrl: './clear-production.component.html',
    styleUrls: ['./clear-production.component.scss'],
})
export class ClearProductionComponent {
    clearProduction = clearProduction;

    constructor(public store: Store) {}
}
