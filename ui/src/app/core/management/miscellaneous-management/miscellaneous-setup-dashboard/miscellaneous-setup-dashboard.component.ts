import { Component} from '@angular/core';
import {MiscellaneousSetupService} from '../miscellaneous-setup.service';
import {DashboardComponent} from '../../../view/component/dashboard.component';
import {IMiscellaneousSetup} from '../../..';
import {AppUtilService, DialogService} from 'bend-core';

@Component({
  selector: 'app-miscellaneous-setup',
  templateUrl: './miscellaneous-setup-dashboard.component.html'
})
export class MiscellaneousSetupDashboardComponent extends DashboardComponent<IMiscellaneousSetup> {

  constructor(service: MiscellaneousSetupService, appUtilService: AppUtilService, dialog: DialogService) {
    super(service, appUtilService, dialog, 'MiscellaneousSetup');
  }
}
