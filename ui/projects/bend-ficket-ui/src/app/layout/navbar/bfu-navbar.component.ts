import {Component, OnInit} from '@angular/core';
import {
  AuthoritiesConstants,
  BendAuthenticationService,
  LogoutInfo
} from 'bend-core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {BendBaseLangComponent, BendLoginDialogComponent, BendToastService, LangKeyService} from 'bend-core-ui';
import {NavigationExtras, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ficket-navbar',
  templateUrl: './bfu-navbar.component.html'
})
export class BfuNavbarComponent extends BendBaseLangComponent implements OnInit {
  isNavbarCollapsed: boolean;
  private dialogRef: DynamicDialogRef;
  public isAccountDropdownCollapsed: boolean;
  isLangDropdownCollapsed: boolean;
  constructor(
    private authenticationService: BendAuthenticationService,
    public auth: AuthoritiesConstants,
    private dialogService: DialogService,
    private bendToastService: BendToastService,
    private route: Router,
    translate: TranslateService,
    langKeyService: LangKeyService
  ) { super(translate, langKeyService); }

  ngOnInit() {
    super.ngOnInit();
    this.collapseAll();
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  login() {
    if (this.dialogRef != null) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialogService.open(BendLoginDialogComponent, {header: 'Login to Bend-Platform', width: '60%', closeOnEscape: false, closable: false, dismissableMask: false});
  }

  logout() {
    this.authenticationService.logout(new LogoutInfo());
    this.bendToastService.infoBottomCenter('Logged Out');
  }

  toggleAccountDropdown() {
    this.isAccountDropdownCollapsed = ! this.isAccountDropdownCollapsed;
  }

  go(routerLink: string[], extras?: NavigationExtras) {
    this.collapseAll();
    this.route.navigate(routerLink, extras);
  }

  private collapseAll(): void {
    this.isNavbarCollapsed = true;
    this.isAccountDropdownCollapsed = true;
    this.isLangDropdownCollapsed = true;
  }

  language(langKey: string) {
    this.collapseAll();
    this.langKeyService.activeKey(langKey);
    location.reload();
  }

  toggleLangDropdown() {
    this.isLangDropdownCollapsed = !this.isLangDropdownCollapsed;
  }
}
