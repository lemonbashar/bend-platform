import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BendCoreModule} from 'bend-core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {BmuDashboardComponent} from './layout/dashboard/bmu-dashboard.component';
import {BmuFooterComponent, BmuNavbarComponent} from './layout';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {FormsModule} from '@angular/forms';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import {BendCoreUiModule} from 'bend-core-ui';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { BmuUserViewComponent } from './view/crud/user-view/bmu-user-view.component';


const PRIME_NG_MODULES = [
  BrowserAnimationsModule,
  CommonModule,
  MenubarModule,
  InputTextModule,
  ButtonModule,
  TabViewModule,
  CodeHighlighterModule,
  DynamicDialogModule,
  DialogModule,
  ToastModule,
  CardModule, TableModule
];
const THIRD_PARTIES_MODULE = [BrowserModule, HttpClientModule,
  ...PRIME_NG_MODULES,
  FormsModule
];
const INTERNAL_MODULE = [AppRoutingModule];
const LIBRARY_MODULE = [BendCoreModule, BendCoreUiModule];

const APP_MAIN_COMPONENT = [AppComponent];
const LAYOUT_COMPONENT = [BmuDashboardComponent, BmuFooterComponent, BmuNavbarComponent];

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
