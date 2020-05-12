import { Component, OnInit } from '@angular/core';
import {BfuCarService} from '../../service/bfu-car.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {BaseFlexibleCrudViewData, BendStatusText, ConsoleService, DataResponse, PageableDataResponse} from 'bend-core';
import {BendToastService} from 'bend-core-ui';

@Component({
  selector: 'ficket-bfu-ticket-dashboard',
  templateUrl: './bfu-ticket-dashboard.component.html'
})
export class BfuTicketDashboardComponent implements OnInit {
  cars: BaseFlexibleCrudViewData;
  ready = false;
  seatReady = false;
  uiData: any = {
    carId: 0
  };
  seatStructure: string;

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

  onCarSelectionChange() {
    this.fetchSeatConfig(this.uiData.carId);
  }

  private fetchSeatConfig(carId: number) {
    this.seatReady = false;
    if (carId <= 0) return;
    this.bfuCarService.findSeatStructureFromCar(carId).subscribe((resp: HttpResponse<DataResponse<string>>) => {
      if (resp.ok && resp.body.status.toString() === BendStatusText.SUCCESS) {
        this.seatStructure = resp.body.data;
        this.seatReady = true;
        this.consoleService.successBodyPrint(resp.body);
      } else this.consoleService.error('Error During Fetch Seat Info Data');
    }, (error: HttpErrorResponse) => {
      this.toastService.error('Network Problem');
      this.consoleService.error('Error During Extract Seat info From Car', error);
    });
  }
}
