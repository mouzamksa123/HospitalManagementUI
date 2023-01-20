import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { dashboardComponent } from 'app/modules/admin/dashboard/dashboard.component';

const dashboardRoutes: Route[] = [
    {
        path     : '',
        component: dashboardComponent
    }
];

@NgModule({
    declarations: [
        dashboardComponent
    ],
    imports     : [
        RouterModule.forChild(dashboardRoutes)
    ]
})
export class dashboardModule
{
}
