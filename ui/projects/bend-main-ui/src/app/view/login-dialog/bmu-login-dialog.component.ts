import { Component, OnInit } from '@angular/core';
import {LoginInfo} from 'bend-core';

@Component({
  selector: 'main-login-dialog',
  templateUrl: './bmu-login-dialog.component.html'
})
export class BmuLoginDialogComponent implements OnInit {
  loginInfo: LoginInfo;

  constructor() { }

  ngOnInit(): void {
    this.loginInfo = new LoginInfo();
  }

}
