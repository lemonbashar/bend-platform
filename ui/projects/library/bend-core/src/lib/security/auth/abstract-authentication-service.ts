import {AccountInfo, LoginInfo, LogoutInfo} from '../../model/account.model';
import {Observable, Subject} from 'rxjs';
import {AccountService} from './account.service';
import {ConsoleService} from '../../service/console/console.service';
import {BendToastService} from '../../service/message/bend-toast.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {httpStatus} from '../http/http-status';

export interface AbstractAuthenticationService {
  authenticate(info: LoginInfo);

  refreshToken(token: string);

  retrieveAccountInfo(): Observable<AccountInfo>;

  isAuthenticated(): boolean;

  currentToken(): string;

  authorities(): string[];

  getAuthenticationState(): Observable<any>;

  logout(info: LogoutInfo);

  hasAnyAuthority(authorities: string[]): boolean;
}

export abstract class AbstractAuthenticationService implements AbstractAuthenticationService {
  protected accountInfo: AccountInfo;
  protected authenticationState = new Subject<any>();

  constructor(
    private accountService: AccountService,
    private consoleService: ConsoleService,
    protected toastService: BendToastService
  ) {}

  authenticate(info: LoginInfo) {
    this.accountService.login(info)
      .subscribe((res: HttpResponse<AccountInfo>) => {
          this.accountInfo = res.body;
          this.saveToCookie(this.accountInfo);
          this.authenticationState.next(this.accountInfo);
        } , (res: HttpErrorResponse) => {
          this.consoleService.error('Error during Authenticate', res);
          this.deleteCookie();
          this.authenticationState.next(null);
        }
      );
  }

  protected saveToCookie(accountInfo: AccountInfo) {
    this.saveCookieByKey(environment.cookies.AUTHENTICATION_STATE, JSON.stringify(accountInfo.authenticated));
    this.saveCookieByKey(environment.cookies.TOKEN, accountInfo.token);
    this.saveCookieByKey(environment.cookies.AUTHORITIES, JSON.stringify(accountInfo.authorities));
    accountInfo.token = null;
    accountInfo.authorities = [];
    this.saveCookieByKey(environment.cookies.ACCOUNT_INFO, JSON.stringify(accountInfo));
  }

  refreshToken(token: string) {
    this.saveCookieByKey(environment.cookies.TOKEN, token);
  }

  retrieveAccountInfo(): Observable<AccountInfo> {
    const cookie = this.retrieveCookieByKey(environment.cookies.ACCOUNT_INFO);
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
        this.toastService.makeError('Error Occurred During Account Fetch', null, err);
      });
    }
    this.accountInfo = JSON.parse(cookie );
    const subject = new Subject();
    subject.next(this.accountInfo);
    return subject.asObservable();
  }

  isAuthenticated(): boolean {
    const cookie = this.retrieveCookieByKey(environment.cookies.AUTHENTICATION_STATE);
    if (cookie == null || cookie.length < 1 ) { return false; }
    return JSON.parse(cookie);
  }

  currentToken(): string {
    return this.retrieveCookieByKey(environment.cookies.TOKEN);
  }

  authorities(): string[] {
    const authorities = this.retrieveCookieByKey(environment.cookies.AUTHORITIES);
    if (authorities == null || authorities.length < 1) { return []; }
    return JSON.parse(authorities);
  }

  getAuthenticationState(): Observable<any> {
    return this.authenticationState.asObservable();
  }

  protected deleteCookie() {
    this.deleteCookieByKey(environment.cookies.TOKEN)
    this.deleteCookieByKey(environment.cookies.AUTHORITIES);
    this.deleteCookieByKey(environment.cookies.ACCOUNT_INFO);
    this.deleteCookieByKey(environment.cookies.AUTHENTICATION_STATE);
  }

  logout(info: LogoutInfo) {
    this.deleteCookie();
    this.authenticationState.next(null);
    this.consoleService.message('Logout Success of User' + info.logoutRule);
  }

  hasAnyAuthority(authorities: string[]) {
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
