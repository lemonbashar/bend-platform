import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {AccountService} from './account.service';
import {AccountInfo, LogoutInfo, LoginInfo} from '../../model/account.model';
import {ConsoleService} from '../../service/console/console.service';
import {environment} from '../../environments/environment';
// noinspection TypeScriptPreferShortImport

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private accountInfo: AccountInfo;
  private authenticationState = new Subject<any>();

  constructor(
    private authService: AccountService,
    private consoleService: ConsoleService
  ) {}

  authenticate(info: LoginInfo) {
    this.authService.login(info)
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

  private saveToCookie(accountInfo: AccountInfo) {
    localStorage.setItem(environment.cache.ACCOUNT_INFO, JSON.stringify(accountInfo));
    localStorage.setItem(environment.cache.AUTHENTICATION_STATE, JSON.stringify(accountInfo.authenticated));
    localStorage.setItem(environment.cache.TOKEN, accountInfo.token);
    localStorage.setItem(environment.cache.AUTHORITIES, JSON.stringify(accountInfo.authorities));
  }

  refreshToken(token: string) {
    localStorage.setItem(environment.cache.TOKEN, token);
  }

  retrieveCookie(): AccountInfo {
    const cookie = localStorage.getItem(environment.cache.ACCOUNT_INFO);
    if (cookie == null || cookie.length < 1) { return null; }
    return this.accountInfo = JSON.parse(cookie );
  }

  isAuthenticated(): boolean {
    const cookie = localStorage.getItem(environment.cache.AUTHENTICATION_STATE);
    if (cookie == null || cookie.length < 1 ) { return false; }
    return JSON.parse(cookie);
  }

  currentToken(): string {
    return localStorage.getItem(environment.cache.TOKEN);
  }

  authorities(): string[] {
    const authorities = localStorage.getItem(environment.cache.AUTHORITIES);
    if (authorities == null || authorities.length < 1) { return []; }
    return JSON.parse(authorities);
  }

  getAuthenticationState(): Observable<any> {
    return this.authenticationState.asObservable();
  }

  deleteCookie() {
    localStorage.removeItem(environment.cache.TOKEN);
    localStorage.removeItem(environment.cache.AUTHORITIES);
    localStorage.removeItem(environment.cache.ACCOUNT_INFO);
    localStorage.removeItem(environment.cache.AUTHENTICATION_STATE);
    this.authenticationState.next(null);
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
}
