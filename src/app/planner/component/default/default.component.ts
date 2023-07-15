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

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
    protected breakpoint = {md: 768} as const;

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
