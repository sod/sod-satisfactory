import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {ProductionInput, ProductionInputs} from 'src/app/shared/pipe/resolve-production.pipe';
import {TrackByService} from 'src/app/shared/service/track-by-service';
import {GlobalState} from 'src/app/shared/store/global-state';
import {addProductionWithOutputNameClicked, editProductionClicked} from 'src/app/shared/store/planner/planner.actions';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-satisfactory-items',
    templateUrl: './satisfactory-items.component.html',
    styleUrls: ['./satisfactory-items.component.scss'],
    animations: [
        trigger('stagger', [
            transition(':enter', [
                query('.item', [
                    style({transform: 'translateY(4px)'}),
                    stagger(500, [animate('.3s ease-out', style({transform: 'none'}))]),
                ]),
            ]),
        ]),
    ],
})
export class SatisfactoryItemsComponent {
    @Input() values!: ItemPackage[];
    @Input() productionInputs?: ProductionInputs;
    @Input() align: 'left' | 'right' = 'left';

    constructor(private store: Store<GlobalState>) {}

    inputClicked(itemPackage: ItemPackage, productionInput?: ProductionInput): void {
        if (productionInput?.outputProductionIndex !== undefined) {
            this.store.dispatch(editProductionClicked({index: productionInput.outputProductionIndex}));
            return;
        }

        this.store.dispatch(
            addProductionWithOutputNameClicked({
                itemPackage: {itemName: itemPackage.itemName, amount: Math.abs(productionInput?.amount ?? 0) || 1},
            }),
        );
    }

    name(index: number, itemPackage: ItemPackage): string {
        return `${index}-${itemPackage.itemName}`;
    }
}
