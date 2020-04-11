import {Routes} from '@angular/router';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';
import {BmuUserViewComponent} from '../../crud/user-view/bmu-user-view.component';

const auth = new AuthoritiesConstants();

export const bmuSettingDashboardRoute: Routes = [
  {
    path: 'setting-dashboard/user-mgt',
    component: BmuUserViewComponent,
    data: {
      authorities: auth.allAdmin()
    },
    canActivate: [RouterActivateInterceptor]
  }
];
