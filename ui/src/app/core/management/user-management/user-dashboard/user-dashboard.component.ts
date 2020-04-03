import {Component} from '@angular/core';
import {DashboardComponent} from '../../../view/component/dashboard.component';
import {AccountService, AppUtilService, ConsoleService, UserCrudData} from 'bend-core';
import {UserCrudService} from '../user-crud.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent extends DashboardComponent<UserCrudData, UserCrudData> {

  constructor(service: UserCrudService, appUtilService: AppUtilService, dialog: ConsoleService) {
    super(service, appUtilService, dialog, 'User');
  }
}
