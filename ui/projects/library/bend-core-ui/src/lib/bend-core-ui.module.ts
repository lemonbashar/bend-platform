import { NgModule } from '@angular/core';
import {BendCoreModule} from 'bend-core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CommonModule} from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BendLoginDialogComponent} from './dialog/login-dialog/bend-login-dialog.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

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
  ToastModule
];
const THIRD_PARTIES_MODULES = [...PRIME_NG_MODULES, BrowserModule, FormsModule];

const LIBRARY_MODULE = [BendCoreModule];

const COMPONENTS = [BendLoginDialogComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...LIBRARY_MODULE,
    ...THIRD_PARTIES_MODULES
  ],
  providers: [MessageService],
  exports: [],
  entryComponents: [...COMPONENTS]
})
export class BendCoreUiModule { }
