import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../../service/base.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var BendAccountService = /** @class */ (function (_super) {
    __extends(BendAccountService, _super);
    function BendAccountService(http) {
        return _super.call(this, '/account', http) || this;
    }
    /*Cause Here we need to request on public url*/
    BendAccountService.prototype.save = function (user) {
        return this.http.post(this.PUBLIC_URL, user, { observe: 'response' });
    };
    BendAccountService.prototype.login = function (info) {
        return this.http.post(this.PUBLIC_URL + '/login', info, { observe: 'response' });
    };
    BendAccountService.prototype.accountInfo = function () {
        return this.http.get(this.PRIVATE_URL + '/current-account', { observe: 'response' });
    };
    BendAccountService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    BendAccountService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BendAccountService_Factory() { return new BendAccountService(i0.ɵɵinject(i1.HttpClient)); }, token: BendAccountService, providedIn: "root" });
    BendAccountService = __decorate([
        Injectable({ providedIn: 'root' })
    ], BendAccountService);
    return BendAccountService;
}(BaseService));
export { BendAccountService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1hY2NvdW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iZW5kLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VjdXJpdHkvYXV0aC9iZW5kLWFjY291bnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsVUFBVSxFQUFFLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBSTlELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBSXZEO0lBQXdDLHNDQUF1QztJQUMzRSw0QkFDRSxJQUFnQjtlQUVoQixrQkFBTSxVQUFVLEVBQUUsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrQ0FBK0M7SUFDL0MsaUNBQUksR0FBSixVQUFLLElBQWtCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLElBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBYyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7O2dCQWhCTyxVQUFVOzs7SUFGVCxrQkFBa0I7UUFEOUIsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLGtCQUFrQixDQW1COUI7NkJBNUJEO0NBNEJDLEFBbkJELENBQXdDLFdBQVcsR0FtQmxEO1NBbkJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0FjY291bnRJbmZvLCBMb2dpbkluZm99IGZyb20gJy4uLy4uL21vZGVsL2FjY291bnQubW9kZWwnO1xyXG5pbXBvcnQge1VzZXJDcnVkRGF0YX0gZnJvbSAnLi4vLi4vbW9kZWwvdXNlci5kYXRhJztcclxuaW1wb3J0IHtCYXNlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZS9iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0JlbmRSZXNwb25zZX0gZnJvbSAnLi4vLi4vbW9kZWwvY3J1ZC9yZXNwb25zZS9iZW5kLXJlc3BvbnNlLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBCZW5kQWNjb3VudFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZTxVc2VyQ3J1ZERhdGEsIFVzZXJDcnVkRGF0YT4ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIGh0dHA6IEh0dHBDbGllbnRcclxuICAgICkge1xyXG4gICAgICBzdXBlcignL2FjY291bnQnLCBodHRwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKkNhdXNlIEhlcmUgd2UgbmVlZCB0byByZXF1ZXN0IG9uIHB1YmxpYyB1cmwqL1xyXG4gICAgc2F2ZSh1c2VyOiBVc2VyQ3J1ZERhdGEpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxCZW5kUmVzcG9uc2U+PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxCZW5kUmVzcG9uc2U+KHRoaXMuUFVCTElDX1VSTCwgdXNlciwge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihpbmZvOiBMb2dpbkluZm8pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxBY2NvdW50SW5mbz4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8QWNjb3VudEluZm8+KHRoaXMuUFVCTElDX1VSTCArICcvbG9naW4nLCBpbmZvLCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWNjb3VudEluZm8oKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8QWNjb3VudEluZm8+PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEFjY291bnRJbmZvPiggdGhpcy5QUklWQVRFX1VSTCArICcvY3VycmVudC1hY2NvdW50Jywge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICAgIH1cclxufVxyXG4iXX0=