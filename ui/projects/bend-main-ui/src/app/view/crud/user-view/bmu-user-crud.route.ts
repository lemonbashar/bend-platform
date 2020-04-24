import {Routes} from '@angular/router';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';
import {BmuUserProfileViewComponent} from './bmu-user-profile-view/bmu-user-profile-view.component';
import {BmuUserDetailViewComponent} from './bmu-user-detail-view.component';
import {environment} from '../../../../environments/environment';

const auth = new AuthoritiesConstants();
const route = environment.routes.crud.user_crud;

export const bmuUserCrudRoute: Routes = [
  {
    path: `${route.user_profile}/:id`,
    component: BmuUserProfileViewComponent,
    data: {
      authorities: auth.superAdmin()
    },
    canActivate: [RouterActivateInterceptor]
  },
  {
    path: `${route.user_view}/:id`,
    component: BmuUserDetailViewComponent,
    canActivate: [RouterActivateInterceptor]
  }
];
