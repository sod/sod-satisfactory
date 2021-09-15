import {ItemPackage} from 'src/app/shared/entities/item-package';
import {ItemParentRelationForRecipe} from 'src/app/shared/entities/item-parent-relations';
import {Production} from 'src/app/shared/entities/production';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {RecipeDataDto} from 'src/app/shared/entities/recipe-data-item-dto';
import {RecipeDto} from 'src/app/shared/entities/recipe-dto';

export class Recipe {
    readonly inputs: ItemPackage[] = this.dto.inputs.map((item) => new ItemPackage(item, this));
    readonly outputs: ItemPackage[] = this.dto.outputs.map((item) => new ItemPackage(item, this));

    constructor(private readonly dto: RecipeDto, public readonly parent: Production) {}

    unwrap(): ItemParentRelationForRecipe {
        return Object.assign(this.parent.unwrap(), {recipe: this.dto});
    }

    static update(
        productions: ProductionDto[],
        unwrapped: ItemParentRelationForRecipe,
        updateFn: (dto: Readonly<RecipeDto>) => RecipeDto,
    ): ProductionDto[] {
        return Production.update(productions, unwrapped, (dto) => {
            return {...dto, recipe: updateFn(dto.recipe)};
        });
    }

    static fromRecipeDataDto(dto: RecipeDataDto): RecipeDto {
        return {
            inputs: dto.inputs ?? [],
            outputs: dto.outputs ?? [],
        };
    }
}
