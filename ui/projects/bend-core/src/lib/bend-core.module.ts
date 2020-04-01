import { NgModule } from '@angular/core';
import {BendHasAnyAuthorityDirective} from './security/directive/bend-has-any-authority.directive';
import {BendIsAuthenticatedDirective} from './security/directive/bend-is-authenticated.directive';

const DIRECTIVE_COMPONENT = [
  BendHasAnyAuthorityDirective,
  BendIsAuthenticatedDirective
];
const CORE_COMPONENT = [ ...DIRECTIVE_COMPONENT];
@NgModule({
  declarations: [...CORE_COMPONENT],
  imports: [
  ],
  exports: [...CORE_COMPONENT]
})
export class BendCoreModule { }
