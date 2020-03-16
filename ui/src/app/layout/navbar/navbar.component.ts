import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/security/auth/authentication-service';
import {AuthoritiesConstants} from '../../core';
import {ILogoutRule, LogoutInfo} from '../../core/model/account.model';

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
    this.authenticationService.logout(new LogoutInfo(null, ILogoutRule.ALL_SESSION));
  }
}
