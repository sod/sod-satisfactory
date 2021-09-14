import {Component, Input} from '@angular/core';
import {Production} from '../../entities/production';

@Component({
    selector: 'app-production',
    templateUrl: './production.component.html',
    styleUrls: ['./production.component.scss'],
})
export class ProductionComponent {
    @Input() production!: Production;

    constructor() {}
}
