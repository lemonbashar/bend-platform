import {Component} from '@angular/core';
import {DashboardComponent} from '../../../view/component/dashboard.component';
import {AccountService, AppUtilService, IUser, User} from '../../..';
import {DialogService} from '../../../service/dialog/dialog.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent extends DashboardComponent<IUser> {

  constructor(service: AccountService, appUtilService: AppUtilService, dialog: DialogService) {
    super(service, appUtilService, dialog, 'User');
  }
}
