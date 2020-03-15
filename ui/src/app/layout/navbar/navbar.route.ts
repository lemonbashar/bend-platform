import {Routes} from '@angular/router';
import {LoginComponent} from '../../core/management/user-management';
import {RouterActivateInterceptor} from '../../core/security/route/router-activate.interceptor';
import {AuthoritiesConstants} from '../../core';
import {ManagementDashboardComponent} from '../../core/management/management-dashboard/management-dashboard.component';

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
