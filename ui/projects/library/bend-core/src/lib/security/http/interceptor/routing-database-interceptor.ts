import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {StorageService} from '../../../service/storage/storage-service';
import {BendCoreConstants} from '../../../environments/bend-core-constants';

@Injectable()
export class RoutingDatabaseInterceptor implements HttpInterceptor {
  constructor(
    private storageService: StorageService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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
}
