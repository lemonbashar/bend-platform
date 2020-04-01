import {Routes} from '@angular/router';
import {UserDashboardComponent} from '../user-management/user-dashboard/user-dashboard.component';
import {AuthorityDashboardComponent} from '../authority-management/authority-dashboard/authority-dashboard.component';
import {SettingDashboardComponent} from '../setting-management/setting-dashboard/setting-dashboard.component';
import {MiscellaneousSetupDashboardComponent} from '../miscellaneous-management/miscellaneous-setup-dashboard/miscellaneous-setup-dashboard.component';
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
    path: 'management-dashboard/miscellaneous-setup-dashboard',
    component: MiscellaneousSetupDashboardComponent,
    data: {
      authorities: [...auth.settingAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  },
  {
    path: 'management-dashboard/setting-dashboard',
    component: SettingDashboardComponent,
    data: {
      authorities: [...auth.settingAdmin()]
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
