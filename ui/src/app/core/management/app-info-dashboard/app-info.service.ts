import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseService} from 'bend-core';

@Injectable({ providedIn: 'root' })
export class AppInfoService extends BaseService<any> {
  constructor(
    http: HttpClient
  ) {
    super('/actuator', http);
    this.DEFAULT_URL = this.PUBLIC_URL;
  }

  fetchInfo(): Observable<HttpResponse<Map<string, string>>> {
    return this.http.get<Map<string, string>>(this.ACTUAL_URL + `/info`, {observe: 'response'});
  }
}
