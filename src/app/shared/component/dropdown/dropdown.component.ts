import {Component, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {BehaviorSubject, delay, fromEvent, merge, Subject, takeUntil} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit, OnDestroy {
    @Input({required: true}) element!: Element;
    @Input({required: true}) dropdown!: TemplateRef<unknown>;

    public open$ = new BehaviorSubject(false);
    public destroy$ = new Subject<void>();

    toggle(): void {
        this.open$.next(!this.open$.value);
    }

    ngOnInit() {
        const focus$ = fromEvent(this.element, 'focus');
        const click$ = fromEvent(this.element, 'click');
        const blur$ = fromEvent(this.element, 'blur');

        const open$ = merge(focus$, click$).pipe(
            tap(() => {
                this.open$.next(true);
            }),
        );
        const close$ = blur$.pipe(
            delay(1),
            tap(() => {
                this.open$.next(false);
            }),
        );

        merge(open$, close$).pipe(takeUntil(this.destroy$)).subscribe();
    }

    ngOnDestroy() {
        this.destroy$.next();
    }
}
