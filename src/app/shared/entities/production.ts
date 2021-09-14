import {ItemParentRelationForProduction} from 'src/app/shared/entities/item-parent-relations';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {Recipe} from 'src/app/shared/entities/recipe';
import {updateInArray} from 'src/app/shared/function/update-in-array';

export class Production {
    readonly recipe: Recipe = new Recipe(this.dto.recipe, this);
    readonly clockSpeed1?: number = this.dto.clockSpeed1 ?? 100;
    readonly clockSpeed2?: number = this.dto.clockSpeed2 ?? 100;

    constructor(private dto: ProductionDto, public readonly index: number) {}

    unwrap(): ItemParentRelationForProduction {
        return {production: this.dto};
    }

    static update(
        productions: ProductionDto[],
        unwrapped: ItemParentRelationForProduction,
        updateFn: (dto: Readonly<ProductionDto>) => ProductionDto,
    ): ProductionDto[] {
        return updateInArray(productions, unwrapped.production, updateFn);
    }

    static createDto(): ProductionDto {
        return {
            recipe: {inputs: [], outputs: []},
        };
    }
}
