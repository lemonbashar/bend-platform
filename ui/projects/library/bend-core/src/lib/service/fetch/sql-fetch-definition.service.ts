import {BaseFetchService} from '../base.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ISqlFetchDefinition} from '../../model/fetch/fetch-definition.model';
import {FetchResponse} from '../../model/fetch/fetch-response.model';

@Injectable({ providedIn: 'root' })
export class SqlFetchDefinitionService extends BaseFetchService<ISqlFetchDefinition, FetchResponse> {
  constructor(
    http: HttpClient
  ) {
    super('sql-fetch-definition', http);
  }
}
