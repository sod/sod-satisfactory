import {Pipe, PipeTransform} from '@angular/core';
import {distinctUntilChanged, fromEvent, startWith} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({
    name: 'modalOrInline',
})
export class ModalOrInlinePipe implements PipeTransform {
    transform(modalUpToWidth: number): unknown {
        return fromEvent(window, 'resize', {passive: true}).pipe(
            startWith('init'),
            map(() => (window.innerWidth < modalUpToWidth ? 'modal' : 'inline')),
            distinctUntilChanged(),
        );
    }
}
