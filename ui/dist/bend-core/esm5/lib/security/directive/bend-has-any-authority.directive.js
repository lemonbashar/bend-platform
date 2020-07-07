import { __decorate } from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { BendAuthenticationService } from '../auth/bend-authentication-service';
var BendHasAnyAuthorityDirective = /** @class */ (function () {
    function BendHasAnyAuthorityDirective(templateRef, viewContainerRef, authenticationService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.authenticationService = authenticationService;
    }
    Object.defineProperty(BendHasAnyAuthorityDirective.prototype, "bendHasAnyAuthority", {
        set: function (value) {
            var _this = this;
            this.authorities = typeof value === 'string' ? [value] : value;
            this.updateView();
            this.authenticationService.getAuthenticationState().subscribe(function (info) { return _this.updateView(); });
        },
        enumerable: true,
        configurable: true
    });
    BendHasAnyAuthorityDirective.prototype.updateView = function () {
        this.viewContainerRef.clear();
        if (this.hasAnyAuthorityCheck()) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    };
    BendHasAnyAuthorityDirective.prototype.hasAnyAuthorityCheck = function () {
        if (!this.authenticationService.isAuthenticated()) {
            return false;
        }
        return this.authenticationService.hasAnyAuthority(this.authorities);
    };
    BendHasAnyAuthorityDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: BendAuthenticationService }
    ]; };
    __decorate([
        Input()
    ], BendHasAnyAuthorityDirective.prototype, "bendHasAnyAuthority", null);
    BendHasAnyAuthorityDirective = __decorate([
        Directive({
            selector: '[bendHasAnyAuthority]'
        })
    ], BendHasAnyAuthorityDirective);
    return BendHasAnyAuthorityDirective;
}());
export { BendHasAnyAuthorityDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1oYXMtYW55LWF1dGhvcml0eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iZW5kLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VjdXJpdHkvZGlyZWN0aXZlL2JlbmQtaGFzLWFueS1hdXRob3JpdHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFLOUU7SUFHRSxzQ0FBb0IsV0FBNkIsRUFDN0IsZ0JBQWtDLEVBQ2xDLHFCQUFnRDtRQUZoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQywwQkFBcUIsR0FBckIscUJBQXFCLENBQTJCO0lBRXBFLENBQUM7SUFHRCxzQkFBSSw2REFBbUI7YUFBdkIsVUFBd0IsS0FBd0I7WUFEaEQsaUJBS0M7WUFIQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztRQUMzRixDQUFDOzs7T0FBQTtJQUVPLGlEQUFVLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUc7WUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQUU7SUFDbkcsQ0FBQztJQUVPLDJEQUFvQixHQUE1QjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFBQyxPQUFPLEtBQUssQ0FBQztTQUFFO1FBQ25FLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Z0JBckJnQyxXQUFXO2dCQUNOLGdCQUFnQjtnQkFDWCx5QkFBeUI7O0lBS3BFO1FBREMsS0FBSyxFQUFFOzJFQUtQO0lBZFUsNEJBQTRCO1FBSHhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7U0FDbEMsQ0FBQztPQUNXLDRCQUE0QixDQXlCeEM7SUFBRCxtQ0FBQztDQUFBLEFBekJELElBeUJDO1NBekJZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JlbmRBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJy4uL2F1dGgvYmVuZC1hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2JlbmRIYXNBbnlBdXRob3JpdHldJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQmVuZEhhc0FueUF1dGhvcml0eURpcmVjdGl2ZSB7XHJcbiAgcHJpdmF0ZSBhdXRob3JpdGllczogc3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBCZW5kQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBiZW5kSGFzQW55QXV0aG9yaXR5KHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5hdXRob3JpdGllcyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBbdmFsdWVdIDogdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEF1dGhlbnRpY2F0aW9uU3RhdGUoKS5zdWJzY3JpYmUoaW5mbyA9PiB0aGlzLnVwZGF0ZVZpZXcoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVZpZXcoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcclxuICAgIGlmICh0aGlzLmhhc0FueUF1dGhvcml0eUNoZWNrKCkgKSB7IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7IH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQW55QXV0aG9yaXR5Q2hlY2soKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKSB7cmV0dXJuIGZhbHNlOyB9XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuaGFzQW55QXV0aG9yaXR5KHRoaXMuYXV0aG9yaXRpZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=