import {Observable, Subject} from 'rxjs';
import {BendAccountService} from './bend-account.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ConsoleService} from '../../service/console/console.service';
import {AccountInfo, LoginInfo, LogoutInfo} from '../../model/account.model';
import {httpStatus} from '../http/http-status';
import {BendCoreConstants} from '../../environments/bend-core-constants';

export interface IAuthenticationCallback {
  authenticationState(isAuthenticated: boolean, message?: string, error?: HttpErrorResponse): void;
}

export class ConsoleAuthenticationCallback implements IAuthenticationCallback {
  constructor(
    private consoleService: ConsoleService
  ) {
  }
  authenticationState(isAuthenticated: boolean, message?: string, error?: HttpErrorResponse): void {
    if (error == null) {
      this.consoleService.message(message);
    } else {
      this.consoleService.error(message, error);
    }
  }
}

export interface AbstractAuthenticationService {
  authenticate(info: LoginInfo, callback?: IAuthenticationCallback);

  refreshToken(token: string);

  retrieveAccountInfo(): Observable<AccountInfo>;

  isAuthenticated(): boolean;

  currentToken(): string;

  authorities(): string[];

  getAuthenticationState(): Observable<AccountInfo>;

  logout(info: LogoutInfo);

  hasAnyAuthority(authorities: string[]): boolean;
}

export abstract class AbstractAuthenticationService implements AbstractAuthenticationService {
  protected accountInfo: AccountInfo;
  protected authenticationState = new Subject<AccountInfo>();
  SUCCESS_MESSAGE = 'Authenticated Successfully';
  FAILURE_MESSAGE = 'Error Occurred During Authentication';

  constructor(
    private accountService: BendAccountService,
    private consoleService: ConsoleService
  ) {}

  authenticate(info: LoginInfo, callback: IAuthenticationCallback) {
    if (callback == null) {
      callback = new ConsoleAuthenticationCallback(this.consoleService);
    }
    this.accountService.login(info)
      .subscribe((res: HttpResponse<AccountInfo>) => {
        if (res.status === httpStatus.OK) {
          this.accountInfo = res.body;
          if (this.accountInfo != null && this.accountInfo.authenticated ) {
            this.saveToCookie(this.accountInfo);
            this.authenticationState.next(this.accountInfo);
            callback.authenticationState(true, this.SUCCESS_MESSAGE);
          } else {
            this.authenticationState.next(null);
            callback.authenticationState(false, this.FAILURE_MESSAGE);
          }
        } else {
          this.authenticationState.next(null);
          callback.authenticationState(false, this.FAILURE_MESSAGE);
        }
        } , (res: HttpErrorResponse) => {
          this.deleteCookie();
          this.authenticationState.next(null);
          callback.authenticationState(false, this.FAILURE_MESSAGE);
        }
      );
  }

  protected saveToCookie(accountInfo: AccountInfo) {
    this.saveCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE, JSON.stringify(accountInfo.authenticated));
    this.saveCookieByKey(BendCoreConstants.cookies.TOKEN, accountInfo.token);
    this.saveCookieByKey(BendCoreConstants.cookies.AUTHORITIES, JSON.stringify(accountInfo.authorities));
    accountInfo.token = null;
    accountInfo.authorities = [];
    this.saveCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO, JSON.stringify(accountInfo));
  }

  refreshToken(token: string) {
    this.deleteCookieByKey(BendCoreConstants.cookies.TOKEN);
    this.saveCookieByKey(BendCoreConstants.cookies.TOKEN, token);
  }

  retrieveAccountInfo(): Observable<AccountInfo> {
    const cookie = this.retrieveCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO);
    if (cookie == null || cookie.length < 1) {
      this.accountService.accountInfo().subscribe((resp: HttpResponse<AccountInfo>) => {
        if (resp.status === httpStatus.OK) {
          const accInfo = resp.body;
          this.saveToCookie(accInfo);
          const sub = new Subject();
          sub.next(accInfo);
          return sub.asObservable();
        } else {
          this.consoleService.error('No Account Info Found');
        }
      }, (err: HttpErrorResponse) => {
        this.consoleService.error('Error Occurred During Account Fetch', err);
      });
    }
    this.accountInfo = JSON.parse(cookie );
    const subject = new Subject();
    subject.next(this.accountInfo);
    return subject.asObservable();
  }

  isAuthenticated(): boolean {
    const cookie = this.retrieveCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE);
    if (cookie == null || cookie.length < 1 ) { return false; }
    return JSON.parse(cookie);
  }

  currentToken(): string {
    return this.retrieveCookieByKey(BendCoreConstants.cookies.TOKEN);
  }

  authorities(): string[] {
    const authorities = this.retrieveCookieByKey(BendCoreConstants.cookies.AUTHORITIES);
    if (authorities == null || authorities.length < 1) { return []; }
    return JSON.parse(authorities);
  }

  getAuthenticationState(): Observable<AccountInfo> {
    return this.authenticationState.asObservable();
  }

  protected deleteCookie() {
    this.deleteCookieByKey(BendCoreConstants.cookies.TOKEN);
    this.deleteCookieByKey(BendCoreConstants.cookies.AUTHORITIES);
    this.deleteCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO);
    this.deleteCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE);
  }

  logout(info: LogoutInfo) {
    this.deleteCookie();
    this.authenticationState.next(null);
    this.consoleService.message('Logout Success of User' + info.logoutRule);
  }

  hasAnyAuthority(authorities: string[]): boolean {
    const grantedAuthorities: string[] = this.authorities();
    for (const auth of authorities) {
      if (grantedAuthorities.includes(auth)) { return true; }
    }
    return false;
  }

  protected deleteCookieByKey(key: string) {
    localStorage.removeItem(key);
  }

  protected saveCookieByKey(key: string, value: string) {
    this.saveToLocalStorage(key, value);
  }

  protected retrieveCookieByKey(key: string): string {
    return this.retrieveFromLocalStorage(key);
  }

  protected saveToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  protected retrieveFromLocalStorage(key: string): string {
    return localStorage.getItem(key);
  }
}
