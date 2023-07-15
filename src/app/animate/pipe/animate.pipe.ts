import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {Observable, isObservable} from 'rxjs';
import {AnimationService, AnimationWrapped, ElevatedMixed} from '../service/animation.service';

/**
 * `enter` & `leave` css animations for `*ngIf`

 <!-- Example 1 (enter & leave use the same transition): -->

 <div *ngIf="value | sodAnimate | async as animate" [class.enter]="animate.enter" class="animate">
 {{ animate.value }}
 </div>

 <style>
 .animate {
        transition: opacity 0.3s;
        opacity: 0;
    }

 .animate.enter {
        opacity: 1;
    }
 </style>


 <!-- Example 2 (enter & leave use a different transition - enter: fade, leave: slideOut): -->

 <div *ngIf="value | sodAnimate | async as animate" [class.enter]="animate.enter" [class.leave]="animate.leave" class="animate">
 {{ animate.value }}
 </div>

 <style>
 .animate {
        transition: opacity 0.3s, translate 0.3s;
        transform: translate3d(0, 0, 0);
        opacity: 0;
    }

 .animate.enter {
        opacity: 1;
    }

 .animate.leave {
        opacity: 1;
        transform: translate3d(100%, 0, 0);
    }
 </style>
 */

@Pipe({
    name: 'sodAnimate',
})
export class AnimatePipe implements PipeTransform, OnDestroy {
    private nonObservableMode?: AnimationWrapped<any> = undefined;

    constructor(private animationService: AnimationService) {}

    public transform<T>(
        value$: Observable<T> | T,
        options?: {strategy: 'any-change' | 'truthy'},
    ): Observable<ElevatedMixed<T> | undefined> {
        if (isObservable(value$)) {
            return this.animationService.animate(value$, options);
        }

        this.nonObservableMode = this.animationService.animateSync(value$, this.nonObservableMode, options);

        return this.nonObservableMode.animation$;
    }

    public ngOnDestroy() {
        this.nonObservableMode?.subject$.complete();
        this.nonObservableMode = undefined;
    }
}
