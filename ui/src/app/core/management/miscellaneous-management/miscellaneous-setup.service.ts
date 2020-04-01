import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IMiscellaneousSetup} from '../..';
import {Observable} from 'rxjs';
import {BaseService} from 'bend-core';

@Injectable({ providedIn: 'root' })
export class MiscellaneousSetupService extends BaseService<IMiscellaneousSetup> {
  constructor(
    http: HttpClient
  ) {
    super('/miscellaneous-setup', http);
    this.DEFAULT_URL = this.PRIVATE_ADMIN_URL;
  }

  fetchAllTypeValues(typeName: string): Observable<HttpResponse<string[]>> {
    return this.http.get<string[]>(this.PUBLIC_URL + `/type-values-by-type-name/${typeName}`, {observe: 'response'});
  }
}
