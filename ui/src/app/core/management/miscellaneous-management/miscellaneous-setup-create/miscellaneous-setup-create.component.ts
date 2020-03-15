import { Component, OnInit } from '@angular/core';
import {IMiscellaneousSetup, MiscellaneousSetup} from '../../..';
import {MiscellaneousSetupService} from '../miscellaneous-setup.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {httpStatus} from '../../../security/http/http-status';
import {DialogService} from '../../../service/dialog/dialog.service';

@Component({
  selector: 'app-miscellaneous-setup-create',
  templateUrl: './miscellaneous-setup-create.component.html'
})
export class MiscellaneousSetupCreateComponent implements OnInit {
  miscellaneousSetup: IMiscellaneousSetup;

  constructor(
    private miscellaneousSetupService: MiscellaneousSetupService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: DialogService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({miscellaneousSetup}) => {
      this.miscellaneousSetup = miscellaneousSetup;
    });
  }

  save() {
    if (this.miscellaneousSetup.id == null) {
      this.miscellaneousSetupService.save(this.miscellaneousSetup)
        .subscribe((res: HttpResponse<Map<string, object>>) => {
          if (res.status === httpStatus.OK) {
            this.showMessage('Miscellaneous Setup Save Success', true);
          } else { this.showMessage('Error During Save MiscellaneousSetup', false); }
        }, (error: HttpErrorResponse) => {
          this.dialog.error('Error During Save MiscellaneousSetup', error);
        });
    } else {
      this.miscellaneousSetupService.update(this.miscellaneousSetup)
        .subscribe((res: HttpResponse<Map<string, object>>) => {
          if (res.status === httpStatus.OK) {
            this.showMessage('Miscellaneous Setup Update Success', true);
          } else { this.showMessage('Error During Update MiscellaneousSetup', false); }
        }, (error: HttpErrorResponse) => {
          this.dialog.error('Error During Update MiscellaneousSetup', error);
        });
    }
  }

  private showMessage(message: string, success: boolean) {
    this.dialog.message(message);
    if (success) {
      this.dialog.goTo(['/management-dashboard/miscellaneous-setup-dashboard']);
    }
  }
}
