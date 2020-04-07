import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AbstractBaseService} from './base.service';
import {FieldDefinition} from '../model/fetch/field-definition.model';
import {DataResponse} from '../model/crud/response/data-response.model';

@Injectable({ providedIn: 'root' })
export class AppUtilService extends AbstractBaseService {
  constructor(
    http: HttpClient
  ) {super('/app-util', http); }

  checkExistence(table: string, field: string, value: string): Observable<HttpResponse<boolean>> {
    return this.http.get<boolean>(this.PUBLIC_URL + `/single-field-existence-check/${table}/${field}/${value}`, { observe: 'response' });
  }

  updateAll(fields: FieldDefinition[]): Observable<HttpResponse<DataResponse<Map<string, object>>>> {
    return this.http.post<DataResponse<Map<string, object>>>(this.PRIVATE_URL + `/field-edit`, fields, {observe: 'response'});
  }
}
