import {ItemPackageDto} from 'src/app/shared/entities/item-package-dto';

export interface RecipeDto {
    inputs: ItemPackageDto[];
    outputs: ItemPackageDto[];
}

export type RecipeTarget = keyof Pick<RecipeDto, 'inputs' | 'outputs'>;
