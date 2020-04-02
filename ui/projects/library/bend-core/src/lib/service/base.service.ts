import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

export abstract class AbstractBaseService {
  protected PRIVATE_URL: string;
  protected PRIVATE_ADMIN_URL: string;
  protected PUBLIC_URL: string;
  protected ACTUAL_URL: string;
  protected DEFAULT_URL: string;

  protected constructor(
    private BASE_URL: string,
    protected http: HttpClient,
    private readonly BASE_API_URL?: string
  ) {
    if (this.BASE_API_URL == null || this.BASE_API_URL.length < 1) {
      this.BASE_API_URL = environment.API_URL;
    }
    this.PRIVATE_URL = this.BASE_API_URL + '/private' + this.BASE_URL;
    this.PRIVATE_ADMIN_URL = this.BASE_API_URL + '/private/admin' + this.BASE_URL;
    this.PUBLIC_URL = this.BASE_API_URL + '/public' + this.BASE_URL;
    this.ACTUAL_URL = this.BASE_API_URL + this.BASE_URL;
    this.DEFAULT_URL = this.PRIVATE_URL;
  }
}

export class BaseService<D> extends AbstractBaseService {
  constructor(
    BASE_URL: string,
    http: HttpClient
  ) {super(BASE_URL, http); }

  public save(user: D): Observable<HttpResponse<Map<string, object>>> {
    return this.http.post<Map<string, object>>(this.DEFAULT_URL, user, {observe: 'response'});
  }

  public update(user: D): Observable<HttpResponse<Map<string, object>>> {
    return this.http.put<Map<string, object>>(this.DEFAULT_URL, user, {observe: 'response'});
  }

  public fetchAll(): Observable<HttpResponse<D[]>> {
    return this.http.get<D[]>(this.DEFAULT_URL, {observe: 'response'});
  }

  public delete(id: number | string): Observable<HttpResponse<Map<string, object>>> {
    return this.http.delete<Map<string, object>>(this.DEFAULT_URL + `/${id}`, {observe: 'response'});
  }

  public findOne(id: number | string): Observable<HttpResponse<D>> {
    return this.http.get<D>(this.DEFAULT_URL + `/${id}`, {observe: 'response'});
  }
}

export class BaseFetchService<I, O> extends AbstractBaseService {
  constructor(
    BASE_URL: string,
    http: HttpClient
  ) { super(BASE_URL, http); }

  fetch(inputs: I[]): Observable<HttpResponse<Map<string, O>>> {
    return this.http.post<Map<string, O>>(this.DEFAULT_URL, inputs, {observe: 'response'});
  }
}
