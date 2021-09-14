import {ItemParentRelationForProduction} from 'src/app/shared/entities/item-parent-relations';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {Recipe} from 'src/app/shared/entities/recipe';
import {updateInArray} from 'src/app/shared/function/update-in-array';

export class Production {
    readonly recipe: Recipe = new Recipe(this.dto.recipe, this);
    readonly modifier: number = this.dto.modifier;
    readonly note: string = this.dto.note;

    constructor(private dto: ProductionDto) {}

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
            modifier: 1,
            note: '',
        };
    }
}
