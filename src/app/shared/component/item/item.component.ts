import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {recipesData} from 'src/app/generated/recipes-data';
import {itemNames} from 'src/app/shared/entities/item-names';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {Recipe} from 'src/app/shared/entities/recipe';
import {RecipeDataDto} from 'src/app/shared/entities/recipe-data-item-dto';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {addItemPackage, recipeSelected, removeItemPackage, updateItemPackage} from 'src/app/shared/store/planner/planner.actions';

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
    labels: Record<RecipeTarget, string> = {inputs: 'Input', outputs: 'Output or recipe'};
    recipesData: typeof recipesData = recipesData;

    constructor(public store: Store) {}

    itemSelected(itemName: string | RecipeDataDto, itemPackage?: ItemPackage): void {
        if (typeof itemName !== 'string') {
            this.store.dispatch(recipeSelected({relation: this.recipe.unwrap(), recipe: itemName}));
            return;
        }

        if (itemPackage) {
            this.store.dispatch(updateItemPackage({relation: itemPackage.unwrap(), itemPackage: {itemName}}));
            return;
        }

        this.store.dispatch(addItemPackage({relation: this.recipe.unwrap(), target: this.target, itemPackage: {itemName}}));
    }

    remove(itemPackage: ItemPackage): void {
        this.store.dispatch(removeItemPackage({relation: itemPackage.unwrap()}));
    }

    stringifyRecipe(object?: RecipeDataDto): string {
        return 'Recipe ' + (object?.[this.target]?.map((output) => output.itemName).join(' ') ?? 'unknown');
    }

    itemNamesAsArray(object?: RecipeDataDto): string[] {
        return object?.[this.target]?.map((output) => output.itemName) ?? [];
    }
}
