import {Component, OnInit} from '@angular/core';
import {AuthenticationService, AuthoritiesConstants, LogoutRule, LogoutInfo} from 'bend-core';
import {MenuItem} from 'primeng/api';
import {environment} from 'bend-core';

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
    console.log('<><><><><><><><><><><><><>');
    console.log(environment.cookies.lifetime.TOKEN_LIFETIME_FOR_REMEMBER_ME);
    console.log('<><><><><><><><><><><><><>');
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
    this.authenticationService.logout(new LogoutInfo());
  }
}
