import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {AccountService} from './account.service';
import {IAccountInfo, ILogoutInfo, IUserInfo} from '../../model/account.model';
import {DialogService} from '../../service/dialog/dialog.service';
// noinspection TypeScriptPreferShortImport

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private accountInfo: IAccountInfo;
  private authenticationState = new Subject<any>();

  constructor(
    private authService: AccountService,
    private dialog: DialogService
  ) {}

  authenticate(info: IUserInfo) {
    this.authService.login(info)
      .subscribe((res: HttpResponse<IAccountInfo>) => {
          this.accountInfo = res.body;
          this.saveToCookie(this.accountInfo);
          this.authenticationState.next(this.accountInfo);
       } , (res: HttpErrorResponse) => {
          this.dialog.error('Error during Authenticate', res);
          this.deleteCookie();
          this.authenticationState.next(null);
        }
      );
  }

  private saveToCookie(accountInfo: IAccountInfo) {
    localStorage.setItem(environment.cache.ACCOUNT_INFO, JSON.stringify(accountInfo));
    localStorage.setItem(environment.cache.AUTHENTICATION_STATE, JSON.stringify(accountInfo.authenticated));
    localStorage.setItem(environment.cache.TOKEN, accountInfo.token);
    localStorage.setItem(environment.cache.AUTHORITIES, JSON.stringify(accountInfo.authorities));
  }

  retrieveCookie(): IAccountInfo {
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

  logout(info: ILogoutInfo) {
    this.authService.logout(info)
      .subscribe((res: HttpResponse<Map<string, object>>) => {
          this.deleteCookie();
          this.authenticationState.next(null);
        } , (res: HttpErrorResponse) => {
          this.dialog.error('Error During Logout', res);
        }
      );
  }

  hasAnyAuthority(authorities: string[]) {
    const grantedAuthorities: string[] = this.authorities();
    for (let i = 0; i < authorities.length; i++) {
      if (grantedAuthorities.includes(authorities[i])) { return true; }
    }
    return false;
  }
}
