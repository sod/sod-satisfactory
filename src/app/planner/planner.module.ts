import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlannerRoutingModule} from './planner-routing.module';
import {DefaultComponent} from './default/default.component';

@NgModule({
    declarations: [DefaultComponent],
    imports: [CommonModule, PlannerRoutingModule],
})
export class PlannerModule {}
