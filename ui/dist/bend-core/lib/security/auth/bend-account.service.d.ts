import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountInfo, LoginInfo } from '../../model/account.model';
import { UserCrudData } from '../../model/user.data';
import { BaseService } from '../../service/base.service';
import { BendResponse } from '../../model/crud/response/bend-response.model';
import * as ɵngcc0 from '@angular/core';
export declare class BendAccountService extends BaseService<UserCrudData, UserCrudData> {
    constructor(http: HttpClient);
    save(user: UserCrudData): Observable<HttpResponse<BendResponse>>;
    login(info: LoginInfo): Observable<HttpResponse<AccountInfo>>;
    accountInfo(): Observable<HttpResponse<AccountInfo>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BendAccountService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1hY2NvdW50LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYmVuZC1hY2NvdW50LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBY2NvdW50SW5mbywgTG9naW5JbmZvIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWNjb3VudC5tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXJDcnVkRGF0YSB9IGZyb20gJy4uLy4uL21vZGVsL3VzZXIuZGF0YSc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCZW5kUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9tb2RlbC9jcnVkL3Jlc3BvbnNlL2JlbmQtcmVzcG9uc2UubW9kZWwnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCZW5kQWNjb3VudFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZTxVc2VyQ3J1ZERhdGEsIFVzZXJDcnVkRGF0YT4ge1xyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCk7XHJcbiAgICBzYXZlKHVzZXI6IFVzZXJDcnVkRGF0YSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEJlbmRSZXNwb25zZT4+O1xyXG4gICAgbG9naW4oaW5mbzogTG9naW5JbmZvKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QWNjb3VudEluZm8+PjtcclxuICAgIGFjY291bnRJbmZvKCk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFjY291bnRJbmZvPj47XHJcbn1cclxuIl19