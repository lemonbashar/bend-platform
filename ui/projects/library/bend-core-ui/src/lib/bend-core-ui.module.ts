import { NgModule } from '@angular/core';
import {BendCoreModule} from 'bend-core';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BendLoginDialogComponent} from './dialog/login-dialog/bend-login-dialog.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {HttpClientModule} from '@angular/common/http';

const PRIME_NG_MODULES = [
  DynamicDialogModule,
  DialogModule,
  ToastModule,
  InputTextModule,
  ButtonModule
];
const THIRD_PARTIES_MODULES = [...PRIME_NG_MODULES, BrowserModule, FormsModule];

const LIBRARY_MODULE = [BendCoreModule];

const COMPONENTS = [BendLoginDialogComponent];
const ENTRY_COMPONENTS = [BendLoginDialogComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...LIBRARY_MODULE,
    ...THIRD_PARTIES_MODULES,
    HttpClientModule
  ],
  providers: [MessageService],
  exports: [],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class BendCoreUiModule { }
