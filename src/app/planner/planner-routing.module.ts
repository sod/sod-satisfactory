import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './component/default/default.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlannerRoutingModule {}
