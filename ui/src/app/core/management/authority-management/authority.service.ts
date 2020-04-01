import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService, IAuthority} from 'bend-core';


@Injectable({ providedIn: 'root' })
export class AuthorityService extends BaseService<IAuthority> {
  constructor(
    http: HttpClient
  ) {
    super('/authority', http);
    this.DEFAULT_URL = this.PRIVATE_ADMIN_URL;
  }
}
