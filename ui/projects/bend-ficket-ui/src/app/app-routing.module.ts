import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {bfuNavbarRoute} from './layout/navbar/bfu-navbar.route';
import {BfuNavbarComponent} from './layout/navbar/bfu-navbar.component';
import {environment} from '../environments/environment';
import {BfuFooterComponent} from './layout/footer/bfu-footer.component';
import {BfuDashboardComponent} from './layout/dashboard/bfu-dashboard.component';


const NAVBAR_LAYOUT_ROUTE = [...bfuNavbarRoute];

const routes: Routes = [...NAVBAR_LAYOUT_ROUTE];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        ...routes,
        {path: '', component : BfuFooterComponent, outlet: environment.outlet.FOOTER},
        {path: '', component : BfuNavbarComponent, outlet: environment.outlet.NAVBAR},
        {path: '', component : BfuDashboardComponent} /*By Default it will take un-named outlet, i.e central outlet*/
      ],
      { useHash: true, enableTracing: environment.DEBUG_ENABLE }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
