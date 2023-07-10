import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {Production} from 'src/app/shared/entities/production';
import {ProductionDto} from 'src/app/shared/entities/production-dto';
import {GlobalState} from 'src/app/shared/store/global-state';
import {closeProductionClicked, removeProductionClicked, updateProductionClicked} from 'src/app/shared/store/planner/planner.actions';

@Component({
    selector: 'app-production',
    templateUrl: './production.component.html',
    styleUrls: ['./production.component.scss'],
})
export class ProductionComponent {
    @Input() production!: Production;

    constructor(private store: Store<GlobalState>) {}

    updateProduction(production: Production, dto: Partial<ProductionDto>): void {
        this.store.dispatch(updateProductionClicked({relation: production.unwrap(), production: dto}));
    }

    removeProduction(production: Production): void {
        this.store.dispatch(removeProductionClicked({relation: production.unwrap()}));
    }

    closeProduction(): void {
        this.store.dispatch(closeProductionClicked());
    }
}
