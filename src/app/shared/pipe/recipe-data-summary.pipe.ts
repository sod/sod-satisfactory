import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'recipeDataSummary',
})
export class RecipeDataSummaryPipe implements PipeTransform {
    transform(recipeData: {inputs?: {itemName: string; amount: number}[]; outputs?: {itemName: string; amount: number}[]}): string {
        const inputs = recipeData.inputs?.map((value) => `${value.amount}x ${value.itemName}`);
        const outputs = recipeData.outputs?.map((value) => `${value.amount}x ${value.itemName}`);
        const result = [];

        if (inputs?.length) {
            result.push('In: ' + inputs.join(', '));
        }

        if (outputs?.length) {
            result.push('Out: ' + outputs.join(', '));
        }

        return result.join('\n');
    }
}
