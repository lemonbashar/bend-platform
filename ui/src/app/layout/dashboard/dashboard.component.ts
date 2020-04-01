import { Component, OnInit } from '@angular/core';
import {AuthoritiesConstants} from 'bend-core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  constructor(
    public auth: AuthoritiesConstants
  ) { }

  ngOnInit() {
    const today = new Date();
    today.setMinutes(today.getMinutes() + 30);
  }

}

