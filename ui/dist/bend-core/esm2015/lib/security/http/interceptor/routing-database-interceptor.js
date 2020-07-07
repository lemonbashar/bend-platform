import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StorageService } from '../../../service/storage/storage-service';
import { BendCoreConstants } from '../../../environments/bend-core-constants';
let RoutingDatabaseInterceptor = class RoutingDatabaseInterceptor {
    constructor(storageService) {
        this.storageService = storageService;
    }
    intercept(req, next) {
        const registryType = this.storageService.get(BendCoreConstants.cookies.routingDatabase.REGISTRY_TYPE);
        const registryValue = this.storageService.get(BendCoreConstants.cookies.routingDatabase.REGISTRY_VALUE);
        if (registryType != null && registryValue != null) {
            req = req.clone({
                setHeaders: {
                    HDR_RGTR_DTN_TP: registryType,
                    HDR_RGTR_DTN_VL: registryValue
                }
            });
        }
        return next.handle(req);
    }
};
RoutingDatabaseInterceptor.ctorParameters = () => [
    { type: StorageService }
];
RoutingDatabaseInterceptor = __decorate([
    Injectable()
], RoutingDatabaseInterceptor);
export { RoutingDatabaseInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1kYXRhYmFzZS1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZWN1cml0eS9odHRwL2ludGVyY2VwdG9yL3JvdXRpbmctZGF0YWJhc2UtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBRzVFLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBQ3JDLFlBQ1UsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7SUFFSixTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNoRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RHLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEcsSUFBSSxZQUFZLElBQUksSUFBSSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDakQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLGVBQWUsRUFBRSxZQUFZO29CQUM3QixlQUFlLEVBQUUsYUFBYTtpQkFDL0I7YUFDRixDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0YsQ0FBQTs7WUFoQjJCLGNBQWM7O0FBRjdCLDBCQUEwQjtJQUR0QyxVQUFVLEVBQUU7R0FDQSwwQkFBMEIsQ0FrQnRDO1NBbEJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U3RvcmFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2Uvc3RvcmFnZS9zdG9yYWdlLXNlcnZpY2UnO1xyXG5pbXBvcnQge0JlbmRDb3JlQ29uc3RhbnRzfSBmcm9tICcuLi8uLi8uLi9lbnZpcm9ubWVudHMvYmVuZC1jb3JlLWNvbnN0YW50cyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSb3V0aW5nRGF0YWJhc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBjb25zdCByZWdpc3RyeVR5cGUgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldChCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLnJvdXRpbmdEYXRhYmFzZS5SRUdJU1RSWV9UWVBFKTtcclxuICAgIGNvbnN0IHJlZ2lzdHJ5VmFsdWUgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldChCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLnJvdXRpbmdEYXRhYmFzZS5SRUdJU1RSWV9WQUxVRSk7XHJcbiAgICBpZiAocmVnaXN0cnlUeXBlICE9IG51bGwgJiYgcmVnaXN0cnlWYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XHJcbiAgICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgICAgSERSX1JHVFJfRFROX1RQOiByZWdpc3RyeVR5cGUsXHJcbiAgICAgICAgICBIRFJfUkdUUl9EVE5fVkw6IHJlZ2lzdHJ5VmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==