import {Pipe, PipeTransform} from '@angular/core';
import {Production} from 'src/app/shared/entities/production';

@Pipe({
    name: 'productionTitle',
})
export class ProductionTitlePipe implements PipeTransform {
    transform(production: Production): string {
        const clockSpeed = [];

        if (production.clockSpeed1 !== 100) {
            clockSpeed.push(production.clockSpeed1 + '%');
        }
        if (production.clockSpeed2 !== 100) {
            clockSpeed.push(production.clockSpeed2 + '%');
        }

        const type = production.recipe.inputs.length ? 'Machine' : 'Belt';
        let title = production.machines + ' ' + type + (production.machines >= 2 ? 's' : '');

        if (clockSpeed.length) {
            title += ' at ' + clockSpeed.join(' + ');
        }

        return title;
    }
}
