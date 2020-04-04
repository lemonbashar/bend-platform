import {Injectable, isDevMode} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {BendAuthenticationService} from '../auth/bend-authentication-service';

@Injectable({ providedIn: 'root' })
export class RouterActivateInterceptor implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: BendAuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    const authorities = route.data.authorities;
    if (authorities == null || authorities.length <= 0 ) {
      return Promise.resolve(
        this.authenticationService.isAuthenticated()
      );
    } else {
      return this.checkLogin(authorities, state.url);
    }
  }

  checkLogin(authorities: string[], url: string): Promise<boolean> {
    return Promise.resolve(
      this.checkInternally(authorities, url)
    );
  }

  private checkInternally(authorities: string[], url: string): boolean {
    const authorize = this.authenticationService.hasAnyAuthority(authorities);
    if (!authorize) {
      if (isDevMode()) {
        console.error('User has not any of required authorities: ' + authorities);
      } else {
        this.router.navigate(['accessdenied']);
      }
    }
    return authorize;
  }
}
