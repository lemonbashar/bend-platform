import {Routes} from '@angular/router';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';
import {BmuAbstractListViewComponent} from '../../view/bmu-abstract-list-view.component';

const auth = new AuthoritiesConstants();

export const bmuNavbarRoute: Routes = [
  {
    path: 'user-mgt',
    component: BmuAbstractListViewComponent,
    data: {
      authorities: [...auth.allAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  },
];
