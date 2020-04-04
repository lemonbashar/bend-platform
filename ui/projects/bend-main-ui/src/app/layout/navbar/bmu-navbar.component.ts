import {Component, OnInit} from '@angular/core';
import {AuthenticationService, AuthoritiesConstants, LogoutInfo} from 'bend-core';
import {MenuItem} from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {BmuLoginDialogComponent} from '../../view/login-dialog/bmu-login-dialog.component';

@Component({
  selector: 'main-navbar',
  templateUrl: './bmu-navbar.component.html',
  providers: [DialogService]
})
export class BmuNavbarComponent implements OnInit {
  items: MenuItem[];
  loginDialogRef: DynamicDialogRef;
  constructor(
    private authenticationService: AuthenticationService,
    public auth: AuthoritiesConstants,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Bend-Platform',
        items: [
          {
            label: 'Ficket-App', /*Ficket Web-App Page*/
            items: [
              {label: 'Ficket-Settings'}, /*Ficket settings mgt from Bend-Main*/
            ]
          },
          {
            label: 'Futel-App', /*Futel Web-App Page*/
            items: [
              {label: 'Futel-Settings'}, /*Ficket settings mgt from Bend-Main*/
            ]
          }
        ]
      }
    ];
  }

  login() {
    this.loginDialogRef = this.dialogService.open(BmuLoginDialogComponent, {header: 'Login to Bend-Platform', width: '60%', closeOnEscape: true, closable: true, dismissableMask: true});
  }

  logout() {
    this.authenticationService.logout(new LogoutInfo());
  }
}
