import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../../service/base.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let BendAccountService = class BendAccountService extends BaseService {
    constructor(http) {
        super('/account', http);
    }
    /*Cause Here we need to request on public url*/
    save(user) {
        return this.http.post(this.PUBLIC_URL, user, { observe: 'response' });
    }
    login(info) {
        return this.http.post(this.PUBLIC_URL + '/login', info, { observe: 'response' });
    }
    accountInfo() {
        return this.http.get(this.PRIVATE_URL + '/current-account', { observe: 'response' });
    }
};
BendAccountService.ctorParameters = () => [
    { type: HttpClient }
];
BendAccountService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BendAccountService_Factory() { return new BendAccountService(i0.ɵɵinject(i1.HttpClient)); }, token: BendAccountService, providedIn: "root" });
BendAccountService = __decorate([
    Injectable({ providedIn: 'root' })
], BendAccountService);
export { BendAccountService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1hY2NvdW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iZW5kLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VjdXJpdHkvYXV0aC9iZW5kLWFjY291bnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsVUFBVSxFQUFFLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBSTlELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBSXZELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQW1CLFNBQVEsV0FBdUM7SUFDM0UsWUFDRSxJQUFnQjtRQUVoQixLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQ0FBK0M7SUFDL0MsSUFBSSxDQUFDLElBQWtCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBYyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7Q0FDSixDQUFBOztZQWpCVyxVQUFVOzs7QUFGVCxrQkFBa0I7SUFEOUIsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLGtCQUFrQixDQW1COUI7U0FuQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7QWNjb3VudEluZm8sIExvZ2luSW5mb30gZnJvbSAnLi4vLi4vbW9kZWwvYWNjb3VudC5tb2RlbCc7XHJcbmltcG9ydCB7VXNlckNydWREYXRhfSBmcm9tICcuLi8uLi9tb2RlbC91c2VyLmRhdGEnO1xyXG5pbXBvcnQge0Jhc2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2Jhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7QmVuZFJlc3BvbnNlfSBmcm9tICcuLi8uLi9tb2RlbC9jcnVkL3Jlc3BvbnNlL2JlbmQtcmVzcG9uc2UubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEJlbmRBY2NvdW50U2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPFVzZXJDcnVkRGF0YSwgVXNlckNydWREYXRhPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7XHJcbiAgICAgIHN1cGVyKCcvYWNjb3VudCcsIGh0dHApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qQ2F1c2UgSGVyZSB3ZSBuZWVkIHRvIHJlcXVlc3Qgb24gcHVibGljIHVybCovXHJcbiAgICBzYXZlKHVzZXI6IFVzZXJDcnVkRGF0YSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEJlbmRSZXNwb25zZT4+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PEJlbmRSZXNwb25zZT4odGhpcy5QVUJMSUNfVVJMLCB1c2VyLCB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGluZm86IExvZ2luSW5mbyk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFjY291bnRJbmZvPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxBY2NvdW50SW5mbz4odGhpcy5QVUJMSUNfVVJMICsgJy9sb2dpbicsIGluZm8sIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhY2NvdW50SW5mbygpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxBY2NvdW50SW5mbz4+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QWNjb3VudEluZm8+KCB0aGlzLlBSSVZBVEVfVVJMICsgJy9jdXJyZW50LWFjY291bnQnLCB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==