import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {ProductionInput} from '../../pipe/resolve-production.pipe';
import {inputCoveredClicked} from '../../store/planner/planner.actions';

@Component({
    selector: 'app-missing-input',
    templateUrl: './missing-input.component.html',
    styleUrls: ['./missing-input.component.scss'],
})
export class MissingInputComponent {
    @Input({required: true}) input!: ProductionInput;

    constructor(private store: Store) {}
    toggle(): void {
        this.store.dispatch(inputCoveredClicked({name: this.input.itemName, amount: this.input.amount}));
    }
}
