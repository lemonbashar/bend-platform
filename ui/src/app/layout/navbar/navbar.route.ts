import {Routes} from '@angular/router';
import {LoginComponent} from '../../core/management/user-management';
import {ManagementDashboardComponent} from '../../core/management/management-dashboard/management-dashboard.component';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';

const auth = new AuthoritiesConstants();

export const navbarRoute: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'management-dashboard',
    component: ManagementDashboardComponent,
    data: {
      authorities: [...auth.allAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  }
];
