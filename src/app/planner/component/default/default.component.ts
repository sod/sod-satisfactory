import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {GlobalState} from '../../../shared/store/global-state';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
    constructor(private store: Store<GlobalState>) {}
}
