import { Component, OnInit } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {HttpErrorResponse} from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {BendAuthenticationService, IAuthenticationCallback, LoginInfo} from 'bend-core';


export class AuthState implements IAuthenticationCallback {

  constructor(
    private ref: DynamicDialogRef,
    private messageService: MessageService
  ) {
  }

  authenticationState(isAuthenticated: boolean, message?: string, error?: HttpErrorResponse): void {
    if (isAuthenticated) {
      this.messageService.add({severity: 'info', summary: 'Message', detail: 'Authentication Success'});
      this.ref.close();
    } else {
      this.messageService.add({severity: 'error', summary: 'Message', detail: 'Authentication Failed'});
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
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loginInfo = new LoginInfo();
  }

  login() {
    this.authenticationService.authenticate(this.loginInfo, new AuthState(this.ref, this.messageService));
  }

  cancel() {
    this.ref.close();
  }
}
