import {Injectable} from '@angular/core';
import {AccountService} from './account.service';
import {ConsoleService} from '../../service/console/console.service';
import {BendToastService} from '../../service/message/bend-toast.service';
import {AbstractAuthenticationService} from './abstract-authentication-service';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../environments/environment';
import {LoginInfo} from '../../model/account.model';

@Injectable({ providedIn: 'root' })
export class CookieAuthenticationService extends AbstractAuthenticationService {
  constructor(
    accountService: AccountService,
    consoleService: ConsoleService,
    toastService: BendToastService,
    protected cookieService: CookieService
  ) {
    super(accountService, consoleService, toastService);
  }

  authenticate(info: LoginInfo) {
    this.saveToLocalStorage(environment.cookies.TOKEN_LIFETIME, JSON.stringify(info.rememberMe ? environment.cookies.lifetime.TOKEN_LIFETIME_FOR_REMEMBER_ME : environment.cookies.lifetime.TOKEN_LIFETIME));
    super.authenticate(info);
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
