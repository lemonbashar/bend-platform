import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BendAuthenticationService } from '../auth/bend-authentication-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../auth/bend-authentication-service";
let RouterActivateInterceptor = class RouterActivateInterceptor {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const authorities = route.data.authorities;
        if (authorities == null || authorities.length <= 0) {
            return Promise.resolve(this.authenticationService.isAuthenticated());
        }
        else {
            return this.checkLogin(authorities, state.url);
        }
    }
    checkLogin(authorities, url) {
        return Promise.resolve(this.checkInternally(authorities, url));
    }
    checkInternally(authorities, url) {
        const authorize = this.authenticationService.hasAnyAuthority(authorities);
        if (!authorize) {
            if (isDevMode()) {
                console.error('User doesn\'t have any of required authorities: ' + authorities);
            }
            else {
                this.router.navigate(['accessdenied']);
            }
        }
        return authorize;
    }
};
RouterActivateInterceptor.ctorParameters = () => [
    { type: Router },
    { type: BendAuthenticationService }
];
RouterActivateInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function RouterActivateInterceptor_Factory() { return new RouterActivateInterceptor(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.BendAuthenticationService)); }, token: RouterActivateInterceptor, providedIn: "root" });
RouterActivateInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], RouterActivateInterceptor);
export { RouterActivateInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWFjdGl2YXRlLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlY3VyaXR5L3JvdXRlL3JvdXRlci1hY3RpdmF0ZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7OztBQUc5RSxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUNwQyxZQUNVLE1BQWMsRUFDZCxxQkFBZ0Q7UUFEaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBMkI7SUFDdkQsQ0FBQztJQUVKLFdBQVcsQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ25FLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksV0FBVyxJQUFJLElBQUksSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRztZQUNuRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsQ0FDN0MsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsV0FBcUIsRUFBRSxHQUFXO1FBQzNDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRU8sZUFBZSxDQUFDLFdBQXFCLEVBQUUsR0FBVztRQUN4RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxJQUFJLFNBQVMsRUFBRSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0RBQWtELEdBQUcsV0FBVyxDQUFDLENBQUM7YUFDakY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0Y7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0YsQ0FBQTs7WUFoQ21CLE1BQU07WUFDUyx5QkFBeUI7OztBQUgvQyx5QkFBeUI7SUFEckMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLHlCQUF5QixDQWtDckM7U0FsQ1kseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBpc0Rldk1vZGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3R9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QmVuZEF1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnLi4vYXV0aC9iZW5kLWF1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFJvdXRlckFjdGl2YXRlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEJlbmRBdXRoZW50aWNhdGlvblNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGF1dGhvcml0aWVzID0gcm91dGUuZGF0YS5hdXRob3JpdGllcztcclxuICAgIGlmIChhdXRob3JpdGllcyA9PSBudWxsIHx8IGF1dGhvcml0aWVzLmxlbmd0aCA8PSAwICkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5jaGVja0xvZ2luKGF1dGhvcml0aWVzLCBzdGF0ZS51cmwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tMb2dpbihhdXRob3JpdGllczogc3RyaW5nW10sIHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxyXG4gICAgICB0aGlzLmNoZWNrSW50ZXJuYWxseShhdXRob3JpdGllcywgdXJsKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tJbnRlcm5hbGx5KGF1dGhvcml0aWVzOiBzdHJpbmdbXSwgdXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGF1dGhvcml6ZSA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmhhc0FueUF1dGhvcml0eShhdXRob3JpdGllcyk7XHJcbiAgICBpZiAoIWF1dGhvcml6ZSkge1xyXG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdVc2VyIGRvZXNuXFwndCBoYXZlIGFueSBvZiByZXF1aXJlZCBhdXRob3JpdGllczogJyArIGF1dGhvcml0aWVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2FjY2Vzc2RlbmllZCddKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF1dGhvcml6ZTtcclxuICB9XHJcbn1cclxuIl19