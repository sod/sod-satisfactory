import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';
import {AnimationService, ElevatedMixed} from '../service/animation.service';

/**
 * `enter` & `leave` css animations for `*ngFor`

 <!-- Example 1 (enter & leave use the same transition): -->

 <div *ngFor="let element of elements$ | sodAnimateForOf | async" [class.enter]="element.enter" class="animate">
 {{ element.value }}
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

 <div *ngFor="let element of elements$ | sodAnimateForOf | async" [class.enter]="element.enter" [class.leave]="element.leave" class="animate">
 {{ element.value }}
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
    name: 'sodAnimateForOf',
})
export class AnimateForOfPipe implements PipeTransform {
    constructor(private animationService: AnimationService) {}

    public transform<T>(values$: Observable<T[] | undefined>): Observable<ElevatedMixed<T>[] | undefined> {
        return this.animationService.animateForOf(values$);
    }
}
