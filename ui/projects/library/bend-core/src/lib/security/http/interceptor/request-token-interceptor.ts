import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {BendAuthenticationService} from '../../auth/bend-authentication-service';

@Injectable()
export class RequestTokenInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: BendAuthenticationService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authenticationService.currentToken()}`
        }
      });
    }
    return next.handle(req).pipe(tap(evt => {
      if (evt instanceof HttpResponse) {
        const REF_JWT_TOKEN = evt.headers.get(environment.jwt.REFRESHED_JSON_WEB_TOKEN);
        if (REF_JWT_TOKEN == null) {
          const JWT_TOKEN = evt.headers.get(environment.jwt.JSON_WEB_TOKEN);
          if (JWT_TOKEN != null) {
            this.authenticationService.refreshToken(JWT_TOKEN);
          }
        } else {
          this.authenticationService.refreshToken(REF_JWT_TOKEN);
        }
      }
    }));
  }
}
