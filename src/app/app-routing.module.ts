import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./planner/planner.module').then((m) => m.PlannerModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking', useHash: true})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
