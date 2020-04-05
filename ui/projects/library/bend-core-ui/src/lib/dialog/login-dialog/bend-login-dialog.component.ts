import { Component, OnInit } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {HttpErrorResponse} from '@angular/common/http';
import {BendAuthenticationService, IAuthenticationCallback, LoginInfo} from 'bend-core';
import {BendToastService} from '../../message/bend-toast.service';


export class AuthState implements IAuthenticationCallback {

  constructor(
    private ref: DynamicDialogRef,
    private toastService: BendToastService
  ) {
  }

  authenticationState(isAuthenticated: boolean, message?: string, error?: HttpErrorResponse): void {
    if (isAuthenticated) {
      this.toastService.info('Authentication Success');
      this.ref.close();
    } else {
      this.toastService.error('Authentication Failed');
    }
  }
}

@Component({
  selector: 'bend-login-dialog',
  templateUrl: './bend-login-dialog.component.html'
})
export class BendLoginDialogComponent implements OnInit {
  loginInfo: LoginInfo;

  constructor(
    private authenticationService: BendAuthenticationService,
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private toastService: BendToastService
  ) { }

  ngOnInit(): void {
    this.loginInfo = new LoginInfo();
  }

  login() {
    this.authenticationService.authenticate(this.loginInfo, new AuthState(this.ref, this.toastService));
  }

  cancel() {
    this.ref.close();
  }
}
