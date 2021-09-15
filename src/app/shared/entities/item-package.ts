import {ItemPackageDto} from 'src/app/shared/entities/item-package-dto';
import {ItemParentRelationForItemPackage} from 'src/app/shared/entities/item-parent-relations';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {Recipe} from 'src/app/shared/entities/recipe';
import {updateInArray} from 'src/app/shared/function/update-in-array';

export class ItemPackage {
    readonly itemName: string = this.dto.itemName;
    readonly amount: number = this.dto.amount;

    constructor(private readonly dto: ItemPackageDto, public readonly parent: Recipe) {}

    unwrap(): ItemParentRelationForItemPackage {
        return Object.assign(this.parent.unwrap(), {itemPackage: this.dto});
    }

    static update(
        productions: ProductionDto[],
        unwrapped: ItemParentRelationForItemPackage,
        updateFn: (dto: Readonly<ItemPackageDto>) => ItemPackageDto,
    ): ProductionDto[] {
        return Recipe.update(productions, unwrapped, (dto) => {
            const inputs = updateInArray(dto.inputs, unwrapped.itemPackage, updateFn);
            const outputs = updateInArray(dto.outputs, unwrapped.itemPackage, updateFn);
            return {...dto, inputs, outputs};
        });
    }

    static createDto(dto?: Partial<ItemPackageDto>): ItemPackageDto {
        return {itemName: '', amount: 1, ...(dto ?? {})};
    }
}
