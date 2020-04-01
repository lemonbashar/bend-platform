import {Routes} from '@angular/router';
import {AuthorityCreateComponent} from '../authority-create/authority-create.component';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';

const auth = new AuthoritiesConstants();

export const authorityDashboardRoute: Routes = [
  {
    path: 'authority-dashboard/authority-create',
    component: AuthorityCreateComponent,
    data: {
      authorities: [...auth.userAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  }
];

