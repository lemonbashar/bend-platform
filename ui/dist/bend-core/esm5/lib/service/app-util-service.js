import { __decorate, __extends } from "tslib";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractBaseService } from './base.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var AppUtilService = /** @class */ (function (_super) {
    __extends(AppUtilService, _super);
    function AppUtilService(http) {
        return _super.call(this, '/app-util', http) || this;
    }
    AppUtilService.prototype.checkExistence = function (table, field, value) {
        return this.http.get(this.PUBLIC_URL + ("/single-field-existence-check/" + table + "/" + field + "/" + value), { observe: 'response' });
    };
    AppUtilService.prototype.updateAll = function (fields) {
        return this.http.post(this.PRIVATE_URL + "/field-edit", fields, { observe: 'response' });
    };
    AppUtilService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    AppUtilService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AppUtilService_Factory() { return new AppUtilService(i0.ɵɵinject(i1.HttpClient)); }, token: AppUtilService, providedIn: "root" });
    AppUtilService = __decorate([
        Injectable({ providedIn: 'root' })
    ], AppUtilService);
    return AppUtilService;
}(AbstractBaseService));
export { AppUtilService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXV0aWwtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2FwcC11dGlsLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsWUFBWSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFOUQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS25EO0lBQW9DLGtDQUFtQjtJQUNyRCx3QkFDRSxJQUFnQjtlQUNmLGtCQUFNLFdBQVcsRUFBRSxJQUFJLENBQUM7SUFBRSxDQUFDO0lBRTlCLHVDQUFjLEdBQWQsVUFBZSxLQUFhLEVBQUUsS0FBYSxFQUFFLEtBQWE7UUFDeEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxJQUFJLENBQUMsVUFBVSxJQUFHLG1DQUFpQyxLQUFLLFNBQUksS0FBSyxTQUFJLEtBQU8sQ0FBQSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDdkksQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxNQUF5QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFvQyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsRUFBRSxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUM1SCxDQUFDOztnQkFUTyxVQUFVOzs7SUFGUCxjQUFjO1FBRDFCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixjQUFjLENBWTFCO3lCQXBCRDtDQW9CQyxBQVpELENBQW9DLG1CQUFtQixHQVl0RDtTQVpZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnQsIEh0dHBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Fic3RyYWN0QmFzZVNlcnZpY2V9IGZyb20gJy4vYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtGaWVsZERlZmluaXRpb259IGZyb20gJy4uL21vZGVsL2ZldGNoL2ZpZWxkLWRlZmluaXRpb24ubW9kZWwnO1xyXG5pbXBvcnQge0RhdGFSZXNwb25zZX0gZnJvbSAnLi4vbW9kZWwvY3J1ZC9yZXNwb25zZS9kYXRhLXJlc3BvbnNlLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBBcHBVdGlsU2VydmljZSBleHRlbmRzIEFic3RyYWN0QmFzZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaHR0cDogSHR0cENsaWVudFxyXG4gICkge3N1cGVyKCcvYXBwLXV0aWwnLCBodHRwKTsgfVxyXG5cclxuICBjaGVja0V4aXN0ZW5jZSh0YWJsZTogc3RyaW5nLCBmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8Ym9vbGVhbj4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGJvb2xlYW4+KHRoaXMuUFVCTElDX1VSTCArIGAvc2luZ2xlLWZpZWxkLWV4aXN0ZW5jZS1jaGVjay8ke3RhYmxlfS8ke2ZpZWxkfS8ke3ZhbHVlfWAsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUFsbChmaWVsZHM6IEZpZWxkRGVmaW5pdGlvbltdKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8RGF0YVJlc3BvbnNlPE1hcDxzdHJpbmcsIG9iamVjdD4+Pj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PERhdGFSZXNwb25zZTxNYXA8c3RyaW5nLCBvYmplY3Q+Pj4odGhpcy5QUklWQVRFX1VSTCArIGAvZmllbGQtZWRpdGAsIGZpZWxkcywge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICB9XHJcbn1cclxuIl19