import {Component, Input} from '@angular/core';
import {Production} from 'src/app/shared/entities/production';
import {TrackByService} from 'src/app/shared/service/track-by-service';

@Component({
    selector: 'app-production',
    templateUrl: './production.component.html',
    styleUrls: ['./production.component.scss'],
})
export class ProductionComponent {
    @Input() production!: Production;

    constructor(public trackByService: TrackByService) {}
}
