import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BendCoreModule} from 'bend-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {BmuDashboardComponent} from './layout/dashboard/bmu-dashboard.component';
import {BmuFooterComponent, BmuNavbarComponent} from './layout';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { BmuLoginDialogComponent } from './view/login-dialog/bmu-login-dialog.component';
import {FormsModule} from '@angular/forms';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';


const PRIME_NG_MODULES = [
  BrowserAnimationsModule,
  MenubarModule,
  InputTextModule,
  ButtonModule,
  CommonModule,
  MenubarModule,
  InputTextModule,
  ButtonModule,
  TabViewModule,
  CodeHighlighterModule,
  DynamicDialogModule,
  DialogModule
];
const THIRD_PARTIES_MODULE = [BrowserModule, HttpClientModule,
  ...PRIME_NG_MODULES,
  FormsModule
];
const INTERNAL_MODULE = [AppRoutingModule];
const LIBRARY_MODULE = [BendCoreModule];

const APP_MAIN_COMPONENT = [AppComponent];
const LAYOUT_COMPONENT = [BmuDashboardComponent, BmuFooterComponent, BmuNavbarComponent];

const ALL_COMPONENTS = [...APP_MAIN_COMPONENT, ...LAYOUT_COMPONENT];

@NgModule({
  declarations: [
    ...ALL_COMPONENTS,
    BmuLoginDialogComponent
  ],
  imports: [
    ...THIRD_PARTIES_MODULE,
    ...INTERNAL_MODULE,
    ...LIBRARY_MODULE
  ],
  providers: [],
  entryComponents: [BmuLoginDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
