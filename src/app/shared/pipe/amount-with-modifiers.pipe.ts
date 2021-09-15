import {Pipe, PipeTransform} from '@angular/core';
import {ItemPackage} from 'src/app/shared/entities/item-package';

@Pipe({
    name: 'amountWithModifiers',
})
export class AmountWithModifiersPipe implements PipeTransform {
    transform(value?: ItemPackage): string {
        return value?.parent.parent.multiply(value?.amount)?.toFixed(1) ?? '';
    }
}
