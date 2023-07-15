import {ItemPackage} from 'src/app/shared/entities/item-package';
import {ItemPackageDto} from 'src/app/shared/entities/item-package-dto';
import {ItemParentRelationForProduction} from 'src/app/shared/entities/item-parent-relations';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {Recipe} from 'src/app/shared/entities/recipe';
import {updateInArray} from 'src/app/shared/function/update-in-array';

export class Production {
    readonly recipe: Recipe = new Recipe(this.dto.recipe, this);
    readonly clockSpeed1: number = this.dto.clockSpeed1 ?? 100;
    readonly clockSpeed2: number = this.dto.clockSpeed2 ?? 100;
    readonly machines: number = this.dto.machines ?? 1;
    readonly built: boolean = this.dto.built ?? false;

    constructor(
        private dto: ProductionDto,
        public readonly index: number,
    ) {}

    unwrap(): ItemParentRelationForProduction {
        return {production: this.dto};
    }

    getModifier(): number {
        const modifier1 = (this.clockSpeed1 ?? 100) / 100;
        const modifier2 = (this.clockSpeed2 ?? 100) / 100;
        const modifier3 = this.machines ?? 1;

        return modifier1 * modifier2 * modifier3;
    }

    multiply(amount?: number): number | undefined {
        return typeof amount === 'number' ? amount * this.getModifier() : undefined;
    }

    hasRecipes(): boolean {
        return this.recipe.inputs.length + this.recipe.outputs.length > 0;
    }

    static update(
        productions: ProductionDto[],
        unwrapped: ItemParentRelationForProduction,
        updateFn: (dto: Readonly<ProductionDto>) => ProductionDto,
    ): ProductionDto[] {
        return updateInArray(productions, unwrapped.production, updateFn);
    }

    static createDto(output?: Partial<ItemPackageDto>): ProductionDto {
        const outputs: ItemPackageDto[] = output ? [ItemPackage.createDto(output)] : [];

        return {
            recipe: {inputs: [], outputs},
        };
    }

    static connectDependencies(productions: Production[]): Production[] {
        for (let production of productions) {
            // production.recipe;
        }

        return productions;
    }
}
