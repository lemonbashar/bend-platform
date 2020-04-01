import { Component} from '@angular/core';
import {AuthorityService} from '../authority.service';
import {DashboardComponent} from '../../../view/component/dashboard.component';
import {AppUtilService, DialogService, IAuthority} from 'bend-core';

@Component({
  selector: 'app-authority-dashboard',
  templateUrl: './authority-dashboard.component.html'
})
export class AuthorityDashboardComponent extends DashboardComponent<IAuthority> {

  constructor(service: AuthorityService, appUtilService: AppUtilService, dialog: DialogService) {
    super(service, appUtilService, dialog, 'Authority');
  }
}
