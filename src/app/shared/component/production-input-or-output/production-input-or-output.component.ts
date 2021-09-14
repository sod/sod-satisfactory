import {Component, Input} from '@angular/core';
import {Production} from 'src/app/shared/entities/production';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {TrackByService} from 'src/app/shared/service/track-by-service';

@Component({
    selector: 'app-production-input-or-output',
    templateUrl: './production-input-or-output.component.html',
    styleUrls: ['./production-input-or-output.component.scss'],
})
export class ProductionInputOrOutputComponent {
    @Input() production!: Production;
    @Input() target!: RecipeTarget;
    title: Record<RecipeTarget, string> = {inputs: 'Input', outputs: 'Output'};

    constructor(public trackByService: TrackByService) {}
}
