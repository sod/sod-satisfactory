import {NgModule} from '@angular/core';
import {AnimateForOfPipe} from './pipe/animate-for-of.pipe';
import {AnimatePipe} from './pipe/animate.pipe';

@NgModule({
    declarations: [AnimatePipe, AnimateForOfPipe],
    exports: [AnimatePipe, AnimateForOfPipe],
})
export class SodAnimateModule {}
