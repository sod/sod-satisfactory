import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {Production} from 'src/app/shared/entities/production';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {addItemPackage} from 'src/app/shared/store/planner/planner.actions';

@Component({
    selector: 'app-action-add-item-package',
    templateUrl: './action-add-item-package.component.html',
    styleUrls: ['./action-add-item-package.component.scss'],
})
export class ActionAddItemPackageComponent {
    @Input() production!: Production;
    @Input() target!: RecipeTarget;
    addItemPackage = addItemPackage;

    constructor(public store: Store) {}
}
