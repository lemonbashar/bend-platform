import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Routes} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {SettingDashboardComponent} from './setting-dashboard.component';
import {SettingService} from '../setting.service';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';
import {ISetting, Setting} from '../../..';


const auth = new AuthoritiesConstants();

@Injectable({ providedIn: 'root' })
export class SettingResolve implements Resolve<ISetting> {
  constructor(
    private settingService: SettingService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISetting> | Promise<ISetting> | ISetting {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.settingService.findOne(id).pipe(map((settingRes: HttpResponse<Setting>) => settingRes.body));
    }
    return of(new Setting());
  }
}

export const settingDashboardRoute: Routes = [
  {
    path: 'setting-dashboard/setting-create',
    component: SettingDashboardComponent,
    resolve: {
      user: SettingResolve
    },
    data: {
      authorities: [...auth.settingAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  },
  {
    path: 'setting-dashboard/:id/setting-update',
    component: SettingDashboardComponent,
    resolve: {
      user: SettingResolve
    },
    data: {
      authorities: [...auth.settingAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  }
];
