import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {Recipe} from 'src/app/shared/entities/recipe';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {GlobalState} from 'src/app/shared/store/global-state';
import {updateItemPackage} from 'src/app/shared/store/planner/planner.actions';

@Component({
    selector: 'app-item-package',
    templateUrl: './item-package.component.html',
    styleUrls: ['./item-package.component.scss'],
})
export class ItemPackageComponent {
    @Input() recipe!: Recipe;
    @Input() target!: RecipeTarget;
    @Input() itemPackage?: ItemPackage;

    constructor(private store: Store<GlobalState>) {}

    updateItemPackageAmount(amount: ItemPackage['amount'], itemPackage: ItemPackage): void {
        this.store.dispatch(updateItemPackage({relation: itemPackage.unwrap(), itemPackage: {amount}}));
    }
}
