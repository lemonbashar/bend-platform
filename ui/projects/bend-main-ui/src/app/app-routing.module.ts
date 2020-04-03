import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BmuFooterComponent, BmuNavbarComponent} from './layout';
import {BmuDashboardComponent} from './layout/dashboard/bmu-dashboard.component';
import {environment} from '../environments/environment';
import {bmuNavbarRoute} from './layout/navbar/bmu-navbar.route';

const NAVBAR_LAYOUT_ROUTE = [...bmuNavbarRoute];

const routes: Routes = [...NAVBAR_LAYOUT_ROUTE];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        ...routes,
        {path: '', component : BmuFooterComponent, outlet: environment.outlet.FOOTER},
        {path: '', component : BmuNavbarComponent, outlet: environment.outlet.NAVBAR},
        {path: '', component : BmuDashboardComponent} /*By Default it will take un-named outlet, i.e central outlet*/
      ],
      { useHash: true, enableTracing: environment.DEBUG_ENABLE }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
