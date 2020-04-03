import { Component} from '@angular/core';
import {AuthorityService} from '../authority.service';
import {DashboardComponent} from '../../../view/component/dashboard.component';
import {AppUtilService, ConsoleService, AuthorityCrudData} from 'bend-core';

@Component({
  selector: 'app-authority-dashboard',
  templateUrl: './authority-dashboard.component.html'
})
export class AuthorityDashboardComponent extends DashboardComponent<AuthorityCrudData, AuthorityCrudData> {

  constructor(service: AuthorityService, appUtilService: AppUtilService, dialog: ConsoleService) {
    super(service, appUtilService, dialog, 'Authority');
  }
}
