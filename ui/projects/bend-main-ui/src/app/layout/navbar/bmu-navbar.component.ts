import {Component, OnInit} from '@angular/core';
import {BendAuthenticationService, LogoutInfo, StorageService} from 'bend-core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {BendBaseLangComponent, BendLoginDialogComponent, BendToastService} from 'bend-core-ui';
import {NavigationExtras, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'main-navbar',
  templateUrl: './bmu-navbar.component.html'
})
export class BmuNavbarComponent extends BendBaseLangComponent implements OnInit {
  isNavbarCollapsed: boolean;
  private dialogRef: DynamicDialogRef;
  public isAccountDropdownCollapsed: boolean;
  public userRoutes = environment.routes.crud.user_crud;
  constructor(
    private authenticationService: BendAuthenticationService,
    private dialogService: DialogService,
    private bendToastService: BendToastService,
    private route: Router,
    translate: TranslateService,
    storageService: StorageService
  ) { super(translate, storageService); }

  ngOnInit() {
    super.ngOnInit();
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
