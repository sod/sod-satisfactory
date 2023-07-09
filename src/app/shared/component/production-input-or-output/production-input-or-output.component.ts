import {AfterViewInit, Component, Input} from '@angular/core';
import {Production} from 'src/app/shared/entities/production';
import {RecipeTarget} from 'src/app/shared/entities/recipe-dto';
import {TrackByService} from 'src/app/shared/service/track-by-service';
import {triggerFocus} from '../../function/trigger-focus';

@Component({
    selector: 'app-production-input-or-output',
    templateUrl: './production-input-or-output.component.html',
    styleUrls: ['./production-input-or-output.component.scss'],
})
export class ProductionInputOrOutputComponent implements AfterViewInit {
    @Input() production!: Production;
    @Input() target!: RecipeTarget;
    @Input() autofocus?: boolean;
    selector = 'item-or-recipe-finder';
    title: Record<RecipeTarget, string> = {inputs: 'Input', outputs: 'Output'};

    constructor(public trackByService: TrackByService) {}

    ngAfterViewInit() {
        if (this.autofocus) {
            const query = `.${this.selector + this.target}:last-child input`;
            const inputElement: HTMLInputElement | null = document.querySelector(query);

            setTimeout(() => triggerFocus(inputElement), 1);
        }
    }
}
