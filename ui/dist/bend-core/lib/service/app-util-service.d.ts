import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractBaseService } from './base.service';
import { FieldDefinition } from '../model/fetch/field-definition.model';
import { DataResponse } from '../model/crud/response/data-response.model';
import * as ɵngcc0 from '@angular/core';
export declare class AppUtilService extends AbstractBaseService {
    constructor(http: HttpClient);
    checkExistence(table: string, field: string, value: string): Observable<HttpResponse<boolean>>;
    updateAll(fields: FieldDefinition[]): Observable<HttpResponse<DataResponse<Map<string, object>>>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AppUtilService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXV0aWwtc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhcHAtdXRpbC1zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7OztBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFic3RyYWN0QmFzZVNlcnZpY2UgfSBmcm9tICcuL2Jhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEZpZWxkRGVmaW5pdGlvbiB9IGZyb20gJy4uL21vZGVsL2ZldGNoL2ZpZWxkLWRlZmluaXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBEYXRhUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbC9jcnVkL3Jlc3BvbnNlL2RhdGEtcmVzcG9uc2UubW9kZWwnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBcHBVdGlsU2VydmljZSBleHRlbmRzIEFic3RyYWN0QmFzZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCk7XHJcbiAgICBjaGVja0V4aXN0ZW5jZSh0YWJsZTogc3RyaW5nLCBmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8Ym9vbGVhbj4+O1xyXG4gICAgdXBkYXRlQWxsKGZpZWxkczogRmllbGREZWZpbml0aW9uW10pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxEYXRhUmVzcG9uc2U8TWFwPHN0cmluZywgb2JqZWN0Pj4+PjtcclxufVxyXG4iXX0=