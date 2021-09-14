import {Pipe, PipeTransform} from '@angular/core';
import {ItemPackage} from 'src/app/shared/entities/item-package';

@Pipe({
    name: 'amountWithModifiers',
})
export class AmountWithModifiersPipe implements PipeTransform {
    transform(value?: ItemPackage): string {
        if (typeof value?.amount === 'number') {
            const modifier1 = (value.parent.parent.clockSpeed1 ?? 100) / 100;
            const modifier2 = (value.parent.parent.clockSpeed2 ?? 100) / 100;
            const modifier3 = value.parent.parent.machines ?? 1;

            return (value.amount * modifier1 * modifier2 * modifier3).toFixed(1);
        }

        return '';
    }
}
