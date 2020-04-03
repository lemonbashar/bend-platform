import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {BendResponse} from '../model/crud/response/bend-response.model';
import {BaseCrudData, BaseCrudViewData} from '../model/crud/base-crud.data';
import {DataResponse} from '../model/crud/response/data-response.model';
import {BaseData} from '../model/base-data';

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

export class BaseService<R extends BaseCrudData, Domain extends BaseData> extends AbstractBaseService {
  constructor(
    BASE_URL: string,
    http: HttpClient
  ) {super(BASE_URL, http); }

  public save(baseData: Domain): Observable<HttpResponse<BendResponse>> {
    return this.http.post<BendResponse>(this.DEFAULT_URL, baseData, {observe: 'response'});
  }

  public update(baseData: Domain): Observable<HttpResponse<BendResponse>> {
    return this.http.put<BendResponse>(this.DEFAULT_URL, baseData, {observe: 'response'});
  }

  public fetchAll(): Observable<HttpResponse<DataResponse<BaseCrudViewData[]>>> {
    return this.http.get<DataResponse<BaseCrudViewData[]>>(this.DEFAULT_URL, {observe: 'response'});
  }

  public delete(id: number): Observable<HttpResponse<BendResponse>> {
    return this.http.delete<BendResponse>(this.DEFAULT_URL + `/${id}`, {observe: 'response'});
  }

  public findOne(id: number | string): Observable<HttpResponse<DataResponse<R>>> {
    return this.http.get<DataResponse<R>>(this.DEFAULT_URL + `/${id}`, {observe: 'response'});
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
