import {z} from 'zod';

export const itemPackageDtoSchema = z.object({
    itemName: z.string(),
    amount: z.number(),
});

export type ItemPackageDto = z.infer<typeof itemPackageDtoSchema>;
