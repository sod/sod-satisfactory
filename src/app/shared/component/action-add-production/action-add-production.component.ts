import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {addItemToProductionClicked} from '../../store/planner/planner.actions';

@Component({
    selector: 'app-action-add-production',
    templateUrl: './action-add-production.component.html',
    styleUrls: ['./action-add-production.component.scss'],
})
export class ActionAddProductionComponent {
    addProductionClicked = addItemToProductionClicked;

    constructor(public store: Store) {}
}
