import {Injectable, NgZone} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay as rxjsDelay, share, tap} from 'rxjs/operators';

// get a timer that won't invoke global change detection but stil plays nice within angular
// if you use the timer with an `async` pipe, use `timeout` or `immediate`
// if you use the timer to call logic that doesn't require angular to update the view, use `timeoutOutsideAngular` or `immediateOutsideAngular`

@Injectable({
    providedIn: 'root',
})
export class ScheduleService {
    private readonly defaultId = 'ScheduleServiceDefaultId';
    private readonly timer = new Map<string, Observable<void>>();
    // private immediateForceReflow$ = environment_ssr
    //     ? of(undefined)
    //     : of(undefined).pipe(
    //         rxjsDelay(1),
    //         tap(() => environment_test || ScheduleService.forceReflow(document.body)),
    //         share(),
    //     );
    private immediateForceReflow$ = of(undefined).pipe(
        rxjsDelay(1),
        tap(() => ScheduleService.forceReflow(document.body)),
        share(),
    );

    constructor(private ngZone: NgZone) {}
    //
    // public timeout(delay: number, id: string = this.defaultId): Observable<void> {
    //     return this.schedule(delay, id).pipe(switchMapTo(this.zoneService.ngZoneRun$));
    // }

    public timeoutOutsideAngular(delay: number, id: string = this.defaultId): Observable<void> {
        return this.schedule(delay, id);
    }

    // public immediate(): Observable<void> {
    //     return this.schedule(1, this.defaultId).pipe(switchMapTo(this.zoneService.ngZoneRun$));
    // }
    //
    public immediateOutsideAngular(): Observable<void> {
        return this.schedule(1, this.defaultId);
    }

    public immediateForceReflow(): Observable<void> {
        return this.immediateForceReflow$;
    }

    private schedule(delay: number, id: string): Observable<void> {
        const thisId = delay + '__' + id;

        if (this.timer.has(thisId)) {
            return this.timer.get(thisId) as Observable<void>;
        }

        const observable = new Observable<void>((subscriber) => {
            this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.timer.delete(thisId);
                    subscriber.next(undefined);
                    subscriber.complete();
                }, delay);
            });

            return () => {
                if (delay > 50) {
                    this.timer.delete(thisId);
                }
            };
        }).pipe(share());

        this.timer.set(thisId, observable);

        return observable;
    }

    private static forceReflow(element: HTMLElement): void {
        void window.getComputedStyle(element);
    }
}
