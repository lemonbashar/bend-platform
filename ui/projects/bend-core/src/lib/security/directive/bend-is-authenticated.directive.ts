import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from '../auth/authentication-service';

/*If Passed Empty or YES Tag that means it check for authenticated*/
/*If Passed NO Tag that means it check for not authenticated*/
/*ALL OTHER TAG ARE MENTIONED AS YES TAG*/

@Directive({
  selector: '[bendIsAuthenticated]'
})
export class BendIsAuthenticatedDirective {
  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              private authenticationService: AuthenticationService
  ) {
  }

  @Input()
  set bendIsAuthenticated(value: string) {
    this.updateView(value);
    this.authenticationService.getAuthenticationState().subscribe(info => this.updateView(value));
  }

  private updateView(value: string): void {
    this.viewContainerRef.clear();
    if (this.isAuthenticatedCheck(value) ) { this.viewContainerRef.createEmbeddedView(this.templateRef); }
  }

  private isAuthenticatedCheck(value: string): boolean {
    const out = this.authenticationService.isAuthenticated();
    return value.toLowerCase() === 'no' ? !out : out;
  }

}
