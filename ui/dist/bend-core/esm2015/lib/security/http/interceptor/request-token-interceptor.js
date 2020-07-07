import { __decorate } from "tslib";
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BendAuthenticationService } from '../../auth/bend-authentication-service';
import { BendCoreConstants } from '../../../environments/bend-core-constants';
let RequestTokenInterceptor = class RequestTokenInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(req, next) {
        if (this.authenticationService.isAuthenticated()) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authenticationService.currentToken()}`
                }
            });
        }
        return next.handle(req).pipe(tap(evt => {
            if (evt instanceof HttpResponse) {
                const JWT_TOKEN = evt.headers.get(BendCoreConstants.jwt.REFRESHED_JSON_WEB_TOKEN);
                if (JWT_TOKEN != null) {
                    this.authenticationService.refreshToken(JWT_TOKEN);
                }
            }
        }));
    }
};
RequestTokenInterceptor.ctorParameters = () => [
    { type: BendAuthenticationService }
];
RequestTokenInterceptor = __decorate([
    Injectable()
], RequestTokenInterceptor);
export { RequestTokenInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC10b2tlbi1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZWN1cml0eS9odHRwL2ludGVyY2VwdG9yL3JlcXVlc3QtdG9rZW4taW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUQsWUFBWSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFeEcsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkMsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFHNUUsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFDbEMsWUFDVSxxQkFBZ0Q7UUFBaEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUEyQjtJQUN2RCxDQUFDO0lBRUosU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDaEQsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDaEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLGFBQWEsRUFBRSxVQUFVLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsRUFBRTtpQkFDckU7YUFDRixDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksR0FBRyxZQUFZLFlBQVksRUFBRTtnQkFDL0IsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ2xGLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtvQkFDckIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDcEQ7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0YsQ0FBQTs7WUFwQmtDLHlCQUF5Qjs7QUFGL0MsdUJBQXVCO0lBRG5DLFVBQVUsRUFBRTtHQUNBLHVCQUF1QixDQXNCbkM7U0F0QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHt0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtCZW5kQXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9hdXRoL2JlbmQtYXV0aGVudGljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCB7QmVuZENvcmVDb25zdGFudHN9IGZyb20gJy4uLy4uLy4uL2Vudmlyb25tZW50cy9iZW5kLWNvcmUtY29uc3RhbnRzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RUb2tlbkludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBCZW5kQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGlmICh0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xyXG4gICAgICByZXEgPSByZXEuY2xvbmUoe1xyXG4gICAgICAgIHNldEhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VG9rZW4oKX1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnBpcGUodGFwKGV2dCA9PiB7XHJcbiAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCBKV1RfVE9LRU4gPSBldnQuaGVhZGVycy5nZXQoQmVuZENvcmVDb25zdGFudHMuand0LlJFRlJFU0hFRF9KU09OX1dFQl9UT0tFTik7XHJcbiAgICAgICAgaWYgKEpXVF9UT0tFTiAhPSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWZyZXNoVG9rZW4oSldUX1RPS0VOKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIl19