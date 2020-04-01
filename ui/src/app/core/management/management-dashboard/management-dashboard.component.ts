import { Component, OnInit } from '@angular/core';
import {AuthoritiesConstants} from 'bend-core';

@Component({
  selector: 'app-setting-dashboard',
  templateUrl: './management-dashboard.component.html'
})
export class ManagementDashboardComponent implements OnInit {

  constructor(
    public auth: AuthoritiesConstants
  ) { }

  ngOnInit() {
  }

}
