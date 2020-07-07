import { RouteUtil } from '../util/route.util';
import { AuthoritiesConstants } from 'bend-core';
var BendBaseComponent = /** @class */ (function () {
    function BendBaseComponent() {
        this.authoritiesConstants = new AuthoritiesConstants();
        this.today = new Date();
        this.DEF_LANG_KEY = 'en';
    }
    BendBaseComponent.prototype.makeRouteStartFromThis = function (route) {
        return RouteUtil.startFromThis(route);
    };
    Object.defineProperty(BendBaseComponent.prototype, "authorities", {
        get: function () {
            return this.authoritiesConstants;
        },
        enumerable: true,
        configurable: true
    });
    BendBaseComponent.prototype.prepareTranslate = function (translate, langKeyService) {
        translate.setDefaultLang(this.DEF_LANG_KEY);
        translate.use(langKeyService.activatedKey());
    };
    return BendBaseComponent;
}());
export { BendBaseComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS11aS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2JlbmQtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxvQkFBb0IsRUFBb0MsTUFBTSxXQUFXLENBQUM7QUFJbEY7SUFBQTtRQUNFLHlCQUFvQixHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztRQUNsRCxVQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNYLGlCQUFZLEdBQUcsSUFBSSxDQUFDO0lBYzlCLENBQUM7SUFaQyxrREFBc0IsR0FBdEIsVUFBdUIsS0FBYTtRQUNsQyxPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHNCQUFJLDBDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELDRDQUFnQixHQUFoQixVQUFpQixTQUEyQixFQUFFLGNBQThCO1FBQzFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVVdGlsfSBmcm9tICcuLi91dGlsL3JvdXRlLnV0aWwnO1xyXG5pbXBvcnQge0F1dGhvcml0aWVzQ29uc3RhbnRzLCBCZW5kQ29yZUNvbnN0YW50cywgU3RvcmFnZVNlcnZpY2V9IGZyb20gJ2JlbmQtY29yZSc7XHJcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7TGFuZ0tleVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlL2xhbmcta2V5LXNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCZW5kQmFzZUNvbXBvbmVudCB7XHJcbiAgYXV0aG9yaXRpZXNDb25zdGFudHMgPSBuZXcgQXV0aG9yaXRpZXNDb25zdGFudHMoKTtcclxuICB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgcHJpdmF0ZSBERUZfTEFOR19LRVkgPSAnZW4nO1xyXG5cclxuICBtYWtlUm91dGVTdGFydEZyb21UaGlzKHJvdXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFJvdXRlVXRpbC5zdGFydEZyb21UaGlzKHJvdXRlKTtcclxuICB9XHJcblxyXG4gIGdldCBhdXRob3JpdGllcygpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXRpZXNDb25zdGFudHM7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJlVHJhbnNsYXRlKHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgbGFuZ0tleVNlcnZpY2U6IExhbmdLZXlTZXJ2aWNlKSB7XHJcbiAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcodGhpcy5ERUZfTEFOR19LRVkpO1xyXG4gICAgdHJhbnNsYXRlLnVzZShsYW5nS2V5U2VydmljZS5hY3RpdmF0ZWRLZXkoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==