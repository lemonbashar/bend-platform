import { Component, OnInit } from '@angular/core';
import {AuthoritiesConstants} from 'bend-core';
import {AppInfoService} from './app-info.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-setting-dashboard',
  templateUrl: './app-info-dashboard.component.html'
})
export class AppInfoDashboardComponent implements OnInit {
  resp: Map<string, string>;

  constructor(
    public auth: AuthoritiesConstants,
    private appInfoService: AppInfoService
  ) { }

  ngOnInit() {
    this.appInfoService.fetchInfo().subscribe((resp: HttpResponse<Map<string, string>>) => {
      this.resp = resp.body;
      console.log(this.resp);
    });
  }

}
