import {Component, OnInit} from '@angular/core';
import {AuthenticationService, AuthoritiesConstants, LogoutRule, LogoutInfo} from 'bend-core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'main-navbar',
  templateUrl: './bmu-navbar.component.html'
})
export class BmuNavbarComponent implements OnInit {
  items: MenuItem[];
  constructor(
    private authenticationService: AuthenticationService,
    public auth: AuthoritiesConstants
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

  toggleNavbar() {
  }

  logout() {
    this.authenticationService.deleteCookie();
    this.authenticationService.logout(new LogoutInfo());
  }
}
