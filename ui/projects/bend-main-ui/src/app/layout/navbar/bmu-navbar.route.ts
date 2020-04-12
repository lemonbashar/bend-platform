import {Routes} from '@angular/router';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';
import {BmuSettingDashboardComponent} from '../../view/dashboard/bmu-setting-dashboard/bmu-setting-dashboard.component';

const auth = new AuthoritiesConstants();

export const bmuNavbarRoute: Routes = [
  {
    path: 'setting-dashboard',
    component: BmuSettingDashboardComponent,
    data: {
      authorities: auth.allAdmin()
    },
    canActivate: [RouterActivateInterceptor]
  }
];
