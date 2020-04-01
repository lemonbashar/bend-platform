import { Component} from '@angular/core';
import {ISetting} from '../../../model/setting.model';
import {DashboardComponent} from '../../../view/component/dashboard.component';
import {SettingService} from '../setting.service';
import {AppUtilService, DialogService} from 'bend-core';

@Component({
  selector: 'app-settings',
  templateUrl: './setting-dashboard.component.html'
})
export class SettingDashboardComponent extends DashboardComponent<ISetting> {

  constructor(service: SettingService, appUtilService: AppUtilService, dialog: DialogService) {
    super(service, appUtilService, dialog, 'Setting');
  }
}
