import { Component} from '@angular/core';
import {AppUtilService, IMiscellaneousSetup} from '../../..';
import {MiscellaneousSetupService} from '../miscellaneous-setup.service';
import {DialogService} from '../../../service/dialog/dialog.service';
import {DashboardComponent} from '../../../view/component/dashboard.component';

@Component({
  selector: 'app-miscellaneous-setup',
  templateUrl: './miscellaneous-setup-dashboard.component.html'
})
export class MiscellaneousSetupDashboardComponent extends DashboardComponent<IMiscellaneousSetup> {

  constructor(service: MiscellaneousSetupService, appUtilService: AppUtilService, dialog: DialogService) {
    super(service, appUtilService, dialog, 'MiscellaneousSetup');
  }
}
