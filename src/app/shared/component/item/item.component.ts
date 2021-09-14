import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {TrackByService} from 'src/app/shared/service/track-by-service';
import {updateItemPackage} from 'src/app/shared/store/planner/planner.actions';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
    @Input() itemPackage!: ItemPackage;
    items: string[] = ['Water', 'Empty Canister'];
    filteredItems: string[] = this.items;
    updateItemPackage = updateItemPackage;

    constructor(public store: Store, public trackByService: TrackByService) {}

    updateItemName(itemName: string): void {
        this.store.dispatch(updateItemPackage({relation: this.itemPackage.unwrap(), itemPackage: {itemName}}));
        this.filteredItems = this.items.filter((option) => option.toLowerCase().indexOf(itemName.toLowerCase()) !== -1);
    }
}
