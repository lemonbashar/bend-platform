/*
import {Injectable} from '@angular/core';
import {BendAccountService} from './bend-account.service';
import {AbstractAuthenticationService, IAuthenticationCallback} from './abstract-authentication-service';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../environments/environment';
import {ConsoleService} from '../../service/console/console.service';
import {BendToastService} from '../../service/message/bend-toast.service';
import {LoginInfo} from '../../model/account.model';

@Injectable({ providedIn: 'root' })
export class BendCookieAuthenticationService extends AbstractAuthenticationService {
  constructor(
    accountService: BendAccountService,
    consoleService: ConsoleService,
    toastService: BendToastService,
    protected cookieService: CookieService
  ) {
    super(accountService, consoleService, toastService);
  }

  authenticate(info: LoginInfo, callback?: IAuthenticationCallback) {
    this.saveToLocalStorage(environment.cookies.TOKEN_LIFETIME, JSON.stringify(info.rememberMe ? environment.cookies.lifetime.TOKEN_LIFETIME_FOR_REMEMBER_ME : environment.cookies.lifetime.TOKEN_LIFETIME));
    super.authenticate(info, callback);
  }

  refreshToken(token: string) {
    super.refreshToken(token);
    this.refreshOtherThingsRatherThanToken(token);
  }

  protected deleteCookieByKey(key: string) {
    this.cookieService.delete(key);
  }

  protected saveCookieByKey(key: string, value: string) {
    this.cookieService.set(key, value, this.dateValidity());
  }

  protected retrieveCookieByKey(key: string): string {
    return this.cookieService.get(key);
  }

  protected dateValidity(): Date {
    const date = new Date();
    date.setSeconds(date.getSeconds() + Number(this.retrieveFromLocalStorage(environment.cookies.TOKEN_LIFETIME)));
    return date;
  }

  protected refreshOtherThingsRatherThanToken(token: string) {
    if (token != null && token.length > 30) {
      this.saveCookieByKey(environment.cookies.AUTHENTICATION_STATE, JSON.stringify(true));
      this.saveCookieByKey(environment.cookies.AUTHORITIES, this.retrieveCookieByKey(environment.cookies.AUTHORITIES));
      this.saveCookieByKey(environment.cookies.ACCOUNT_INFO, this.retrieveCookieByKey(environment.cookies.ACCOUNT_INFO));
    }
  }
}
*/
