import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {sortBy} from 'lodash-es';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TrackByService} from 'src/app/shared/service/track-by-service';
import {Production} from '../../../shared/entities/production';
import {ProductionInput, ProductionInputs} from '../../../shared/pipe/resolve-production.pipe';
import {GlobalState} from '../../../shared/store/global-state';
import {selectInputCovered, selectPlannerEditProduction, selectProductions} from '../../../shared/store/planner/planner.selectors';
import {animate, state, style, transition, trigger} from '@angular/animations';

const off = style({opacity: 0, transform: 'translateY(0)'});
const on = style({opacity: 1, transform: 'translateY(-4px)'});

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
    animations: [
        trigger('inOutAnimation', [transition(':enter', [off, animate('.2s ease', on)]), transition(':leave', [animate('.2s ease', off)])]),
    ],
})
export class DefaultComponent {
    public productions$: Observable<Production[]> = this.store.select(selectProductions).pipe(
        map((productions) =>
            sortBy(
                productions.filter((production) => production.hasRecipes()),
                'built',
            ),
        ),
    );
    public inputCovered$ = this.store.select(selectInputCovered);
    public edit$ = this.store.select(selectPlannerEditProduction);

    constructor(
        private store: Store<GlobalState>,
        public trackByService: TrackByService,
    ) {}

    isMissing(inputs: ProductionInputs): ProductionInput[] | undefined {
        const missing = inputs.array.filter((input) => input.isMissing());

        return missing.length ? missing : undefined;
    }
}
