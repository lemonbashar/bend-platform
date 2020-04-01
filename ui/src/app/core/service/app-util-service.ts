import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {IFieldDefinition} from '../model/app-util.model';
import {AbstractBaseService} from './base.service';

@Injectable({ providedIn: 'root' })
export class AppUtilService extends AbstractBaseService {
  constructor(
    http: HttpClient
  ) {super('/app-util', http); }

  checkExistence(table: string, field: string, value: string): Observable<HttpResponse<boolean>> {
    return this.http.get<boolean>(this.PUBLIC_URL + `/single-field-existence-check/${table}/${field}/${value}`, { observe: 'response' });
  }

  updateAll(fields: IFieldDefinition[]): Observable<HttpResponse<Map<string, object>>> {
    return this.http.post<Map<string, object>>(this.PRIVATE_URL + `/field-edit`, fields, {observe: 'response'});
  }
}
