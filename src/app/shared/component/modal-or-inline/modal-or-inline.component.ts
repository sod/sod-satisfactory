import {Component, Input} from '@angular/core';
import {distinctUntilChanged, fromEvent, startWith} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-modal-or-inline',
    templateUrl: './modal-or-inline.component.html',
    styleUrls: ['./modal-or-inline.component.scss'],
})
export class ModalOrInlineComponent {
    @Input({required: true}) modalUpToWidth!: number;

    modal$ = fromEvent(window, 'resize', {passive: true}).pipe(
        startWith('init'),
        map(() => window.innerWidth < this.modalUpToWidth),
        distinctUntilChanged(),
    );
}
