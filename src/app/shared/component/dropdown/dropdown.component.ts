import {Component, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {BehaviorSubject, Subject, delay, filter, fromEvent, merge, takeUntil} from 'rxjs';
import {map, tap} from 'rxjs/operators';

let id = 0;
const open$ = new BehaviorSubject(0);

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit, OnDestroy {
    @Input({required: true}) element!: Element;
    @Input({required: true}) dropdown!: TemplateRef<unknown>;

    private id = ++id;
    public open$ = open$.pipe(map((open) => open === this.id));
    public destroy$ = new Subject<void>();

    close(): void {
        if (open$.value === this.id) {
            open$.next(0);
        }
    }

    ngOnInit() {
        const focus$ = fromEvent(this.element, 'focus');
        const click$ = fromEvent(this.element, 'click');
        const esc$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe(filter((event) => event.key === 'Escape'));

        const onopen$ = merge(focus$, click$).pipe(
            tap(() => {
                open$.next(this.id);
            }),
        );
        const close$ = esc$.pipe(
            delay(100),
            tap(() => {
                this.close();
            }),
        );

        merge(onopen$, close$).pipe(takeUntil(this.destroy$)).subscribe();
    }

    ngOnDestroy() {
        this.destroy$.next();
    }
}
