import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';
import {IAccountInfo, ILogoutInfo, IUserInfo} from '../../model/account.model';
import {BaseService} from '../../service/base.service';
import {IUser} from '../..';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService<IUser> {
    constructor(
      http: HttpClient
    ) {
      super('account', http);
    }

    /*Cause Here we need to request on public url*/
    save(user: IUser): Observable<HttpResponse<Map<string, object>>> {
      return this.http.post<Map<string, object>>(this.PUBLIC_URL, user, {observe: 'response'});
    }

    login(info: IUserInfo): Observable<HttpResponse<IAccountInfo>> {
        return this.http.post<IAccountInfo>(this.PUBLIC_URL + '/login-jwt', info, { observe: 'response' });
    }

    logout(info: ILogoutInfo): Observable<HttpResponse<Map<string, object>>> {
        return this.http.post<Map<string, object>>(this.PUBLIC_URL + '/logout', info, {observe: 'response' });
    }
}
