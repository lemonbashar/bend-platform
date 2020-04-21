import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BaseService, DataResponse, UserCrudData} from 'bend-core';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BmuUserCrudService extends BaseService<UserCrudData, UserCrudData> {
    constructor(
      http: HttpClient
    ) {
      super('/user', http);
    }

    public findByUsername(username: string): Observable<HttpResponse<DataResponse<UserCrudData>>> {
      return this.http.get<DataResponse<UserCrudData>>( `${this.DEFAULT_URL}/by-username/${username}`, {observe: 'response'});
    }

    public findByCurrentUser(): Observable<HttpResponse<DataResponse<UserCrudData>>> {
      return this.http.get<DataResponse<UserCrudData>>( `${this.DEFAULT_URL}/current-user`, {observe: 'response'});
    }
}
