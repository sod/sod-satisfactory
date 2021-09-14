import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {itemNames} from 'src/app/shared/entities/item-names';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {Recipe} from 'src/app/shared/entities/recipe';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {TrackByService} from 'src/app/shared/service/track-by-service';
import {addItemPackage, removeItemPackage, updateItemPackage} from 'src/app/shared/store/planner/planner.actions';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
    @Input() recipe!: Recipe;
    @Input() target!: RecipeTarget;
    @Input() itemPackage?: ItemPackage;
    items: typeof itemNames = itemNames;

    constructor(public store: Store, public trackByService: TrackByService) {}

    updateItemName(itemName: string, itemPackage: ItemPackage): void {
        this.store.dispatch(updateItemPackage({relation: itemPackage.unwrap(), itemPackage: {itemName}}));
    }

    addItemName(itemName: string): void {
        this.store.dispatch(addItemPackage({relation: this.recipe.unwrap(), target: this.target, itemPackage: {itemName}}));
    }

    remove(itemPackage: ItemPackage): void {
        this.store.dispatch(removeItemPackage({relation: itemPackage.unwrap()}));
    }
}
