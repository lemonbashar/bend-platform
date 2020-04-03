import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {dashboardRoute} from './layout/dashboard/dashboard.route';
import {environment} from '../environments/environment';
import {FooterComponent, NavbarComponent} from './layout';
import {navbarRoute} from './layout/navbar/navbar.route';
import {managementDashboardRoute} from './core/management/management-dashboard/management-dashboard.route';
import {authorityDashboardRoute} from './core/management/authority-management/authority-dashboard/authority-dashboard.route';
import {userDashboardRoute} from './core/management/user-management/user-dashboard/user-dashboard.route';
import {appInfoDashboardRoute} from './core/management/app-info-dashboard/app-info-dashboard.route';

const OUTLET_NAVBAR = environment.outlet.NAVBAR;
const OUTLET_FOOTER = environment.outlet.FOOTER;
const DEBUG_ENABLED = environment.DEBUG_ENABLE;

const LAYOUT_ROUTES = [ ...dashboardRoute, ...navbarRoute, ...appInfoDashboardRoute]; /*Register all routing there*/
const SETTING_ROUTES = [...managementDashboardRoute, ...authorityDashboardRoute]; /*Register all routing there*/
const USER_ROUTES = [...userDashboardRoute]; /*Register all routing there*/

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        ...LAYOUT_ROUTES, ...SETTING_ROUTES, ...USER_ROUTES,
        {path: '', component : FooterComponent, outlet: OUTLET_FOOTER},
        {path: '', component : NavbarComponent, outlet: OUTLET_NAVBAR},
        {path: '', component : DashboardComponent} /*By Default it will take un-named outlet, i.e central outlet*/
      ],
      { useHash: true, enableTracing: DEBUG_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
