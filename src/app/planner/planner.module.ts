import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DefaultComponent} from './component/default/default.component';
import {PlannerRoutingModule} from './planner-routing.module';

@NgModule({
    declarations: [DefaultComponent],
    imports: [CommonModule, PlannerRoutingModule, SharedModule],
})
export class PlannerModule {}
