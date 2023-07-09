import {Component, Input} from '@angular/core';
import {ItemPackage} from 'src/app/shared/entities/item-package';

@Component({
    selector: 'app-satisfactory-item-image',
    templateUrl: './satisfactory-item-image.component.html',
    styleUrls: ['./satisfactory-item-image.component.scss'],
})
export class SatisfactoryItemImageComponent {
    @Input() itemPackage!: Pick<ItemPackage, 'itemName'>;
    @Input() heightPercent = 100;
}
