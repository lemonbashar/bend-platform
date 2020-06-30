import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';

import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BendCoreModule} from 'bend-core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import {BendCoreUiModule} from 'bend-core-ui';
import {ToastModule} from 'primeng/toast';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {BfuDashboardComponent} from './layout/dashboard/bfu-dashboard.component';
import {BfuFooterComponent} from './layout/footer/bfu-footer.component';
import {BfuNavbarComponent} from './layout/navbar/bfu-navbar.component';
import {BfuTicketDashboardComponent} from './view/bfu-ticket-dashboard/bfu-ticket-dashboard.component';
import {BfuSeatExtractComponent} from './view/seat/bfu-seat-extract/bfu-seat-extract.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}

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
const VIEW_COMPONENTS = [BfuTicketDashboardComponent, BfuSeatExtractComponent];

const APP_MAIN_COMPONENT = [AppComponent];
const LAYOUT_COMPONENT = [
  BfuDashboardComponent,
  BfuFooterComponent,
  BfuNavbarComponent
];

const ALL_COMPONENTS = [...APP_MAIN_COMPONENT, ...LAYOUT_COMPONENT, ...VIEW_COMPONENTS];

@NgModule({
  declarations: [
    ...ALL_COMPONENTS
  ],
  imports: [
    ...THIRD_PARTIES_MODULE,
    ...INTERNAL_MODULE,
    ...LIBRARY_MODULE,
    ,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    )
  ],
  providers: [DialogService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
