import {Component} from '@angular/core';
import {DashboardComponent} from '../../../view/component/dashboard.component';
import {AccountService, AppUtilService, ConsoleService, UserCrudData} from 'bend-core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent extends DashboardComponent<UserCrudData, UserCrudData> {

  constructor(service: AccountService, appUtilService: AppUtilService, dialog: ConsoleService) {
    super(service, appUtilService, dialog, 'User');
  }
}
