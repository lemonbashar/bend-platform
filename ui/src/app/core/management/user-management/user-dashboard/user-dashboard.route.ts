import {AccountService, AuthoritiesConstants, IUser, User} from '../../..';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Routes} from '@angular/router';
import {RouterActivateInterceptor} from '../../../security/route/router-activate.interceptor';
import {UserCreateComponent} from '..';
import {Observable, of} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

const auth = new AuthoritiesConstants();

@Injectable({ providedIn: 'root' })
export class UserResolve implements Resolve<IUser> {
  constructor(
    private service: AccountService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.service.findOne(id).pipe(map((userRes: HttpResponse<User>) => userRes.body));
    }
    return of(new User());
  }
}

export const userDashboardRoute: Routes = [
  {
    path: 'user-dashboard/user-create',
    component: UserCreateComponent,
    resolve: {
      user: UserResolve
    },
    data: {
      authorities: [...auth.userAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  },
  {
    path: 'user-dashboard/:id/user-update',
    component: UserCreateComponent,
    resolve: {
      user: UserResolve
    },
    data: {
      authorities: [...auth.userAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  }
];
