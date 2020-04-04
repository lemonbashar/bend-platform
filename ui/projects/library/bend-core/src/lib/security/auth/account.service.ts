import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AccountInfo, LogoutInfo, LoginInfo} from '../../model/account.model';
import {UserCrudData} from '../../model/user.data';
import {BaseService} from '../../service/base.service';
import {BendResponse} from '../../model/crud/response/bend-response.model';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService<UserCrudData, UserCrudData> {
    constructor(
      http: HttpClient
    ) {
      super('/account', http);
    }

    /*Cause Here we need to request on public url*/
    save(user: UserCrudData): Observable<HttpResponse<BendResponse>> {
      return this.http.post<BendResponse>(this.PUBLIC_URL, user, {observe: 'response'});
    }

    login(info: LoginInfo): Observable<HttpResponse<AccountInfo>> {
        return this.http.post<AccountInfo>(this.PUBLIC_URL + '/login', info, { observe: 'response' });
    }

    accountInfo(): Observable<HttpResponse<AccountInfo>> {
      return this.http.get<AccountInfo>( this.PRIVATE_URL + '/current-account', {observe: 'response'});
    }
}
