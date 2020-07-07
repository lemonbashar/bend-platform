import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BendAuthenticationService, IAuthenticationCallback, LoginInfo } from 'bend-core';
import { BendToastService } from '../../message/bend-toast.service';
export class AuthState {
    constructor(ref, toastService) {
        this.ref = ref;
        this.toastService = toastService;
    }
    authenticationState(isAuthenticated, message, error) {
        if (isAuthenticated) {
            this.toastService.info('Authentication Success');
            this.ref.close();
        }
        else {
            this.toastService.error('Authentication Failed');
        }
    }
}
let BendLoginDialogComponent = class BendLoginDialogComponent {
    constructor(authenticationService, ref, config, toastService) {
        this.authenticationService = authenticationService;
        this.ref = ref;
        this.config = config;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.loginInfo = new LoginInfo();
    }
    login() {
        this.authenticationService.authenticate(this.loginInfo, new AuthState(this.ref, this.toastService));
    }
    cancel() {
        this.ref.close();
    }
};
BendLoginDialogComponent.ctorParameters = () => [
    { type: BendAuthenticationService },
    { type: DynamicDialogRef },
    { type: DynamicDialogConfig },
    { type: BendToastService }
];
BendLoginDialogComponent = __decorate([
    Component({
        selector: 'bend-login-dialog',
        template: "<div>\r\n  <div class=\"ui-g-12\">\r\n    <label for=\"id-bmu-view-login-dialog-username\">Username</label>\r\n    <input class=\"ui-g-12\" id=\"id-bmu-view-login-dialog-username\" [(ngModel)]=\"loginInfo.username\" type=\"text\" pInputText />\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <label for=\"id-bmu-view-login-dialog-password\">Password</label>\r\n    <input class=\"ui-g-12\" id=\"id-bmu-view-login-dialog-password\" [(ngModel)]=\"loginInfo.password\" type=\"password\" pInputText />\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"element-right\">\r\n      <button pButton label=\"Cancel\" style=\"margin-right: 1em\" (click)=\"cancel()\" icon=\"fa fa-times-circle\"></button>\r\n      <button pButton label=\"Login\" (click)=\"login()\" icon=\"fa fa-check-circle\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
    })
], BendLoginDialogComponent);
export { BendLoginDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1sb2dpbi1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLXVpLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9sb2dpbi1kaWFsb2cvYmVuZC1sb2dpbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRTVFLE9BQU8sRUFBQyx5QkFBeUIsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDeEYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFHbEUsTUFBTSxPQUFPLFNBQVM7SUFFcEIsWUFDVSxHQUFxQixFQUNyQixZQUE4QjtRQUQ5QixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7SUFFeEMsQ0FBQztJQUVELG1CQUFtQixDQUFDLGVBQXdCLEVBQUUsT0FBZ0IsRUFBRSxLQUF5QjtRQUN2RixJQUFJLGVBQWUsRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEI7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0NBQ0Y7QUFNRCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQUduQyxZQUNVLHFCQUFnRCxFQUNoRCxHQUFxQixFQUN0QixNQUEyQixFQUMxQixZQUE4QjtRQUg5QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQTJCO1FBQ2hELFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtJQUNwQyxDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0YsQ0FBQTs7WUFqQmtDLHlCQUF5QjtZQUMzQyxnQkFBZ0I7WUFDZCxtQkFBbUI7WUFDWixnQkFBZ0I7O0FBUDdCLHdCQUF3QjtJQUpwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLHUxQkFBaUQ7S0FDbEQsQ0FBQztHQUNXLHdCQUF3QixDQXFCcEM7U0FyQlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEeW5hbWljRGlhbG9nQ29uZmlnLCBEeW5hbWljRGlhbG9nUmVmfSBmcm9tICdwcmltZW5nL2R5bmFtaWNkaWFsb2cnO1xyXG5pbXBvcnQge0h0dHBFcnJvclJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7QmVuZEF1dGhlbnRpY2F0aW9uU2VydmljZSwgSUF1dGhlbnRpY2F0aW9uQ2FsbGJhY2ssIExvZ2luSW5mb30gZnJvbSAnYmVuZC1jb3JlJztcclxuaW1wb3J0IHtCZW5kVG9hc3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9tZXNzYWdlL2JlbmQtdG9hc3Quc2VydmljZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhTdGF0ZSBpbXBsZW1lbnRzIElBdXRoZW50aWNhdGlvbkNhbGxiYWNrIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlZjogRHluYW1pY0RpYWxvZ1JlZixcclxuICAgIHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBCZW5kVG9hc3RTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBhdXRoZW50aWNhdGlvblN0YXRlKGlzQXV0aGVudGljYXRlZDogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZywgZXJyb3I/OiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQge1xyXG4gICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICB0aGlzLnRvYXN0U2VydmljZS5pbmZvKCdBdXRoZW50aWNhdGlvbiBTdWNjZXNzJyk7XHJcbiAgICAgIHRoaXMucmVmLmNsb3NlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvYXN0U2VydmljZS5lcnJvcignQXV0aGVudGljYXRpb24gRmFpbGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JlbmQtbG9naW4tZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmVuZC1sb2dpbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCZW5kTG9naW5EaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGxvZ2luSW5mbzogTG9naW5JbmZvO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBCZW5kQXV0aGVudGljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWY6IER5bmFtaWNEaWFsb2dSZWYsXHJcbiAgICBwdWJsaWMgY29uZmlnOiBEeW5hbWljRGlhbG9nQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSB0b2FzdFNlcnZpY2U6IEJlbmRUb2FzdFNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9naW5JbmZvID0gbmV3IExvZ2luSW5mbygpO1xyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5hdXRoZW50aWNhdGUodGhpcy5sb2dpbkluZm8sIG5ldyBBdXRoU3RhdGUodGhpcy5yZWYsIHRoaXMudG9hc3RTZXJ2aWNlKSk7XHJcbiAgfVxyXG5cclxuICBjYW5jZWwoKSB7XHJcbiAgICB0aGlzLnJlZi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=