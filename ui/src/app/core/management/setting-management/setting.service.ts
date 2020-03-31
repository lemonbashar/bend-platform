import {Injectable} from '@angular/core';
import {BaseService} from '../../service/base.service';
import {HttpClient} from '@angular/common/http';
import {ISetting} from '../..';

@Injectable({ providedIn: 'root' })
export class SettingService extends BaseService<ISetting> {
  constructor(
    http: HttpClient
  ) {
    super('/setting', http);
    this.DEFAULT_URL = this.PRIVATE_ADMIN_URL;
  }
}
