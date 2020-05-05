import {BaseService} from 'bend-core';
import {HttpClient} from '@angular/common/http';
import {BaseCrudData} from '../../../../library/bend-core/src/lib/model/crud/base-crud.data';
import {BaseData} from '../../../../library/bend-core/src/lib/model/base-data';
import {environment} from '../../environments/environment';

export class BridgeBaseFicketService<R extends BaseCrudData, Domain extends BaseData> extends BaseService<R, Domain> {
  constructor(
    BASE_URL: string,
    http: HttpClient
  ) {
    super(BASE_URL, http, environment.API_URL);
  }
}
