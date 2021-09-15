import {Pipe, PipeTransform} from '@angular/core';
import {flatten, groupBy, sortBy} from 'lodash-es';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {Production} from 'src/app/shared/entities/production';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';

export class ProductionInput {
    itemName: string;
    amount: number;
    outputProductionIndex?: number;

    constructor(public inputs: ItemPackage[], public outputs: ItemPackage[]) {
        this.itemName = inputs[0]?.itemName ?? '';
        this.amount = this.getAmount(inputs, outputs);
        this.outputProductionIndex = outputs[0]?.parent.parent.index;
    }

    private getAmount(inputs: ItemPackage[], outputs: ItemPackage[]): number {
        const inputAmount = inputs.reduce((sum, input) => sum + (input.parent.parent.multiply(input.amount) ?? 0), 0);
        const outputAmount = outputs.reduce((sum, output) => sum + (output.parent.parent.multiply(output.amount) ?? 0), 0);

        return inputAmount - outputAmount;
    }
}

@Pipe({
    name: 'resolveProduction',
})
export class ResolveProductionPipe implements PipeTransform {
    transform(productions: Production[]): ProductionInput[] {
        const outputs = this.groupByName(productions, 'outputs');
        const inputs = Object.values(this.groupByName(productions, 'inputs'));
        const productionInputs = inputs.map((inputs) => new ProductionInput(inputs, outputs[inputs[0].itemName] ?? []));

        return sortBy(productionInputs, 'itemName');
    }

    groupByName(productions: Production[], target: RecipeTarget): Record<string, ItemPackage[]> {
        const items = flatten(productions.map((production: Production) => production.recipe[target]));

        return groupBy(items, 'itemName');
    }
}
