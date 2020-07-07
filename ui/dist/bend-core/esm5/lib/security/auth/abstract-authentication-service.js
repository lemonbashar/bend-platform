import { __values } from "tslib";
import { Subject } from 'rxjs';
import { httpStatus } from '../http/http-status';
import { BendCoreConstants } from '../../environments/bend-core-constants';
var ConsoleAuthenticationCallback = /** @class */ (function () {
    function ConsoleAuthenticationCallback(consoleService) {
        this.consoleService = consoleService;
    }
    ConsoleAuthenticationCallback.prototype.authenticationState = function (isAuthenticated, message, error) {
        if (error == null) {
            this.consoleService.message(message);
        }
        else {
            this.consoleService.error(message, error);
        }
    };
    return ConsoleAuthenticationCallback;
}());
export { ConsoleAuthenticationCallback };
var AbstractAuthenticationService = /** @class */ (function () {
    function AbstractAuthenticationService(accountService, consoleService, storageService) {
        this.accountService = accountService;
        this.consoleService = consoleService;
        this.storageService = storageService;
        this.authenticationState = new Subject();
        this.SUCCESS_MESSAGE = 'Authenticated Successfully';
        this.FAILURE_MESSAGE = 'Error Occurred During Authentication';
    }
    AbstractAuthenticationService.prototype.authenticate = function (info, callback) {
        var _this = this;
        if (callback == null) {
            callback = new ConsoleAuthenticationCallback(this.consoleService);
        }
        this.accountService.login(info)
            .subscribe(function (res) {
            if (res.status === httpStatus.OK) {
                _this.accountInfo = res.body;
                if (_this.accountInfo != null && _this.accountInfo.authenticated) {
                    _this.saveToCookie(_this.accountInfo);
                    _this.authenticationState.next(_this.accountInfo);
                    callback.authenticationState(true, _this.SUCCESS_MESSAGE);
                }
                else {
                    _this.authenticationState.next(null);
                    callback.authenticationState(false, _this.FAILURE_MESSAGE);
                }
            }
            else {
                _this.authenticationState.next(null);
                callback.authenticationState(false, _this.FAILURE_MESSAGE);
            }
        }, function (res) {
            _this.deleteCookie();
            _this.authenticationState.next(null);
            callback.authenticationState(false, _this.FAILURE_MESSAGE);
        });
    };
    AbstractAuthenticationService.prototype.saveToCookie = function (accountInfo) {
        this.saveCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE, JSON.stringify(accountInfo.authenticated));
        this.saveCookieByKey(BendCoreConstants.cookies.TOKEN, accountInfo.token);
        this.saveCookieByKey(BendCoreConstants.cookies.AUTHORITIES, JSON.stringify(accountInfo.authorities));
        accountInfo.token = null;
        accountInfo.authorities = [];
        this.saveCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO, JSON.stringify(accountInfo));
    };
    AbstractAuthenticationService.prototype.refreshToken = function (token) {
        this.deleteCookieByKey(BendCoreConstants.cookies.TOKEN);
        this.saveCookieByKey(BendCoreConstants.cookies.TOKEN, token);
    };
    AbstractAuthenticationService.prototype.retrieveAccountInfo = function () {
        var _this = this;
        var cookie = this.retrieveCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO);
        if (cookie == null || cookie.length < 1) {
            this.accountService.accountInfo().subscribe(function (resp) {
                if (resp.status === httpStatus.OK) {
                    var accInfo = resp.body;
                    _this.saveToCookie(accInfo);
                    var sub = new Subject();
                    sub.next(accInfo);
                    return sub.asObservable();
                }
                else {
                    _this.consoleService.error('No Account Info Found');
                }
            }, function (err) {
                _this.consoleService.error('Error Occurred During Account Fetch', err);
            });
        }
        this.accountInfo = JSON.parse(cookie);
        var subject = new Subject();
        subject.next(this.accountInfo);
        return subject.asObservable();
    };
    AbstractAuthenticationService.prototype.isAuthenticated = function () {
        var cookie = this.retrieveCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE);
        if (cookie == null || cookie.length < 1) {
            return false;
        }
        return JSON.parse(cookie);
    };
    AbstractAuthenticationService.prototype.currentToken = function () {
        return this.retrieveCookieByKey(BendCoreConstants.cookies.TOKEN);
    };
    AbstractAuthenticationService.prototype.authorities = function () {
        var authorities = this.retrieveCookieByKey(BendCoreConstants.cookies.AUTHORITIES);
        if (authorities == null || authorities.length < 1) {
            return [];
        }
        return JSON.parse(authorities);
    };
    AbstractAuthenticationService.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    AbstractAuthenticationService.prototype.deleteCookie = function () {
        this.deleteCookieByKey(BendCoreConstants.cookies.TOKEN);
        this.deleteCookieByKey(BendCoreConstants.cookies.AUTHORITIES);
        this.deleteCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO);
        this.deleteCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE);
    };
    AbstractAuthenticationService.prototype.logout = function (info) {
        this.deleteCookie();
        this.authenticationState.next(null);
        this.consoleService.message('Logout Success of User' + info.logoutRule);
    };
    AbstractAuthenticationService.prototype.hasAnyAuthority = function (authorities) {
        var e_1, _a;
        var grantedAuthorities = this.authorities();
        try {
            for (var authorities_1 = __values(authorities), authorities_1_1 = authorities_1.next(); !authorities_1_1.done; authorities_1_1 = authorities_1.next()) {
                var auth = authorities_1_1.value;
                if (grantedAuthorities.includes(auth)) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (authorities_1_1 && !authorities_1_1.done && (_a = authorities_1.return)) _a.call(authorities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    AbstractAuthenticationService.prototype.deleteCookieByKey = function (key) {
        this.storageService.remove(key);
    };
    AbstractAuthenticationService.prototype.saveCookieByKey = function (key, value) {
        this.storageService.put(key, value);
    };
    AbstractAuthenticationService.prototype.retrieveCookieByKey = function (key) {
        return this.storageService.get(key);
    };
    return AbstractAuthenticationService;
}());
export { AbstractAuthenticationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtYXV0aGVudGljYXRpb24tc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZWN1cml0eS9hdXRoL2Fic3RyYWN0LWF1dGhlbnRpY2F0aW9uLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFLekMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBT3pFO0lBQ0UsdUNBQ1UsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRXhDLENBQUM7SUFDRCwyREFBbUIsR0FBbkIsVUFBb0IsZUFBd0IsRUFBRSxPQUFnQixFQUFFLEtBQXlCO1FBQ3ZGLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUNILG9DQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7O0FBc0JEO0lBTUUsdUNBQ1UsY0FBa0MsRUFDbEMsY0FBOEIsRUFDOUIsY0FBOEI7UUFGOUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFQOUIsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUMzRCxvQkFBZSxHQUFHLDRCQUE0QixDQUFDO1FBQy9DLG9CQUFlLEdBQUcsc0NBQXNDLENBQUM7SUFNdEQsQ0FBQztJQUVKLG9EQUFZLEdBQVosVUFBYSxJQUFlLEVBQUUsUUFBaUM7UUFB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LElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsdURBQWUsR0FBZixVQUFnQixXQUFxQjs7UUFDbkMsSUFBTSxrQkFBa0IsR0FBYSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O1lBQ3hELEtBQW1CLElBQUEsZ0JBQUEsU0FBQSxXQUFXLENBQUEsd0NBQUEsaUVBQUU7Z0JBQTNCLElBQU0sSUFBSSx3QkFBQTtnQkFDYixJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFBRSxPQUFPLElBQUksQ0FBQztpQkFBRTthQUN4RDs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRVMseURBQWlCLEdBQTNCLFVBQTRCLEdBQVc7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVTLHVEQUFlLEdBQXpCLFVBQTBCLEdBQVcsRUFBRSxLQUFhO1FBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRVMsMkRBQW1CLEdBQTdCLFVBQThCLEdBQVc7UUFDdkMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBaklELElBaUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtCZW5kQWNjb3VudFNlcnZpY2V9IGZyb20gJy4vYmVuZC1hY2NvdW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge0h0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtDb25zb2xlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZS9jb25zb2xlL2NvbnNvbGUuc2VydmljZSc7XHJcbmltcG9ydCB7QWNjb3VudEluZm8sIExvZ2luSW5mbywgTG9nb3V0SW5mb30gZnJvbSAnLi4vLi4vbW9kZWwvYWNjb3VudC5tb2RlbCc7XHJcbmltcG9ydCB7aHR0cFN0YXR1c30gZnJvbSAnLi4vaHR0cC9odHRwLXN0YXR1cyc7XHJcbmltcG9ydCB7QmVuZENvcmVDb25zdGFudHN9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9iZW5kLWNvcmUtY29uc3RhbnRzJztcclxuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZS9zdG9yYWdlL3N0b3JhZ2Utc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBdXRoZW50aWNhdGlvbkNhbGxiYWNrIHtcclxuICBhdXRoZW50aWNhdGlvblN0YXRlKGlzQXV0aGVudGljYXRlZDogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZywgZXJyb3I/OiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlQXV0aGVudGljYXRpb25DYWxsYmFjayBpbXBsZW1lbnRzIElBdXRoZW50aWNhdGlvbkNhbGxiYWNrIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29uc29sZVNlcnZpY2U6IENvbnNvbGVTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG4gIGF1dGhlbnRpY2F0aW9uU3RhdGUoaXNBdXRoZW50aWNhdGVkOiBib29sZWFuLCBtZXNzYWdlPzogc3RyaW5nLCBlcnJvcj86IEh0dHBFcnJvclJlc3BvbnNlKTogdm9pZCB7XHJcbiAgICBpZiAoZXJyb3IgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmNvbnNvbGVTZXJ2aWNlLm1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbnNvbGVTZXJ2aWNlLmVycm9yKG1lc3NhZ2UsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFic3RyYWN0QXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuICBhdXRoZW50aWNhdGUoaW5mbzogTG9naW5JbmZvLCBjYWxsYmFjaz86IElBdXRoZW50aWNhdGlvbkNhbGxiYWNrKTtcclxuXHJcbiAgcmVmcmVzaFRva2VuKHRva2VuOiBzdHJpbmcpO1xyXG5cclxuICByZXRyaWV2ZUFjY291bnRJbmZvKCk6IE9ic2VydmFibGU8QWNjb3VudEluZm8+O1xyXG5cclxuICBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbjtcclxuXHJcbiAgY3VycmVudFRva2VuKCk6IHN0cmluZztcclxuXHJcbiAgYXV0aG9yaXRpZXMoKTogc3RyaW5nW107XHJcblxyXG4gIGdldEF1dGhlbnRpY2F0aW9uU3RhdGUoKTogT2JzZXJ2YWJsZTxBY2NvdW50SW5mbz47XHJcblxyXG4gIGxvZ291dChpbmZvOiBMb2dvdXRJbmZvKTtcclxuXHJcbiAgaGFzQW55QXV0aG9yaXR5KGF1dGhvcml0aWVzOiBzdHJpbmdbXSk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEF1dGhlbnRpY2F0aW9uU2VydmljZSBpbXBsZW1lbnRzIElBYnN0cmFjdEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XHJcbiAgcHJvdGVjdGVkIGFjY291bnRJbmZvOiBBY2NvdW50SW5mbztcclxuICBwcm90ZWN0ZWQgYXV0aGVudGljYXRpb25TdGF0ZSA9IG5ldyBTdWJqZWN0PEFjY291bnRJbmZvPigpO1xyXG4gIFNVQ0NFU1NfTUVTU0FHRSA9ICdBdXRoZW50aWNhdGVkIFN1Y2Nlc3NmdWxseSc7XHJcbiAgRkFJTFVSRV9NRVNTQUdFID0gJ0Vycm9yIE9jY3VycmVkIER1cmluZyBBdXRoZW50aWNhdGlvbic7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQmVuZEFjY291bnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb25zb2xlU2VydmljZTogQ29uc29sZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgYXV0aGVudGljYXRlKGluZm86IExvZ2luSW5mbywgY2FsbGJhY2s6IElBdXRoZW50aWNhdGlvbkNhbGxiYWNrKSB7XHJcbiAgICBpZiAoY2FsbGJhY2sgPT0gbnVsbCkge1xyXG4gICAgICBjYWxsYmFjayA9IG5ldyBDb25zb2xlQXV0aGVudGljYXRpb25DYWxsYmFjayh0aGlzLmNvbnNvbGVTZXJ2aWNlKTtcclxuICAgIH1cclxuICAgIHRoaXMuYWNjb3VudFNlcnZpY2UubG9naW4oaW5mbylcclxuICAgICAgLnN1YnNjcmliZSgocmVzOiBIdHRwUmVzcG9uc2U8QWNjb3VudEluZm8+KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IGh0dHBTdGF0dXMuT0spIHtcclxuICAgICAgICAgIHRoaXMuYWNjb3VudEluZm8gPSByZXMuYm9keTtcclxuICAgICAgICAgIGlmICh0aGlzLmFjY291bnRJbmZvICE9IG51bGwgJiYgdGhpcy5hY2NvdW50SW5mby5hdXRoZW50aWNhdGVkICkge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVUb0Nvb2tpZSh0aGlzLmFjY291bnRJbmZvKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy5hY2NvdW50SW5mbyk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmF1dGhlbnRpY2F0aW9uU3RhdGUodHJ1ZSwgdGhpcy5TVUNDRVNTX01FU1NBR0UpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQobnVsbCk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmF1dGhlbnRpY2F0aW9uU3RhdGUoZmFsc2UsIHRoaXMuRkFJTFVSRV9NRVNTQUdFKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQobnVsbCk7XHJcbiAgICAgICAgICBjYWxsYmFjay5hdXRoZW50aWNhdGlvblN0YXRlKGZhbHNlLCB0aGlzLkZBSUxVUkVfTUVTU0FHRSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0gLCAocmVzOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVDb29raWUoKTtcclxuICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0ZS5uZXh0KG51bGwpO1xyXG4gICAgICAgICAgY2FsbGJhY2suYXV0aGVudGljYXRpb25TdGF0ZShmYWxzZSwgdGhpcy5GQUlMVVJFX01FU1NBR0UpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzYXZlVG9Db29raWUoYWNjb3VudEluZm86IEFjY291bnRJbmZvKSB7XHJcbiAgICB0aGlzLnNhdmVDb29raWVCeUtleShCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLkFVVEhFTlRJQ0FUSU9OX1NUQVRFLCBKU09OLnN0cmluZ2lmeShhY2NvdW50SW5mby5hdXRoZW50aWNhdGVkKSk7XHJcbiAgICB0aGlzLnNhdmVDb29raWVCeUtleShCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLlRPS0VOLCBhY2NvdW50SW5mby50b2tlbik7XHJcbiAgICB0aGlzLnNhdmVDb29raWVCeUtleShCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLkFVVEhPUklUSUVTLCBKU09OLnN0cmluZ2lmeShhY2NvdW50SW5mby5hdXRob3JpdGllcykpO1xyXG4gICAgYWNjb3VudEluZm8udG9rZW4gPSBudWxsO1xyXG4gICAgYWNjb3VudEluZm8uYXV0aG9yaXRpZXMgPSBbXTtcclxuICAgIHRoaXMuc2F2ZUNvb2tpZUJ5S2V5KEJlbmRDb3JlQ29uc3RhbnRzLmNvb2tpZXMuQUNDT1VOVF9JTkZPLCBKU09OLnN0cmluZ2lmeShhY2NvdW50SW5mbykpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFRva2VuKHRva2VuOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZGVsZXRlQ29va2llQnlLZXkoQmVuZENvcmVDb25zdGFudHMuY29va2llcy5UT0tFTik7XHJcbiAgICB0aGlzLnNhdmVDb29raWVCeUtleShCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLlRPS0VOLCB0b2tlbik7XHJcbiAgfVxyXG5cclxuICByZXRyaWV2ZUFjY291bnRJbmZvKCk6IE9ic2VydmFibGU8QWNjb3VudEluZm8+IHtcclxuICAgIGNvbnN0IGNvb2tpZSA9IHRoaXMucmV0cmlldmVDb29raWVCeUtleShCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLkFDQ09VTlRfSU5GTyk7XHJcbiAgICBpZiAoY29va2llID09IG51bGwgfHwgY29va2llLmxlbmd0aCA8IDEpIHtcclxuICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5hY2NvdW50SW5mbygpLnN1YnNjcmliZSgocmVzcDogSHR0cFJlc3BvbnNlPEFjY291bnRJbmZvPikgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gaHR0cFN0YXR1cy5PSykge1xyXG4gICAgICAgICAgY29uc3QgYWNjSW5mbyA9IHJlc3AuYm9keTtcclxuICAgICAgICAgIHRoaXMuc2F2ZVRvQ29va2llKGFjY0luZm8pO1xyXG4gICAgICAgICAgY29uc3Qgc3ViID0gbmV3IFN1YmplY3QoKTtcclxuICAgICAgICAgIHN1Yi5uZXh0KGFjY0luZm8pO1xyXG4gICAgICAgICAgcmV0dXJuIHN1Yi5hc09ic2VydmFibGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jb25zb2xlU2VydmljZS5lcnJvcignTm8gQWNjb3VudCBJbmZvIEZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAoZXJyOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29uc29sZVNlcnZpY2UuZXJyb3IoJ0Vycm9yIE9jY3VycmVkIER1cmluZyBBY2NvdW50IEZldGNoJywgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjY291bnRJbmZvID0gSlNPTi5wYXJzZShjb29raWUgKTtcclxuICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgc3ViamVjdC5uZXh0KHRoaXMuYWNjb3VudEluZm8pO1xyXG4gICAgcmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjb29raWUgPSB0aGlzLnJldHJpZXZlQ29va2llQnlLZXkoQmVuZENvcmVDb25zdGFudHMuY29va2llcy5BVVRIRU5USUNBVElPTl9TVEFURSk7XHJcbiAgICBpZiAoY29va2llID09IG51bGwgfHwgY29va2llLmxlbmd0aCA8IDEgKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoY29va2llKTtcclxuICB9XHJcblxyXG4gIGN1cnJlbnRUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMucmV0cmlldmVDb29raWVCeUtleShCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLlRPS0VOKTtcclxuICB9XHJcblxyXG4gIGF1dGhvcml0aWVzKCk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGF1dGhvcml0aWVzID0gdGhpcy5yZXRyaWV2ZUNvb2tpZUJ5S2V5KEJlbmRDb3JlQ29uc3RhbnRzLmNvb2tpZXMuQVVUSE9SSVRJRVMpO1xyXG4gICAgaWYgKGF1dGhvcml0aWVzID09IG51bGwgfHwgYXV0aG9yaXRpZXMubGVuZ3RoIDwgMSkgeyByZXR1cm4gW107IH1cclxuICAgIHJldHVybiBKU09OLnBhcnNlKGF1dGhvcml0aWVzKTtcclxuICB9XHJcblxyXG4gIGdldEF1dGhlbnRpY2F0aW9uU3RhdGUoKTogT2JzZXJ2YWJsZTxBY2NvdW50SW5mbz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25TdGF0ZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBkZWxldGVDb29raWUoKSB7XHJcbiAgICB0aGlzLmRlbGV0ZUNvb2tpZUJ5S2V5KEJlbmRDb3JlQ29uc3RhbnRzLmNvb2tpZXMuVE9LRU4pO1xyXG4gICAgdGhpcy5kZWxldGVDb29raWVCeUtleShCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLkFVVEhPUklUSUVTKTtcclxuICAgIHRoaXMuZGVsZXRlQ29va2llQnlLZXkoQmVuZENvcmVDb25zdGFudHMuY29va2llcy5BQ0NPVU5UX0lORk8pO1xyXG4gICAgdGhpcy5kZWxldGVDb29raWVCeUtleShCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLkFVVEhFTlRJQ0FUSU9OX1NUQVRFKTtcclxuICB9XHJcblxyXG4gIGxvZ291dChpbmZvOiBMb2dvdXRJbmZvKSB7XHJcbiAgICB0aGlzLmRlbGV0ZUNvb2tpZSgpO1xyXG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQobnVsbCk7XHJcbiAgICB0aGlzLmNvbnNvbGVTZXJ2aWNlLm1lc3NhZ2UoJ0xvZ291dCBTdWNjZXNzIG9mIFVzZXInICsgaW5mby5sb2dvdXRSdWxlKTtcclxuICB9XHJcblxyXG4gIGhhc0FueUF1dGhvcml0eShhdXRob3JpdGllczogc3RyaW5nW10pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGdyYW50ZWRBdXRob3JpdGllczogc3RyaW5nW10gPSB0aGlzLmF1dGhvcml0aWVzKCk7XHJcbiAgICBmb3IgKGNvbnN0IGF1dGggb2YgYXV0aG9yaXRpZXMpIHtcclxuICAgICAgaWYgKGdyYW50ZWRBdXRob3JpdGllcy5pbmNsdWRlcyhhdXRoKSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRlbGV0ZUNvb2tpZUJ5S2V5KGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnJlbW92ZShrZXkpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNhdmVDb29raWVCeUtleShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zdG9yYWdlU2VydmljZS5wdXQoa2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmV0cmlldmVDb29raWVCeUtleShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoa2V5KTtcclxuICB9XHJcbn1cclxuIl19