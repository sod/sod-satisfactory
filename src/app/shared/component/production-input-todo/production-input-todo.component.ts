import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {ProductionInput} from 'src/app/shared/pipe/resolve-production.pipe';
import {TrackByService} from 'src/app/shared/service/track-by-service';
import {GlobalState} from 'src/app/shared/store/global-state';
import {addProductionWithOutputNameClicked, editProductionClicked} from 'src/app/shared/store/planner/planner.actions';
import {selectPlannerEdit} from 'src/app/shared/store/planner/planner.selectors';

@Component({
    selector: 'app-production-input-todo',
    templateUrl: './production-input-todo.component.html',
    styleUrls: ['./production-input-todo.component.scss'],
})
export class ProductionInputTodoComponent {
    @Input() productionInputs!: ProductionInput[];
    public edit$ = this.store.select(selectPlannerEdit);

    constructor(private store: Store<GlobalState>, public trackByService: TrackByService) {}

    addProduction(itemName: string, amount: number): void {
        this.store.dispatch(addProductionWithOutputNameClicked({itemPackage: {itemName, amount: Math.abs(amount) || 1}}));
    }

    editProduction(index: number): void {
        this.store.dispatch(editProductionClicked({index}));
    }
}
