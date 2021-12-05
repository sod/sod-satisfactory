import {Component, Input} from '@angular/core';
import {ItemPackage} from '../../entities/item-package';

@Component({
    selector: 'app-package-images',
    templateUrl: './package-images.component.html',
    styleUrls: ['./package-images.component.scss'],
})
export class PackageImagesComponent {
    @Input() items!: Pick<ItemPackage, 'itemName' | 'amount'>[];
}
