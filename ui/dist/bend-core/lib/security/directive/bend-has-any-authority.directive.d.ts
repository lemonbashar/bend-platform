import { TemplateRef, ViewContainerRef } from '@angular/core';
import { BendAuthenticationService } from '../auth/bend-authentication-service';
import * as ɵngcc0 from '@angular/core';
export declare class BendHasAnyAuthorityDirective {
    private templateRef;
    private viewContainerRef;
    private authenticationService;
    private authorities;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, authenticationService: BendAuthenticationService);
    set bendHasAnyAuthority(value: string | string[]);
    private updateView;
    private hasAnyAuthorityCheck;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BendHasAnyAuthorityDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BendHasAnyAuthorityDirective, "[bendHasAnyAuthority]", never, {
    "bendHasAnyAuthority": "bendHasAnyAuthority";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1oYXMtYW55LWF1dGhvcml0eS5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiYmVuZC1oYXMtYW55LWF1dGhvcml0eS5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlbmRBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL2JlbmQtYXV0aGVudGljYXRpb24tc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJlbmRIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmUge1xyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjtcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjtcclxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBhdXRob3JpdGllcztcclxuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEJlbmRBdXRoZW50aWNhdGlvblNlcnZpY2UpO1xyXG4gICAgc2V0IGJlbmRIYXNBbnlBdXRob3JpdHkodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKTtcclxuICAgIHByaXZhdGUgdXBkYXRlVmlldztcclxuICAgIHByaXZhdGUgaGFzQW55QXV0aG9yaXR5Q2hlY2s7XHJcbn1cclxuIl19