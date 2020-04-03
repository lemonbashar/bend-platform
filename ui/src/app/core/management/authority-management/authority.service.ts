import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService, AuthorityCrudData} from 'bend-core';


@Injectable({ providedIn: 'root' })
export class AuthorityService extends BaseService<AuthorityCrudData, AuthorityCrudData> {
  constructor(
    http: HttpClient
  ) {
    super('/authority', http);
    this.DEFAULT_URL = this.PRIVATE_ADMIN_URL;
  }
}
