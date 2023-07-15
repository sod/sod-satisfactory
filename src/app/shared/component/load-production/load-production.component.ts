import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {BehaviorSubject} from 'rxjs';
import {ProductionsService} from '../../service/productions-service';
import {selectActiveUuid} from '../../store/planner/planner.selectors';

@Component({
    selector: 'app-load-production',
    templateUrl: './load-production.component.html',
    styleUrls: ['./load-production.component.scss'],
})
export class LoadProductionComponent {
    protected open$ = new BehaviorSubject<boolean>(false);
    protected activeUuid$ = this.store.select(selectActiveUuid);

    constructor(
        protected productionsService: ProductionsService,
        private store: Store,
    ) {}

    open(): void {
        this.open$.next(true);
    }
}
