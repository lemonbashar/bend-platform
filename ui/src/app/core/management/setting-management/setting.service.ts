import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ISetting} from '../..';
import {BaseService} from 'bend-core';

@Injectable({ providedIn: 'root' })
export class SettingService extends BaseService<ISetting> {
  constructor(
    http: HttpClient
  ) {
    super('/setting', http);
    this.DEFAULT_URL = this.PRIVATE_ADMIN_URL;
  }
}
