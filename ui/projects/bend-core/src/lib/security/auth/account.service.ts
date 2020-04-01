import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IAccountInfo, ILogoutInfo, IUserInfo} from '../../model/account.model';
import {IUser} from '../../model/user.model';
import {BaseService} from '../../../../../../src/app/core/service/base.service';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService<IUser> {
    constructor(
      http: HttpClient
    ) {
      super('/account', http);
    }

    /*Cause Here we need to request on public url*/
    save(user: IUser): Observable<HttpResponse<Map<string, object>>> {
      return this.http.post<Map<string, object>>(this.PUBLIC_URL, user, {observe: 'response'});
    }

    login(info: IUserInfo): Observable<HttpResponse<IAccountInfo>> {
        return this.http.post<IAccountInfo>(this.PUBLIC_URL + '/login', info, { observe: 'response' });
    }

    logout(info: ILogoutInfo): Observable<HttpResponse<Map<string, object>>> {
        return this.http.post<Map<string, object>>(this.PUBLIC_URL + '/logout', info, {observe: 'response' });
    }
}
