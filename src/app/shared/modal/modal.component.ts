import {Component} from '@angular/core';
import {distinctUntilChanged, fromEvent, startWith} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    private breakpoint = {md: 768} as const;
    active$ = fromEvent(window, 'resize', {passive: true}).pipe(
        startWith('init'),
        map(() => window.innerWidth < this.breakpoint.md),
        distinctUntilChanged(),
    );
}
