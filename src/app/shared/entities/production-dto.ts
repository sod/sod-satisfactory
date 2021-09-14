import {RecipeDto} from 'src/app/shared/entities/recipe-dto';

export interface ProductionDto {
    recipe: RecipeDto;
    modifier: number;
    note: string;
}
