import { Component, OnInit } from '@angular/core';
import {BfuCarService} from '../../service/bfu-car.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {BaseFlexibleCrudViewData, PageableDataResponse} from 'bend-core';

@Component({
  selector: 'ficket-bfu-ticket-dashboard',
  templateUrl: './bfu-ticket-dashboard.component.html'
})
export class BfuTicketDashboardComponent implements OnInit {

  constructor(
    private bfuCarService: BfuCarService
  ) { }

  ngOnInit(): void {
    this.fetch();
  }

  private fetch() {
    this.bfuCarService.fetchAllFlexible().subscribe((res: HttpResponse<PageableDataResponse<BaseFlexibleCrudViewData>>) => {
      console.log(res);
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }
}
