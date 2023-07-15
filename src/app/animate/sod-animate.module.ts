import {NgModule} from '@angular/core';
import {AnimatePipe} from './pipe/animate.pipe';

@NgModule({
    declarations: [AnimatePipe],

    exports: [AnimatePipe],
})
export class SodAnimateModule {}
