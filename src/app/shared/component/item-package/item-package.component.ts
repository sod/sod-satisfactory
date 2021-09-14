import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {GlobalState} from 'src/app/shared/store/global-state';
import {removeItemPackage} from 'src/app/shared/store/planner/planner.actions';

@Component({
    selector: 'app-item-package',
    templateUrl: './item-package.component.html',
    styleUrls: ['./item-package.component.scss'],
})
export class ItemPackageComponent {
    @Input() itemPackage!: ItemPackage;

    constructor(private store: Store<GlobalState>) {}

    remove(): void {
        this.store.dispatch(removeItemPackage({relation: this.itemPackage.unwrap()}));
    }
}
