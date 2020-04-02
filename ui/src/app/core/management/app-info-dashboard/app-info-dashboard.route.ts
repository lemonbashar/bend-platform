import {Routes} from '@angular/router';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';
import {AppInfoDashboardComponent} from './app-info-dashboard.component';

const auth = new AuthoritiesConstants();

export const appInfoDashboardRoute: Routes = [
  {
    path: 'app-info-dashboard/metrics',
    component: AppInfoDashboardComponent,
    data: {
      authorities: [...auth.allAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  }
];
