import { __decorate } from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { BendAuthenticationService } from '../auth/bend-authentication-service';
/*If Passed Empty or YES Tag that means it check for authenticated*/
/*If Passed NO Tag that means it check for not authenticated*/
/*ALL OTHER TAG ARE MENTIONED AS YES TAG*/
var BendIsAuthenticatedDirective = /** @class */ (function () {
    function BendIsAuthenticatedDirective(templateRef, viewContainerRef, authenticationService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.authenticationService = authenticationService;
    }
    Object.defineProperty(BendIsAuthenticatedDirective.prototype, "bendIsAuthenticated", {
        set: function (value) {
            var _this = this;
            this.updateView(value);
            this.authenticationService.getAuthenticationState().subscribe(function (info) { return _this.updateView(value); });
        },
        enumerable: true,
        configurable: true
    });
    BendIsAuthenticatedDirective.prototype.updateView = function (value) {
        this.viewContainerRef.clear();
        if (this.isAuthenticatedCheck(value)) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    };
    BendIsAuthenticatedDirective.prototype.isAuthenticatedCheck = function (value) {
        var out = this.authenticationService.isAuthenticated();
        return value.toLowerCase() === 'no' ? !out : out;
    };
    BendIsAuthenticatedDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: BendAuthenticationService }
    ]; };
    __decorate([
        Input()
    ], BendIsAuthenticatedDirective.prototype, "bendIsAuthenticated", null);
    BendIsAuthenticatedDirective = __decorate([
        Directive({
            selector: '[bendIsAuthenticated]'
        })
    ], BendIsAuthenticatedDirective);
    return BendIsAuthenticatedDirective;
}());
export { BendIsAuthenticatedDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1pcy1hdXRoZW50aWNhdGVkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZWN1cml0eS9kaXJlY3RpdmUvYmVuZC1pcy1hdXRoZW50aWNhdGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBRzlFLG9FQUFvRTtBQUNwRSw4REFBOEQ7QUFDOUQsMENBQTBDO0FBSzFDO0lBQ0Usc0NBQW9CLFdBQTZCLEVBQzdCLGdCQUFrQyxFQUNsQyxxQkFBZ0Q7UUFGaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUEyQjtJQUVwRSxDQUFDO0lBR0Qsc0JBQUksNkRBQW1CO2FBQXZCLFVBQXdCLEtBQWE7WUFEckMsaUJBSUM7WUFGQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUNoRyxDQUFDOzs7T0FBQTtJQUVPLGlEQUFVLEdBQWxCLFVBQW1CLEtBQWE7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxFQUFHO1lBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUFFO0lBQ3hHLENBQUM7SUFFTywyREFBb0IsR0FBNUIsVUFBNkIsS0FBYTtRQUN4QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekQsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ25ELENBQUM7O2dCQXBCZ0MsV0FBVztnQkFDTixnQkFBZ0I7Z0JBQ1gseUJBQXlCOztJQUtwRTtRQURDLEtBQUssRUFBRTsyRUFJUDtJQVhVLDRCQUE0QjtRQUh4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1NBQ2xDLENBQUM7T0FDVyw0QkFBNEIsQ0F1QnhDO0lBQUQsbUNBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXZCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCZW5kQXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuLi9hdXRoL2JlbmQtYXV0aGVudGljYXRpb24tc2VydmljZSc7XHJcblxyXG5cclxuLypJZiBQYXNzZWQgRW1wdHkgb3IgWUVTIFRhZyB0aGF0IG1lYW5zIGl0IGNoZWNrIGZvciBhdXRoZW50aWNhdGVkKi9cclxuLypJZiBQYXNzZWQgTk8gVGFnIHRoYXQgbWVhbnMgaXQgY2hlY2sgZm9yIG5vdCBhdXRoZW50aWNhdGVkKi9cclxuLypBTEwgT1RIRVIgVEFHIEFSRSBNRU5USU9ORUQgQVMgWUVTIFRBRyovXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tiZW5kSXNBdXRoZW50aWNhdGVkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJlbmRJc0F1dGhlbnRpY2F0ZWREaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBCZW5kQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBiZW5kSXNBdXRoZW50aWNhdGVkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudXBkYXRlVmlldyh2YWx1ZSk7XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRBdXRoZW50aWNhdGlvblN0YXRlKCkuc3Vic2NyaWJlKGluZm8gPT4gdGhpcy51cGRhdGVWaWV3KHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVZpZXcodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XHJcbiAgICBpZiAodGhpcy5pc0F1dGhlbnRpY2F0ZWRDaGVjayh2YWx1ZSkgKSB7IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7IH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNBdXRoZW50aWNhdGVkQ2hlY2sodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgb3V0ID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ25vJyA/ICFvdXQgOiBvdXQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=