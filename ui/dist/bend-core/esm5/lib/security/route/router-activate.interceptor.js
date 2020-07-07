import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BendAuthenticationService } from '../auth/bend-authentication-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../auth/bend-authentication-service";
var RouterActivateInterceptor = /** @class */ (function () {
    function RouterActivateInterceptor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    RouterActivateInterceptor.prototype.canActivate = function (route, state) {
        var authorities = route.data.authorities;
        if (authorities == null || authorities.length <= 0) {
            return Promise.resolve(this.authenticationService.isAuthenticated());
        }
        else {
            return this.checkLogin(authorities, state.url);
        }
    };
    RouterActivateInterceptor.prototype.checkLogin = function (authorities, url) {
        return Promise.resolve(this.checkInternally(authorities, url));
    };
    RouterActivateInterceptor.prototype.checkInternally = function (authorities, url) {
        var authorize = this.authenticationService.hasAnyAuthority(authorities);
        if (!authorize) {
            if (isDevMode()) {
                console.error('User doesn\'t have any of required authorities: ' + authorities);
            }
            else {
                this.router.navigate(['accessdenied']);
            }
        }
        return authorize;
    };
    RouterActivateInterceptor.ctorParameters = function () { return [
        { type: Router },
        { type: BendAuthenticationService }
    ]; };
    RouterActivateInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function RouterActivateInterceptor_Factory() { return new RouterActivateInterceptor(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.BendAuthenticationService)); }, token: RouterActivateInterceptor, providedIn: "root" });
    RouterActivateInterceptor = __decorate([
        Injectable({ providedIn: 'root' })
    ], RouterActivateInterceptor);
    return RouterActivateInterceptor;
}());
export { RouterActivateInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWFjdGl2YXRlLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlY3VyaXR5L3JvdXRlL3JvdXRlci1hY3RpdmF0ZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7OztBQUc5RTtJQUNFLG1DQUNVLE1BQWMsRUFDZCxxQkFBZ0Q7UUFEaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBMkI7SUFDdkQsQ0FBQztJQUVKLCtDQUFXLEdBQVgsVUFBWSxLQUE2QixFQUFFLEtBQTBCO1FBQ25FLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksV0FBVyxJQUFJLElBQUksSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRztZQUNuRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsQ0FDN0MsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRCw4Q0FBVSxHQUFWLFVBQVcsV0FBcUIsRUFBRSxHQUFXO1FBQzNDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRU8sbURBQWUsR0FBdkIsVUFBd0IsV0FBcUIsRUFBRSxHQUFXO1FBQ3hELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLElBQUksU0FBUyxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxrREFBa0QsR0FBRyxXQUFXLENBQUMsQ0FBQzthQUNqRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7YUFDeEM7U0FDRjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7O2dCQS9CaUIsTUFBTTtnQkFDUyx5QkFBeUI7OztJQUgvQyx5QkFBeUI7UUFEckMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLHlCQUF5QixDQWtDckM7b0NBdkNEO0NBdUNDLEFBbENELElBa0NDO1NBbENZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgaXNEZXZNb2RlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0JlbmRBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJy4uL2F1dGgvYmVuZC1hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXJBY3RpdmF0ZUludGVyY2VwdG9yIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBCZW5kQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBhdXRob3JpdGllcyA9IHJvdXRlLmRhdGEuYXV0aG9yaXRpZXM7XHJcbiAgICBpZiAoYXV0aG9yaXRpZXMgPT0gbnVsbCB8fCBhdXRob3JpdGllcy5sZW5ndGggPD0gMCApIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tMb2dpbihhdXRob3JpdGllcywgc3RhdGUudXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrTG9naW4oYXV0aG9yaXRpZXM6IHN0cmluZ1tdLCB1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcclxuICAgICAgdGhpcy5jaGVja0ludGVybmFsbHkoYXV0aG9yaXRpZXMsIHVybClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrSW50ZXJuYWxseShhdXRob3JpdGllczogc3RyaW5nW10sIHVybDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBhdXRob3JpemUgPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5oYXNBbnlBdXRob3JpdHkoYXV0aG9yaXRpZXMpO1xyXG4gICAgaWYgKCFhdXRob3JpemUpIHtcclxuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVXNlciBkb2VzblxcJ3QgaGF2ZSBhbnkgb2YgcmVxdWlyZWQgYXV0aG9yaXRpZXM6ICcgKyBhdXRob3JpdGllcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhY2Nlc3NkZW5pZWQnXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhdXRob3JpemU7XHJcbiAgfVxyXG59XHJcbiJdfQ==