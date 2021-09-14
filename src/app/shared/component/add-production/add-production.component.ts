import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {addProduction} from '../../store/planner/planner.actions';

@Component({
    selector: 'app-add-production',
    templateUrl: './add-production.component.html',
    styleUrls: ['./add-production.component.scss'],
})
export class AddProductionComponent {
    addProduction = addProduction;

    constructor(public store: Store) {}
}
