import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout';
import { FooterComponent } from './layout';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './core/management/user-management';
import { UserCreateComponent } from './core/management/user-management';
import { UserDetailComponent } from './core/management/user-management';
import { UserProfileComponent } from './core/management/user-management/user-profile/user-profile.component';
import {SimpleDialogComponent} from './core/dialog/simple-dialog';
import { UserDashboardComponent } from './core/management/user-management/user-dashboard/user-dashboard.component';
import { AuthorityDashboardComponent } from './core/management/authority-management/authority-dashboard/authority-dashboard.component';
import { AuthorityCreateComponent } from './core/management/authority-management/authority-create/authority-create.component';
import {ManagementDashboardComponent} from './core/management/management-dashboard/management-dashboard.component';
import { DashboardViewDirective } from './core/view/directive/dashboard-view.directive';
import {BendCoreModule} from 'bend-core';
import {AppInfoDashboardComponent} from './core/management/app-info-dashboard/app-info-dashboard.component';
import {DynamicUiExtendedComponent} from './core/view/dynamic-ui/dynamic-ui-extended.component';

const LAYOUT_COMPONENT = [
  NavbarComponent,
  FooterComponent,
  DashboardComponent
];

const DIALOG_COMPONENT = [SimpleDialogComponent];
const BASE_COMPONENT = [
  LoginComponent,
  UserCreateComponent,
  ManagementDashboardComponent,
  AppInfoDashboardComponent,
  UserDetailComponent,
  UserProfileComponent,
  UserDashboardComponent,
  AuthorityDashboardComponent
];

// const DIRECTIVES = [HasAnyAuthorityDirective, IsAuthenticatedDirective];

const CORE_COMPONENT = [...LAYOUT_COMPONENT, ...BASE_COMPONENT, ...DIALOG_COMPONENT];

@NgModule({
  declarations: [
    AppComponent,
    ...CORE_COMPONENT,
    AuthorityCreateComponent,
    DashboardViewDirective, DynamicUiExtendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    HttpClientModule,
    FormsModule,
    BendCoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
