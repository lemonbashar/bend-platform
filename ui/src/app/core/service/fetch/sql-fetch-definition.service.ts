import {BaseFetchService} from '../base.service';
import {ISqlFetchDefinition} from '../../model/fetch/fetch-definition.model';
import {IFetchResponse} from '../../model/fetch/fetch-response.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SqlFetchDefinitionService extends BaseFetchService<ISqlFetchDefinition, IFetchResponse> {
  constructor(
    http: HttpClient
  ) {
    super('sql-fetch-definition', http);
  }
}
