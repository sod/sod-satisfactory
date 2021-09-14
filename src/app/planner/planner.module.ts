import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DefaultComponent} from './default/default.component';
import {PlannerRoutingModule} from './planner-routing.module';

@NgModule({
    declarations: [DefaultComponent],
    imports: [CommonModule, PlannerRoutingModule],
})
export class PlannerModule {}
