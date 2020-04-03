import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Routes} from '@angular/router';
import {UserCreateComponent} from '..';
import {Observable, of} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AccountService, AuthoritiesConstants, UserCrudData, RouterActivateInterceptor, DataResponse} from 'bend-core';

const auth = new AuthoritiesConstants();

@Injectable({ providedIn: 'root' })
export class UserResolve implements Resolve<UserCrudData> {
  constructor(
    private service: AccountService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserCrudData> | Promise<UserCrudData> | UserCrudData {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.service.findOne(id).pipe(map((userRes: HttpResponse<DataResponse<UserCrudData>>) => userRes.body.data));
    }
    return of(new UserCrudData());
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
