import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout';
import { FooterComponent } from './layout';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HasAnyAuthorityDirective} from './core';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './core/management/user-management';
import {IsAuthenticatedDirective} from './core';
import {CookieService} from 'ngx-cookie-service';
import {RequestTokenInterceptor} from './core';
import { UserCreateComponent } from './core/management/user-management';
import { UserDetailComponent } from './core/management/user-management';
import { UserProfileComponent } from './core/management/user-management/user-profile/user-profile.component';
import {SimpleDialogComponent} from './core/dialog/simple-dialog';
import { UserDashboardComponent } from './core/management/user-management/user-dashboard/user-dashboard.component';
import { AuthorityDashboardComponent } from './core/management/authority-management/authority-dashboard/authority-dashboard.component';
import { AuthorityCreateComponent } from './core/management/authority-management/authority-create/authority-create.component';
import {SettingDashboardComponent} from './core/management/setting-management/setting-dashboard/setting-dashboard.component';
import { MiscellaneousSetupDashboardComponent } from './core/management/miscellaneous-management/miscellaneous-setup-dashboard/miscellaneous-setup-dashboard.component';
import { MiscellaneousSetupCreateComponent } from './core/management/miscellaneous-management/miscellaneous-setup-create/miscellaneous-setup-create.component';
import {ManagementDashboardComponent} from './core/management/management-dashboard/management-dashboard.component';
import { MiscellaneousSetupDetailComponent } from './core/management/miscellaneous-management/miscellaneous-setup-detail/miscellaneous-setup-detail.component';
import { SettingCreateComponent } from './core/management/setting-management/setting-create/setting-create.component';
import { DashboardViewDirective } from './core/view/directive/dashboard-view.directive';

const LAYOUT_COMPONENT = [
  NavbarComponent,
  FooterComponent,
  DashboardComponent
];

const DIRECTIVE_COMPONENT = [
  HasAnyAuthorityDirective,
  IsAuthenticatedDirective
];

const DIALOG_COMPONENT = [SimpleDialogComponent];
const BASE_COMPONENT = [
  LoginComponent,
  UserCreateComponent,
  SettingDashboardComponent,
  ManagementDashboardComponent,
  UserDetailComponent,
  UserProfileComponent,
  UserDashboardComponent,
  AuthorityDashboardComponent
];

const CORE_COMPONENT = [...LAYOUT_COMPONENT, ...DIRECTIVE_COMPONENT, ...BASE_COMPONENT, ...DIALOG_COMPONENT];

@NgModule({
  declarations: [
    AppComponent,
    ...CORE_COMPONENT,
    AuthorityCreateComponent,
    MiscellaneousSetupDashboardComponent,
    MiscellaneousSetupCreateComponent,
    MiscellaneousSetupDetailComponent,
    SettingCreateComponent,
    DashboardViewDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
