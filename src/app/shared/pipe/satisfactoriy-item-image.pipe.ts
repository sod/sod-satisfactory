import {Pipe, PipeTransform} from '@angular/core';
import {itemImage} from 'src/app/shared/entities/item-names';
import {ItemPackage} from 'src/app/shared/entities/item-package';

@Pipe({
    name: 'satisfactoriyItemImage',
})
export class SatisfactoriyItemImagePipe implements PipeTransform {
    transform(value: ItemPackage): string | undefined {
        return itemImage.get(value.itemName);
    }
}
