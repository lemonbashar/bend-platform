import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from '../auth/authentication-service';

@Directive({
  selector: '[bendHasAnyAuthority]'
})
export class BendHasAnyAuthorityDirective {
  private authorities: string[];

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              private authenticationService: AuthenticationService
  ) {
  }

  @Input()
  set hasAnyAuthority(value: string | string[]) {
    this.authorities = typeof value === 'string' ? [value] : value;
    this.updateView();
    this.authenticationService.getAuthenticationState().subscribe(info => this.updateView());
  }

  private updateView(): void {
    this.viewContainerRef.clear();
    if (this.hasAnyAuthorityCheck() ) { this.viewContainerRef.createEmbeddedView(this.templateRef); }
  }

  private hasAnyAuthorityCheck(): boolean {
    if (!this.authenticationService.isAuthenticated()) {return false; }
    return this.authenticationService.hasAnyAuthority(this.authorities);
  }
}
