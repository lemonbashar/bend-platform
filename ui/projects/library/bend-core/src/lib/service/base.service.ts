import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseCrudData, BaseCrudViewData} from '../model/crud/base-crud.data';
import {BaseData} from '../model/base-data';
import {BendResponse} from '../model/crud/response/bend-response.model';
import {DataResponse, PageableDataResponse} from '../model/crud/response/data-response.model';
import {Page} from '../model/crud/page-request.data';
import {createRequestOption} from './util/create-request-option.util';
import {BaseFlexibleCrudViewData} from '../model/crud/base-flexible-crud.data';
import {BendCoreConstants} from '../environments/bend-core-constants';

export abstract class AbstractBaseService {
  protected PRIVATE_URL: string;
  protected PRIVATE_ADMIN_URL: string;
  protected PUBLIC_URL: string;
  protected ACTUAL_URL: string;
  protected DEFAULT_URL: string;

  protected constructor(
    private readonly BASE_URL: string,
    protected http: HttpClient,
    private readonly BASE_API_URL?: string
  ) {
    if (this.BASE_API_URL == null || this.BASE_API_URL.length < 1) {
      this.BASE_API_URL = BendCoreConstants.API_URL;
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

  public fetchAll(page?: Page): Observable<HttpResponse<PageableDataResponse<BaseCrudViewData[]>>> {
    const options = createRequestOption(page);
    return this.http.get<PageableDataResponse<BaseCrudViewData[]>>(this.DEFAULT_URL, {params: options, observe: 'response'});
  }

  public fetchAllFlexible(page?: Page): Observable<HttpResponse<DataResponse<BaseFlexibleCrudViewData>>> {
    const options = createRequestOption(page);
    return this.http.get<DataResponse<BaseFlexibleCrudViewData>>(`${this.DEFAULT_URL}/flexible`, {params: options, observe: 'response'});
  }

  public delete(id: number): Observable<HttpResponse<BendResponse>> {
    return this.http.delete<BendResponse>(`${this.DEFAULT_URL}/${id}`, {observe: 'response'});
  }

  public findOne(id: number | string): Observable<HttpResponse<DataResponse<R>>> {
    return this.http.get<DataResponse<R>>( `${this.DEFAULT_URL}/${id}`, {observe: 'response'});
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
