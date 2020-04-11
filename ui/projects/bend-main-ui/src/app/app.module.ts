import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';

import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BendCoreModule} from 'bend-core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BmuDashboardComponent} from './layout/dashboard/bmu-dashboard.component';
import {BmuFooterComponent, BmuNavbarComponent} from './layout';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import {BendCoreUiModule} from 'bend-core-ui';
import {ToastModule} from 'primeng/toast';
import {BmuUserViewComponent } from './view/crud/user-view/bmu-user-view.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {BmuSettingDashboardComponent} from './view/dashboard/bmu-setting-dashboard/bmu-setting-dashboard.component';


const PRIME_NG_MODULES = [
  BrowserAnimationsModule,
  CommonModule,
  DynamicDialogModule,
  DialogModule,
  ToastModule,
  ButtonModule,
  InputTextModule
];

const OTHER_MODULES = [NgbCollapseModule];
const THIRD_PARTIES_MODULE = [BrowserModule, HttpClientModule,
  ...PRIME_NG_MODULES,
  ...OTHER_MODULES,
  FormsModule
];
const INTERNAL_MODULE = [AppRoutingModule];
const LIBRARY_MODULE = [BendCoreModule, BendCoreUiModule];

const APP_MAIN_COMPONENT = [AppComponent];
const LAYOUT_COMPONENT = [
  BmuDashboardComponent,
  BmuFooterComponent,
  BmuNavbarComponent,
  BmuSettingDashboardComponent
];

const VIEW_COMPONENT = [BmuUserViewComponent];

const ALL_COMPONENTS = [...APP_MAIN_COMPONENT, ...LAYOUT_COMPONENT, ...VIEW_COMPONENT];

@NgModule({
  declarations: [
    ...ALL_COMPONENTS
  ],
  imports: [
    ...THIRD_PARTIES_MODULE,
    ...INTERNAL_MODULE,
    ...LIBRARY_MODULE
  ],
  providers: [DialogService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
