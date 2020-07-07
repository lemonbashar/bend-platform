import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BendAuthenticationService, IAuthenticationCallback, LoginInfo } from 'bend-core';
import { BendToastService } from '../../message/bend-toast.service';
var AuthState = /** @class */ (function () {
    function AuthState(ref, toastService) {
        this.ref = ref;
        this.toastService = toastService;
    }
    AuthState.prototype.authenticationState = function (isAuthenticated, message, error) {
        if (isAuthenticated) {
            this.toastService.info('Authentication Success');
            this.ref.close();
        }
        else {
            this.toastService.error('Authentication Failed');
        }
    };
    return AuthState;
}());
export { AuthState };
var BendLoginDialogComponent = /** @class */ (function () {
    function BendLoginDialogComponent(authenticationService, ref, config, toastService) {
        this.authenticationService = authenticationService;
        this.ref = ref;
        this.config = config;
        this.toastService = toastService;
    }
    BendLoginDialogComponent.prototype.ngOnInit = function () {
        this.loginInfo = new LoginInfo();
    };
    BendLoginDialogComponent.prototype.login = function () {
        this.authenticationService.authenticate(this.loginInfo, new AuthState(this.ref, this.toastService));
    };
    BendLoginDialogComponent.prototype.cancel = function () {
        this.ref.close();
    };
    BendLoginDialogComponent.ctorParameters = function () { return [
        { type: BendAuthenticationService },
        { type: DynamicDialogRef },
        { type: DynamicDialogConfig },
        { type: BendToastService }
    ]; };
    BendLoginDialogComponent = __decorate([
        Component({
            selector: 'bend-login-dialog',
            template: "<div>\r\n  <div class=\"ui-g-12\">\r\n    <label for=\"id-bmu-view-login-dialog-username\">Username</label>\r\n    <input class=\"ui-g-12\" id=\"id-bmu-view-login-dialog-username\" [(ngModel)]=\"loginInfo.username\" type=\"text\" pInputText />\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <label for=\"id-bmu-view-login-dialog-password\">Password</label>\r\n    <input class=\"ui-g-12\" id=\"id-bmu-view-login-dialog-password\" [(ngModel)]=\"loginInfo.password\" type=\"password\" pInputText />\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"element-right\">\r\n      <button pButton label=\"Cancel\" style=\"margin-right: 1em\" (click)=\"cancel()\" icon=\"fa fa-times-circle\"></button>\r\n      <button pButton label=\"Login\" (click)=\"login()\" icon=\"fa fa-check-circle\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
        })
    ], BendLoginDialogComponent);
    return BendLoginDialogComponent;
}());
export { BendLoginDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1sb2dpbi1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLXVpLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9sb2dpbi1kaWFsb2cvYmVuZC1sb2dpbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRTVFLE9BQU8sRUFBQyx5QkFBeUIsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDeEYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFHbEU7SUFFRSxtQkFDVSxHQUFxQixFQUNyQixZQUE4QjtRQUQ5QixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7SUFFeEMsQ0FBQztJQUVELHVDQUFtQixHQUFuQixVQUFvQixlQUF3QixFQUFFLE9BQWdCLEVBQUUsS0FBeUI7UUFDdkYsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xCO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQzs7QUFNRDtJQUdFLGtDQUNVLHFCQUFnRCxFQUNoRCxHQUFxQixFQUN0QixNQUEyQixFQUMxQixZQUE4QjtRQUg5QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQTJCO1FBQ2hELFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtJQUNwQyxDQUFDO0lBRUwsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsd0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCx5Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFoQmdDLHlCQUF5QjtnQkFDM0MsZ0JBQWdCO2dCQUNkLG1CQUFtQjtnQkFDWixnQkFBZ0I7O0lBUDdCLHdCQUF3QjtRQUpwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLHUxQkFBaUQ7U0FDbEQsQ0FBQztPQUNXLHdCQUF3QixDQXFCcEM7SUFBRCwrQkFBQztDQUFBLEFBckJELElBcUJDO1NBckJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RHluYW1pY0RpYWxvZ0NvbmZpZywgRHluYW1pY0RpYWxvZ1JlZn0gZnJvbSAncHJpbWVuZy9keW5hbWljZGlhbG9nJztcclxuaW1wb3J0IHtIdHRwRXJyb3JSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0JlbmRBdXRoZW50aWNhdGlvblNlcnZpY2UsIElBdXRoZW50aWNhdGlvbkNhbGxiYWNrLCBMb2dpbkluZm99IGZyb20gJ2JlbmQtY29yZSc7XHJcbmltcG9ydCB7QmVuZFRvYXN0U2VydmljZX0gZnJvbSAnLi4vLi4vbWVzc2FnZS9iZW5kLXRvYXN0LnNlcnZpY2UnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoU3RhdGUgaW1wbGVtZW50cyBJQXV0aGVudGljYXRpb25DYWxsYmFjayB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWY6IER5bmFtaWNEaWFsb2dSZWYsXHJcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTogQmVuZFRvYXN0U2VydmljZVxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgYXV0aGVudGljYXRpb25TdGF0ZShpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4sIG1lc3NhZ2U/OiBzdHJpbmcsIGVycm9yPzogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkIHtcclxuICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgdGhpcy50b2FzdFNlcnZpY2UuaW5mbygnQXV0aGVudGljYXRpb24gU3VjY2VzcycpO1xyXG4gICAgICB0aGlzLnJlZi5jbG9zZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b2FzdFNlcnZpY2UuZXJyb3IoJ0F1dGhlbnRpY2F0aW9uIEZhaWxlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdiZW5kLWxvZ2luLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JlbmQtbG9naW4tZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQmVuZExvZ2luRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBsb2dpbkluZm86IExvZ2luSW5mbztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQmVuZEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVmOiBEeW5hbWljRGlhbG9nUmVmLFxyXG4gICAgcHVibGljIGNvbmZpZzogRHluYW1pY0RpYWxvZ0NvbmZpZyxcclxuICAgIHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBCZW5kVG9hc3RTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2luSW5mbyA9IG5ldyBMb2dpbkluZm8oKTtcclxuICB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuYXV0aGVudGljYXRlKHRoaXMubG9naW5JbmZvLCBuZXcgQXV0aFN0YXRlKHRoaXMucmVmLCB0aGlzLnRvYXN0U2VydmljZSkpO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgdGhpcy5yZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19