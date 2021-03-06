import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../../../service/storage/storage-service';
import * as ɵngcc0 from '@angular/core';
export declare class RoutingDatabaseInterceptor implements HttpInterceptor {
    private storageService;
    constructor(storageService: StorageService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingDatabaseInterceptor>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<RoutingDatabaseInterceptor>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1kYXRhYmFzZS1pbnRlcmNlcHRvci5kLnRzIiwic291cmNlcyI6WyJyb3V0aW5nLWRhdGFiYXNlLWludGVyY2VwdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7O0FBSUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZS9zdG9yYWdlL3N0b3JhZ2Utc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRpbmdEYXRhYmFzZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U7XHJcbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UpO1xyXG4gICAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcclxufVxyXG4iXX0=