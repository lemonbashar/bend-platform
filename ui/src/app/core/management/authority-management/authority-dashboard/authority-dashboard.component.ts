import { Component} from '@angular/core';
import {Authority, IAuthority} from '../../../model/authority.model';
import {AuthorityService} from '../authority.service';
import {DialogService} from '../../../service/dialog/dialog.service';
import {DashboardComponent} from '../../../view/component/dashboard.component';
import {AppUtilService} from '../../..';

@Component({
  selector: 'app-authority-dashboard',
  templateUrl: './authority-dashboard.component.html'
})
export class AuthorityDashboardComponent extends DashboardComponent<IAuthority> {

  constructor(service: AuthorityService, appUtilService: AppUtilService, dialog: DialogService) {
    super(service, appUtilService, dialog, 'Authority');
  }
}
