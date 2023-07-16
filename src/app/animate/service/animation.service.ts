import {Injectable, IterableDiffer, IterableDiffers} from '@angular/core';
import {BehaviorSubject, Observable, OperatorFunction, Subject, merge, of, timer} from 'rxjs';
import {delay, distinctUntilChanged, finalize, map, mapTo, mergeAll, scan, startWith, switchMap} from 'rxjs/operators';
import {InitialRenderService} from '../../shared/service/initial-render-service';
import {ScheduleService} from './schedule.service';

/**
 * The AnimationService is meant to replace @angular/animations, to provide a way to
 * use native css animations when elements are added or removed from the dom via *ngFor or *ngIf
 *
 * The issue with animating *ngIf/*ngFor is, that you can't have an enter animation like
 * "does not exist in the dom" to "now exists in the dom", or leave animation like
 * "angular removes item from the dom"
 *
 * This service solves that by retaining the value on removal and doing a force refresh on enter
 * and give you `enter` and `leave` properties that you can use to add helper classes for animation
 *
 * Please use and look at the `sodAnimate` and `sodAnimateForOf` pipes for examples
 */

type Elevated<T, R, P, E> = {leave: R; enter: E; position: P; value: T};
export type ElevatedRemoved<T> = Elevated<T, boolean, number, boolean>;
export type ElevatedExists<T> = Elevated<T, undefined, undefined, boolean | undefined>;
export type ElevatedMixed<T> = Elevated<T, boolean | undefined, number | undefined, boolean | undefined>;
export type AnimationWrapped<T> = {subject$: BehaviorSubject<T>; animation$: Observable<ElevatedMixed<T> | undefined>};

@Injectable({providedIn: 'root'})
export class AnimationService {
    private leaveDuration = 500;

    public animateForOf<T>(values$: Observable<T[] | undefined>): Observable<ElevatedMixed<T>[] | undefined> {
        let differ: IterableDiffer<ElevatedExists<T>> | undefined;
        let leave: ElevatedRemoved<T>[] = [];
        const remove$ = new Subject<Observable<ElevatedRemoved<T>>>();
        const elevated$ = values$.pipe(map((values) => values?.map((value) => this.elevate(value, true))));
        const identify = <VALUE, TYPE extends 'next' | 'destroy'>(type: TYPE): OperatorFunction<VALUE, {type: TYPE; value: VALUE}> =>
            map((value) => ({type, value}));

        // if (environment_ssr) {
        //     return elevated$;
        // }

        return merge(elevated$.pipe(identify('next')), remove$.pipe(mergeAll(), identify('destroy'))).pipe(
            scan((oldValues: ElevatedMixed<T>[] | undefined, next) => {
                if (next.type === 'destroy') {
                    leave = leave.filter((inner) => inner !== next.value);
                    return oldValues?.filter((inner) => inner !== next.value);
                }

                const newValues: ElevatedExists<T>[] = next.value ?? [];

                if (!differ) {
                    differ = this.iterableDiffers.find(newValues).create(this.getValue);
                }

                const changes = differ.diff(newValues);

                // when an item disappears, remember that item, flag it as leave and schedule real removal
                if (changes) {
                    changes.forEachRemovedItem((change) => {
                        const remove = Object.assign(change.item, {leave: true, position: change.previousIndex || 0});
                        leave.push(remove);
                        leave.sort((a, b) => (a.position - b.position < 0 ? -1 : 1));
                        remove$.next(timer(this.leaveDuration).pipe(mapTo(remove)));
                    });
                }

                // re-insert all leave values that were not yet thrown away into the output
                if (leave.length) {
                    const mixedValues: ElevatedMixed<T>[] = [...newValues];

                    leave.forEach((item) => {
                        mixedValues.splice(item.position, 0, item);
                    });

                    return mixedValues;
                }

                return newValues;
            }, [] as ElevatedMixed<T>[]),
            finalize(() => {
                leave = [];
                differ = undefined;
            }),
        );
    }

    public animate<T>(value$: Observable<T>, options?: {strategy: 'any-change' | 'truthy'}): Observable<ElevatedMixed<T> | undefined> {
        // if (environment_ssr) {
        //     return value$.pipe(map((value) => (value ? this.elevate(value, true) : undefined)));
        // }

        return value$.pipe(
            distinctUntilChanged(),
            scan<T, {next?: T; old?: T}>((old, next) => ({next, old: old.next}), {}),
            switchMap(({next, old}) => {
                if ((options?.strategy === 'truthy' && !!next === !!old) || !this.initialRenderService.done) {
                    return !next ? this.undefined$ : of(this.elevate(next, true));
                }

                if (next) {
                    return merge(of(this.elevate(next)), this.scheduleService.immediateForceReflow().pipe(mapTo(this.elevate(next, true))));
                }

                if (old) {
                    return this.undefined$.pipe(
                        delay(this.leaveDuration),
                        startWith({
                            leave: true,
                            position: 0,
                            value: old,
                            enter: false,
                        }),
                    );
                }

                return this.undefined$;
            }),
        );
    }

    public animateSync<T>(value: T, wrapped?: AnimationWrapped<T>, options?: {strategy: 'any-change' | 'truthy'}): AnimationWrapped<T> {
        if (wrapped) {
            wrapped.subject$.next(value);
            return wrapped;
        }

        const subject$ = new BehaviorSubject<any>(value);
        const animation$ = this.animate(subject$, options);

        return {subject$, animation$};
    }

    constructor(
        private iterableDiffers: IterableDiffers,
        private scheduleService: ScheduleService,
        private initialRenderService: InitialRenderService,
    ) {}

    private undefined$ = of(undefined);

    private elevate<T>(value: T, enter?: boolean): ElevatedExists<T> {
        return {leave: undefined, position: undefined, enter, value};
    }

    private getValue<T>(_index: number, elevated: ElevatedExists<T>): T {
        return elevated.value;
    }
}
