import { NgModule } from '@angular/core';
import {BendHasAnyAuthorityDirective} from './security/directive/bend-has-any-authority.directive';
import {BendIsAuthenticatedDirective} from './security/directive/bend-is-authenticated.directive';
import {HttpClientModule} from '@angular/common/http';
import {BendCoreComponent} from './bend-core.component';
import {CommonModule} from '@angular/common';

const DIRECTIVE_COMPONENT = [
  BendHasAnyAuthorityDirective,
  BendIsAuthenticatedDirective
];
// const CORE_COMPONENT = [ ...DIRECTIVE_COMPONENT];
@NgModule({
  declarations: [BendCoreComponent],
  imports: [CommonModule,
    HttpClientModule
  ]/*,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestTokenInterceptor,
      multi: true
    }
  ]*/,
  exports: [BendCoreComponent]
})
export class BendCoreModule { }
