import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserCrudData, BaseService, AuthorityCrudData} from 'bend-core';


@Injectable({ providedIn: 'root' })
export class UserCrudService extends BaseService<UserCrudData, UserCrudData> {
  constructor(
    http: HttpClient
  ) {
    super('/user', http);
    this.DEFAULT_URL = this.PRIVATE_URL;
  }
}
