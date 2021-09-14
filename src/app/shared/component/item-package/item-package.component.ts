import {Component, Input} from '@angular/core';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {Recipe} from 'src/app/shared/entities/recipe';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';

@Component({
    selector: 'app-item-package',
    templateUrl: './item-package.component.html',
    styleUrls: ['./item-package.component.scss'],
})
export class ItemPackageComponent {
    @Input() recipe!: Recipe;
    @Input() target!: RecipeTarget;
    @Input() itemPackage?: ItemPackage;
}
