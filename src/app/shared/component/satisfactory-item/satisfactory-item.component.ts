import {Component, Input} from '@angular/core';
import {ItemPackage} from 'src/app/shared/entities/item-package';

@Component({
    selector: 'app-satisfactory-item',
    templateUrl: './satisfactory-item.component.html',
    styleUrls: ['./satisfactory-item.component.scss'],
})
export class SatisfactoryItemComponent {
    @Input() itemPackage!: ItemPackage;
}
