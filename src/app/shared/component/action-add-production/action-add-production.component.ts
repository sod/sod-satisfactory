import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {addProduction} from '../../store/planner/planner.actions';

@Component({
    selector: 'app-action-add-production',
    templateUrl: './action-add-production.component.html',
    styleUrls: ['./action-add-production.component.scss'],
})
export class ActionAddProductionComponent {
    addProduction = addProduction;

    constructor(public store: Store) {}
}
