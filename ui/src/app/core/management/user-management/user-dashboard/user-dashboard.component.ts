import {Component} from '@angular/core';
import {DashboardComponent} from '../../../view/component/dashboard.component';
import {AccountService, AppUtilService, DialogService, IUser} from 'bend-core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent extends DashboardComponent<IUser> {

  constructor(service: AccountService, appUtilService: AppUtilService, dialog: DialogService) {
    super(service, appUtilService, dialog, 'User');
  }
}
