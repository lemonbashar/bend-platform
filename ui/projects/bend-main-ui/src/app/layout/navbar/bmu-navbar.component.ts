import {Component, OnInit} from '@angular/core';
import {AuthoritiesConstants, BendAuthenticationService, LogoutInfo} from 'bend-core';
import {MenuItem} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {BendLoginDialogComponent} from 'bend-core-ui';

@Component({
  selector: 'main-navbar',
  templateUrl: './bmu-navbar.component.html'
})
export class BmuNavbarComponent implements OnInit {
  items: MenuItem[];
  constructor(
    private authenticationService: BendAuthenticationService,
    public auth: AuthoritiesConstants,
    private dialogService: DialogService
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
      },
      {
        label: 'Administration',
        items: [
          {
            label: 'User Management',
            routerLink: 'user-mgt'
          }
        ]
      }
    ];
  }

  login() {
    this.dialogService.open(BendLoginDialogComponent, {header: 'Login to Bend-Platform', width: '60%', closeOnEscape: false, closable: false, dismissableMask: false});
  }

  logout() {
    this.authenticationService.logout(new LogoutInfo());
  }
}
