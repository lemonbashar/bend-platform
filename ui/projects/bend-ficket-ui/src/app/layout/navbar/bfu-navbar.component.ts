import {Component, OnInit} from '@angular/core';
import {AuthoritiesConstants, BendAuthenticationService, LogoutInfo} from 'bend-core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {BendLoginDialogComponent, BendToastService} from 'bend-core-ui';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'ficket-navbar',
  templateUrl: './bfu-navbar.component.html'
})
export class BfuNavbarComponent implements OnInit {
  isNavbarCollapsed: boolean;
  private dialogRef: DynamicDialogRef;
  public isAccountDropdownCollapsed: boolean;
  constructor(
    private authenticationService: BendAuthenticationService,
    public auth: AuthoritiesConstants,
    private dialogService: DialogService,
    private bendToastService: BendToastService,
    private route: Router
  ) { }

  ngOnInit() {
    this.isNavbarCollapsed = true;
    this.isAccountDropdownCollapsed = true;
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
    this.isAccountDropdownCollapsed = true;
    this.isNavbarCollapsed = true;
  }
}
