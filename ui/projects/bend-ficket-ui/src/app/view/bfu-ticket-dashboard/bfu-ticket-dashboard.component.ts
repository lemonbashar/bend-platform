import { Component, OnInit } from '@angular/core';
import {BfuCarService} from '../../service/bfu-car.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {BaseFlexibleCrudViewData, BendStatusText, ConsoleService, PageableDataResponse} from 'bend-core';
import {BendToastService} from 'bend-core-ui';

@Component({
  selector: 'ficket-bfu-ticket-dashboard',
  templateUrl: './bfu-ticket-dashboard.component.html'
})
export class BfuTicketDashboardComponent implements OnInit {
  cars: BaseFlexibleCrudViewData;
  ready: boolean = false;

  constructor(
    private bfuCarService: BfuCarService,
    private consoleService: ConsoleService,
    private toastService: BendToastService
  ) { }

  ngOnInit(): void {
    this.fetch();
  }

  private fetch() {
    this.bfuCarService.carListPublicFlexible({page: 0, size: 200}).subscribe((res: HttpResponse<PageableDataResponse<BaseFlexibleCrudViewData>>) => {
      if (res.ok && res.body.status.toString() === BendStatusText.SUCCESS) {
        this.cars = res.body.data;
        this.ready = true;
      } else this.consoleService.error('Error During Fetch Car List');
    }, (error: HttpErrorResponse) => {
      this.toastService.error('Network Problem');
      this.consoleService.error('Error During Fetch Car List', error);
    });
  }
}
