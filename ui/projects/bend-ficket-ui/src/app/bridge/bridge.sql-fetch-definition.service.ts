import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseFetchService, ISqlFetchDefinition, FetchResponse, BendCoreConstants} from 'bend-core';

@Injectable({ providedIn: 'root' })
export class BridgeSqlFetchDefinitionService extends BaseFetchService<ISqlFetchDefinition, FetchResponse> {
  constructor(
    http: HttpClient
  ) {
    super('/sql-fetch', http, BendCoreConstants.neighbourBaseUrls.BEND_FICKET_APP);
    this.DEFAULT_URL = this.PUBLIC_URL;
  }
}
