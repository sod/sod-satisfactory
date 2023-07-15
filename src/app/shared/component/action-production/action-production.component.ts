import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {createProductionClicked, deleteProductionClicked} from '../../store/planner/planner.actions';

@Component({
    selector: 'app-action-production',
    templateUrl: './action-production.component.html',
    styleUrls: ['./action-production.component.scss'],
})
export class ActionProductionComponent {
    createProductionClicked = createProductionClicked;
    deleteProductionClicked = deleteProductionClicked;

    constructor(public store: Store) {}
}
