import { Component, OnInit } from '@angular/core';
import {AuthoritiesConstants} from 'bend-core';

@Component({
  selector: 'main-dashboard',
  templateUrl: './bmu-dashboard.component.html'
})
export class BmuDashboardComponent implements OnInit {
  constructor(
    public auth: AuthoritiesConstants
  ) { }

  ngOnInit() {
    const today = new Date();
    today.setMinutes(today.getMinutes() + 30);
  }

}

