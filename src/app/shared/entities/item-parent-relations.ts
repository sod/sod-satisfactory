import {ItemPackageDto} from 'src/app/shared/entities/item-package-dto';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {RecipeDto} from 'src/app/shared/entities/recipe-dto';

export interface ItemParentRelations {
    itemPackage: ItemPackageDto;
    recipe: RecipeDto;
    production: ProductionDto;
}

export type ItemParentRelationForItemPackage = ItemParentRelations;
export type ItemParentRelationForRecipe = Omit<ItemParentRelationForItemPackage, 'itemPackage'>;
export type ItemParentRelationForProduction = Omit<ItemParentRelationForRecipe, 'recipe'>;
