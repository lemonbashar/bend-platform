import {Component, OnInit} from '@angular/core';
import {AuthenticationService, AuthoritiesConstants, LogoutRule, LogoutInfo} from 'bend-core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed: boolean;
  constructor(
    private authenticationService: AuthenticationService,
    public auth: AuthoritiesConstants
  ) { }

  ngOnInit() {
    this.isNavbarCollapsed = true;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  logout() {
    this.authenticationService.deleteCookie();
    this.authenticationService.logout(new LogoutInfo());
  }
}
