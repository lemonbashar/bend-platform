import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from '../../auth/authentication-service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class RequestTokenInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authenticationService.currentToken()}`
        }
      });
    }
    return next.handle(req);
  }
}
