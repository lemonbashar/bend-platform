import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {IFieldDefinition} from '../model/app-util.model';

const URL_PREFIX = environment.API_URL + 'api/public/app-util-controller';
const URL_PREFIX_PRIVATE = environment.API_URL + 'api/private/app-util-controller';

@Injectable({ providedIn: 'root' })
export class AppUtilService {
  constructor(
    private http: HttpClient
  ) {}

  checkExistence(table: string, field: string, value: string): Observable<HttpResponse<boolean>> {
    return this.http.get<boolean>(URL_PREFIX + `/single-field-existence-check/${table}/${field}/${value}`, { observe: 'response' });
  }

  updateAll(fields: IFieldDefinition[]): Observable<HttpResponse<Map<string, object>>> {
    return this.http.post<Map<string, object>>(URL_PREFIX_PRIVATE + `/field-edit`, fields, {observe: 'response'});
  }
}
