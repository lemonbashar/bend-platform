import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Routes} from '@angular/router';
import {MiscellaneousSetupCreateComponent} from '../miscellaneous-setup-create/miscellaneous-setup-create.component';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {MiscellaneousSetupService} from '../miscellaneous-setup.service';
import {AuthoritiesConstants, RouterActivateInterceptor} from 'bend-core';
import {IMiscellaneousSetup, MiscellaneousSetup} from '../../..';

const auth = new AuthoritiesConstants();

@Injectable({ providedIn: 'root' })
export class MiscellaneousSetupResolve implements Resolve<IMiscellaneousSetup> {
  constructor(
    private miscellaneousSetupService: MiscellaneousSetupService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMiscellaneousSetup> | Promise<IMiscellaneousSetup> | IMiscellaneousSetup {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.miscellaneousSetupService.findOne(id).pipe(map((miscellaneousSetupRes: HttpResponse<MiscellaneousSetup>) => miscellaneousSetupRes.body));
    }
    return of(new MiscellaneousSetup());
  }
}

export const miscellaneousSetupDashboardRoute: Routes = [
  {
    path: 'miscellaneous-setup-dashboard/miscellaneous-setup-create',
    component: MiscellaneousSetupCreateComponent,
    resolve: {
      miscellaneousSetup: MiscellaneousSetupResolve
    },
    data: {
      authorities: [...auth.settingAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  },
  {
    path: 'miscellaneous-setup-dashboard/:id/miscellaneous-setup-update',
    component: MiscellaneousSetupCreateComponent,
    resolve: {
      miscellaneousSetup: MiscellaneousSetupResolve
    },
    data: {
      authorities: [...auth.settingAdmin()]
    },
    canActivate: [RouterActivateInterceptor]
  }
];
