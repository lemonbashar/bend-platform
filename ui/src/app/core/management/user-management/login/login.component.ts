import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {AccountService, AppUtilService, AuthenticationService, ConsoleService, LoginInfo} from 'bend-core';
import {configUserSettings} from '../../..';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginInfo: LoginInfo;
  usernameExist: boolean;
  loginFailed = null;

  constructor(
    private accountService: AccountService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private appUtilService: AppUtilService,
    private consoleService: ConsoleService
  ) { }

  ngOnInit() {
    this.info = new LoginInfo();
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
    return this.loginInfo;
  }

  set info(info: LoginInfo) {
    this.loginInfo = info;
  }

  checkUsername(username: string) {
    if (username.length >= configUserSettings.MIN_USER_LENGTH) {
      this.loginFailed = false;
      this.appUtilService.checkExistence('User', 'username', username)
        .subscribe((res: HttpResponse<boolean>) => {
          this.usernameExist = res.body;
        }, (error: HttpErrorResponse) => {
          this.consoleService.error('Error during Check Username', error);
          this.usernameExist = false;
        });
    }
  }
}
