import { Component, OnInit } from '@angular/core';
import {AuthoritiesConstants} from 'bend-core';

@Component({
  selector: 'ficket-dashboard',
  templateUrl: './bfu-dashboard.component.html'
})
export class BfuDashboardComponent implements OnInit {
  constructor(
    public auth: AuthoritiesConstants
  ) { }

  ngOnInit() {
    const today = new Date();
    today.setMinutes(today.getMinutes() + 30);
  }
}

