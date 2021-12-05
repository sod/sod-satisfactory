import {Pipe, PipeTransform} from '@angular/core';
import {trimEnd, trimStart} from 'lodash-es';
import {itemImage} from 'src/app/shared/entities/item-names';
import {ItemPackage} from 'src/app/shared/entities/item-package';

@Pipe({
    name: 'satisfactoriyItemImage',
})
export class SatisfactoriyItemImagePipe implements PipeTransform {
    transform(value: Pick<ItemPackage, 'itemName'>): string | undefined {
        const source = itemImage.get(value.itemName);

        if (!source) {
            return undefined;
        }

        const baseUrl = document.baseURI;

        return trimEnd(baseUrl, '/') + '/' + trimStart(source, '/');
    }
}
