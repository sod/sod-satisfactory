import {RecipeDto} from 'src/app/shared/entities/recipe-dto';

export interface ProductionDto {
    recipe: RecipeDto;
    clockSpeed1?: number;
    clockSpeed2?: number;
}
