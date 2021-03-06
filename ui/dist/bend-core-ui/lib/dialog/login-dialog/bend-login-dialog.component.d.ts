import { OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HttpErrorResponse } from '@angular/common/http';
import { BendAuthenticationService, IAuthenticationCallback, LoginInfo } from 'bend-core';
import { BendToastService } from '../../message/bend-toast.service';
import * as ɵngcc0 from '@angular/core';
export declare class AuthState implements IAuthenticationCallback {
    private ref;
    private toastService;
    constructor(ref: DynamicDialogRef, toastService: BendToastService);
    authenticationState(isAuthenticated: boolean, message?: string, error?: HttpErrorResponse): void;
}
export declare class BendLoginDialogComponent implements OnInit {
    private authenticationService;
    private ref;
    config: DynamicDialogConfig;
    private toastService;
    loginInfo: LoginInfo;
    constructor(authenticationService: BendAuthenticationService, ref: DynamicDialogRef, config: DynamicDialogConfig, toastService: BendToastService);
    ngOnInit(): void;
    login(): void;
    cancel(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BendLoginDialogComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BendLoginDialogComponent, "bend-login-dialog", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1sb2dpbi1kaWFsb2cuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImJlbmQtbG9naW4tZGlhbG9nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER5bmFtaWNEaWFsb2dDb25maWcsIER5bmFtaWNEaWFsb2dSZWYgfSBmcm9tICdwcmltZW5nL2R5bmFtaWNkaWFsb2cnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQmVuZEF1dGhlbnRpY2F0aW9uU2VydmljZSwgSUF1dGhlbnRpY2F0aW9uQ2FsbGJhY2ssIExvZ2luSW5mbyB9IGZyb20gJ2JlbmQtY29yZSc7XHJcbmltcG9ydCB7IEJlbmRUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9tZXNzYWdlL2JlbmQtdG9hc3Quc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEF1dGhTdGF0ZSBpbXBsZW1lbnRzIElBdXRoZW50aWNhdGlvbkNhbGxiYWNrIHtcclxuICAgIHByaXZhdGUgcmVmO1xyXG4gICAgcHJpdmF0ZSB0b2FzdFNlcnZpY2U7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWY6IER5bmFtaWNEaWFsb2dSZWYsIHRvYXN0U2VydmljZTogQmVuZFRvYXN0U2VydmljZSk7XHJcbiAgICBhdXRoZW50aWNhdGlvblN0YXRlKGlzQXV0aGVudGljYXRlZDogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZywgZXJyb3I/OiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmVuZExvZ2luRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSByZWY7XHJcbiAgICBjb25maWc6IER5bmFtaWNEaWFsb2dDb25maWc7XHJcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTtcclxuICAgIGxvZ2luSW5mbzogTG9naW5JbmZvO1xyXG4gICAgY29uc3RydWN0b3IoYXV0aGVudGljYXRpb25TZXJ2aWNlOiBCZW5kQXV0aGVudGljYXRpb25TZXJ2aWNlLCByZWY6IER5bmFtaWNEaWFsb2dSZWYsIGNvbmZpZzogRHluYW1pY0RpYWxvZ0NvbmZpZywgdG9hc3RTZXJ2aWNlOiBCZW5kVG9hc3RTZXJ2aWNlKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBsb2dpbigpOiB2b2lkO1xyXG4gICAgY2FuY2VsKCk6IHZvaWQ7XHJcbn1cclxuIl19