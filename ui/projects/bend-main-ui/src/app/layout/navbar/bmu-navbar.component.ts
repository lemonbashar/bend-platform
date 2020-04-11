import {Component, OnInit} from '@angular/core';
import {AuthoritiesConstants, BendAuthenticationService, LogoutInfo} from 'bend-core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {BendLoginDialogComponent, BendToastService} from 'bend-core-ui';

@Component({
  selector: 'main-navbar',
  templateUrl: './bmu-navbar.component.html'
})
export class BmuNavbarComponent implements OnInit {
  isNavbarCollapsed: boolean;
  private dialogRef: DynamicDialogRef;
  public isAccountDropdownCollapsed: boolean;
  constructor(
    private authenticationService: BendAuthenticationService,
    public auth: AuthoritiesConstants,
    private dialogService: DialogService,
    private bendToastService: BendToastService
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
    this.bendToastService.info('Logged Out');
  }

  toggleAccountDropdown() {
    this.isAccountDropdownCollapsed = ! this.isAccountDropdownCollapsed;
  }
}
