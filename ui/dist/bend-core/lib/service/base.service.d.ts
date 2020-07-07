import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseCrudData, BaseCrudViewData } from '../model/crud/base-crud.data';
import { BaseData } from '../model/base-data';
import { BendResponse } from '../model/crud/response/bend-response.model';
import { DataResponse, PageableDataResponse } from '../model/crud/response/data-response.model';
import { Page } from '../model/crud/page-request.data';
import { BaseFlexibleCrudViewData } from '../model/crud/base-flexible-crud.data';
export declare abstract class AbstractBaseService {
    private readonly BASE_URL;
    protected http: HttpClient;
    private readonly BASE_API_URL?;
    protected PRIVATE_URL: string;
    protected PRIVATE_ADMIN_URL: string;
    protected PUBLIC_URL: string;
    protected ACTUAL_URL: string;
    protected DEFAULT_URL: string;
    protected constructor(BASE_URL: string, http: HttpClient, BASE_API_URL?: string);
}
export declare class BaseService<R extends BaseCrudData, Domain extends BaseData> extends AbstractBaseService {
    constructor(BASE_URL: string, http: HttpClient, BASE_API_URL?: string);
    save(baseData: Domain): Observable<HttpResponse<BendResponse>>;
    update(baseData: Domain): Observable<HttpResponse<BendResponse>>;
    fetchAll(page?: Page): Observable<HttpResponse<PageableDataResponse<BaseCrudViewData[]>>>;
    fetchAllFlexible(page?: Page): Observable<HttpResponse<DataResponse<BaseFlexibleCrudViewData>>>;
    delete(id: number): Observable<HttpResponse<BendResponse>>;
    findOne(id: number | string): Observable<HttpResponse<DataResponse<R>>>;
}
export declare class BaseFetchService<I, O> extends AbstractBaseService {
    constructor(BASE_URL: string, http: HttpClient, BASE_API_URL?: string);
    fetch(inputs: I[]): Observable<HttpResponse<Map<string, O>>>;
}
