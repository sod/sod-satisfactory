import {Component, Input} from '@angular/core';
import {ItemPackage} from 'src/app/shared/entities/item-package';
import {TrackByService} from 'src/app/shared/service/track-by-service';

@Component({
    selector: 'app-satisfactory-items',
    templateUrl: './satisfactory-items.component.html',
    styleUrls: ['./satisfactory-items.component.scss'],
})
export class SatisfactoryItemsComponent {
    @Input() values!: ItemPackage[];
    @Input() align: 'left' | 'right' = 'left';

    constructor(public trackByService: TrackByService) {}
}
