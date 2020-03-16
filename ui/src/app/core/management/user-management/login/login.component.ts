import { Component, OnInit } from '@angular/core';
import {AccountService, configUserSettings} from '../../../index';
import {Router} from '@angular/router';
import {AppUtilService} from '../../../index';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {AuthenticationService} from '../../../security/auth/authentication-service';
import {IUserInfo, UserInfo} from '../../../model/account.model';
import {DialogService} from '../../../service/dialog/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  iUserInfo: IUserInfo;
  usernameExist: boolean;
  loginFailed = null;

  constructor(
    private accountService: AccountService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private appUtilService: AppUtilService,
    private dialog: DialogService
  ) { }

  ngOnInit() {
    this.info = new UserInfo();
    this.usernameExist = null;
  }

  login() {
    this.authenticationService.authenticate(this.info);
    this.authenticationService.getAuthenticationState().subscribe(info => {
      if (info != null) {
        this.router.navigate(['/']);
      } else {
        this.loginFailed = true;
      }
    });
  }


  get info() {
    return this.iUserInfo;
  }

  set info(info: UserInfo) {
    this.iUserInfo = info;
  }

  checkUsername(username: string) {
    if (username.length >= configUserSettings.MIN_USER_LENGTH) {
      this.loginFailed = false;
      this.appUtilService.checkExistence('User', 'username', username)
        .subscribe((res: HttpResponse<boolean>) => {
          this.usernameExist = res.body;
        }, (error: HttpErrorResponse) => {
          this.dialog.error('Error during Check Username', error);
          this.usernameExist = false;
        });
    }
  }
}
