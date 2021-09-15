import {Pipe, PipeTransform} from '@angular/core';
import {Production} from 'src/app/shared/entities/production';

@Pipe({
    name: 'productionTitle',
})
export class ProductionTitlePipe implements PipeTransform {
    transform(production: Production): {title: string; subtitle: string} {
        const clockSpeed = [];

        if (production.clockSpeed1 !== 100) {
            clockSpeed.push(production.clockSpeed1 + '%');
        }
        if (production.clockSpeed2 !== 100) {
            clockSpeed.push(production.clockSpeed2 + '%');
        }

        const machineTitle = production.machines + ' Machine' + (production.machines >= 2 ? 's' : '');
        const outputLength = production.recipe.outputs.length;
        const inputLength = production.recipe.inputs.length;
        const title = inputLength || production.machines >= 2 || clockSpeed.length ? machineTitle : outputLength ? 'Belt' : 'Empty';
        const subtitle = clockSpeed.length ? 'at ' + clockSpeed.join(' + ') : '';

        return {title, subtitle};
    }
}
