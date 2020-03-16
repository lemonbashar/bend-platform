import {AuthoritiesConstants} from '../../..';
import {Routes} from '@angular/router';
import {RouterActivateInterceptor} from '../../../security/route/router-activate.interceptor';
import {AuthorityCreateComponent} from '../authority-create/authority-create.component';

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

