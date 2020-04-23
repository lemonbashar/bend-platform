import {Routes} from '@angular/router';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';
import {BmuUserProfileViewComponent} from './bmu-user-profile-view/bmu-user-profile-view.component';
import {BmuUserDetailViewComponent} from './bmu-user-detail-view.component';

const auth = new AuthoritiesConstants();

export const bmuUserCrudRoute: Routes = [
  {
    path: 'bmu-crud/user-profile/:id',
    component: BmuUserProfileViewComponent,
    data: {
      authorities: auth.superAdmin()
    },
    canActivate: [RouterActivateInterceptor]
  },
  {
    path: 'bmu-crud/user-view/:id',
    component: BmuUserDetailViewComponent,
    canActivate: [RouterActivateInterceptor]
  }
];
