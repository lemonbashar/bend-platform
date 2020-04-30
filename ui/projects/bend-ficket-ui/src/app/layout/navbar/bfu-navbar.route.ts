import {Routes} from '@angular/router';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';
import {BfuTicketDashboardComponent} from '../../view/bfu-ticket-dashboard/bfu-ticket-dashboard.component';

const auth = new AuthoritiesConstants();

export const bfuNavbarRoute: Routes = [
  {
    path: 'ticket-dashboard',
    component: BfuTicketDashboardComponent,
    canActivate: [RouterActivateInterceptor]
  }
];
