import {recipeDtoSchema} from 'src/app/shared/entities/recipe-dto';
import {z} from 'zod';

export const productionDtoSchema = z.object({
    recipe: recipeDtoSchema,
    clockSpeed1: z.number().optional(),
    clockSpeed2: z.number().optional(),
    machines: z.number().optional(),
    built: z.boolean().optional(),
});

export type ProductionDto = z.infer<typeof productionDtoSchema>;
