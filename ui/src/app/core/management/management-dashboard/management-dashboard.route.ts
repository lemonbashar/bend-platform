import {Routes} from '@angular/router';
import {UserDashboardComponent} from '../user-management/user-dashboard/user-dashboard.component';
import {AuthorityDashboardComponent} from '../authority-management/authority-dashboard/authority-dashboard.component';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';

const auth = new AuthoritiesConstants();

export const managementDashboardRoute: Routes = [
  {
    path: 'management-dashboard/authority-dashboard',
    component: AuthorityDashboardComponent,
    data: {
      authorities: [...auth.userAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  },
  {
    path: 'management-dashboard/user-dashboard',
    component: UserDashboardComponent,
    data: {
      authorities: [...auth.userAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  }
];
