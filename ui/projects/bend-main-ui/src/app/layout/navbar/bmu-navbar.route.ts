import {Routes} from '@angular/router';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';
import {BmuUserViewComponent} from '../../view/crud/user-view/bmu-user-view.component';

const auth = new AuthoritiesConstants();

export const bmuNavbarRoute: Routes = [
  {
    path: 'user-mgt',
    component: BmuUserViewComponent,
    data: {
      authorities: [...auth.allAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  },
];
