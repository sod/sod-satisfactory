import {ZodType} from 'zod/lib/types';

export function validateSchema<T extends unknown>(name: string, schema: ZodType, data: T): T | undefined {
    try {
        return schema.parse(data);
    } catch (error) {
        console.group(`Error validating data structure of ${name}`);
        console.error(data);
        console.error(error);
        console.groupEnd();
    }

    return undefined;
}
