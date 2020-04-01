import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BendCoreComponent} from './bend-core.component';
import {CommonModule} from '@angular/common';
import {RequestTokenInterceptor} from './security/http/interceptor/request-token-interceptor';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BendHasAnyAuthorityDirective} from './security/directive/bend-has-any-authority.directive';
import {BendIsAuthenticatedDirective} from './security/directive/bend-is-authenticated.directive';

const DIRECTIVES = [BendHasAnyAuthorityDirective, BendIsAuthenticatedDirective];

@NgModule({
  declarations: [BendCoreComponent, ...DIRECTIVES],
  imports: [CommonModule,
    HttpClientModule, BrowserModule, FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestTokenInterceptor,
      multi: true
    }
  ],
  exports: [BendCoreComponent, ...DIRECTIVES],
  bootstrap: [BendCoreComponent]
})
export class BendCoreModule { }
