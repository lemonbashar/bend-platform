import {Component, OnInit} from '@angular/core';
import {BfuCarService} from '../../service/bfu-car.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {BaseFlexibleCrudViewData, BendStatusText, ConsoleService, DataResponse, FetchResponse, IJoinType, PageableDataResponse, SqlFetchDefinition} from 'bend-core';
import {BendBaseComponent, BendToastService} from 'bend-core-ui';
import {BridgeSqlFetchDefinitionService} from '../../bridge/bridge.sql-fetch-definition.service';

@Component({
  selector: 'ficket-bfu-ticket-dashboard',
  templateUrl: './bfu-ticket-dashboard.component.html'
})
export class BfuTicketDashboardComponent extends BendBaseComponent implements OnInit {
  cars: BaseFlexibleCrudViewData;
  ready = false;
  seatReady = false;
  private fetchDef = {
    rideConfigDef: new SqlFetchDefinition(),
    soldDef: new SqlFetchDefinition(),
    keys: {
      RIDES: 'RIDES',
      SOLD: 'SOLD'
    }
  };
  shifts = [{
    id: 1,
    name: 'Day Shift 06:30'
  },
  {
    id: 2,
    name: 'Night Shift 09:30'
  }];

  uiData: any = {
    carId: 0,
    date: new Date(),
    shift: 1
  };
  seatStructure: string;

  constructor(
    private bfuCarService: BfuCarService,
    private consoleService: ConsoleService,
    private toastService: BendToastService,
    private sqlFetchService: BridgeSqlFetchDefinitionService
  ) {
    super();
    this.initFetchDefinitions();
  }

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
    this.fetchRideConfigs(this.uiData.carId);
  }

  private fetchSeatConfig(carId: number) {
    this.seatReady = false;
    if (carId <= 0) return;
    this.bfuCarService.findSeatStructureFromCar(carId).subscribe((resp: HttpResponse<DataResponse<string>>) => {
      if (resp.ok && resp.body.status.toString() === BendStatusText.SUCCESS) {
        this.seatStructure = resp.body.data;
        this.seatReady = true;
      } else this.consoleService.error('Error During Fetch Seat Info Data');
    }, (error: HttpErrorResponse) => {
      this.toastService.error('Network Problem');
      this.consoleService.error('Error During Extract Seat info From Car', error);
    });
  }

  onShiftSelectionChange() {

  }

  private fetchRideConfigs(carId: number) {

    const sqlFetchDefinitions = [];
    this.fetchDef.rideConfigDef.parameters = [{name: 'carId', value: `SPEL:new java.math.BigInteger(${carId})`}];
    this.fetchDef.soldDef.parameters = this.fetchDef.rideConfigDef.parameters;
    sqlFetchDefinitions.push(this.fetchDef.rideConfigDef);
    this.sqlFetchService.fetch(sqlFetchDefinitions).subscribe((resp: HttpResponse<Map<string, FetchResponse>>) => {
    this.makeSifts(resp.body[this.fetchDef.keys.RIDES]);
    }, (error: HttpErrorResponse) => {
      this.consoleService.error('Error During Sql-Fetch', error);
    });
  }

  private initFetchDefinitions() {
    this.fetchDef.rideConfigDef.domain = 'Car';
    this.fetchDef.rideConfigDef.alias = 'car';
    this.fetchDef.rideConfigDef.condition = 'car.id=:carId';
    this.fetchDef.rideConfigDef.joins = [{dependentAlias: 'car', joinType: IJoinType.INNER_JOIN, relationName: 'carConfig', alias: 'carConfig'}, {dependentAlias: 'carConfig', joinType: IJoinType.INNER_JOIN, relationName: 'rideConfigs', alias: 'ride'}];
    this.fetchDef.rideConfigDef.columns = ['ride.id', 'ride.name', 'ride.description', 'ride.startTime', 'ride.reachTime'];
    this.fetchDef.rideConfigDef.key = this.fetchDef.keys.RIDES;

    this.fetchDef.soldDef = new SqlFetchDefinition();
    this.fetchDef.soldDef.key = this.fetchDef.keys.SOLD;
    this.fetchDef.soldDef.columns = ['ticket.seatNumber'];
    this.fetchDef.soldDef.joins = [{dependentAlias: 'ticket', relationName: 'car', alias: 'car', joinType: IJoinType.INNER_JOIN}];
    this.fetchDef.soldDef.alias = 'ticket';
    this.fetchDef.soldDef.domain = 'Ticket';
    this.fetchDef.soldDef.condition = 'car.id=:carId';
  }

  private makeSifts(fetchResponse: FetchResponse) {
    console.log(fetchResponse.data);
    this.shifts = [];
    for (let i = 0; i < fetchResponse.data.length; i++)
      this.shifts.push({id: Number(fetchResponse.data[i][0]), name: fetchResponse.data[i][1] });
  }
}
