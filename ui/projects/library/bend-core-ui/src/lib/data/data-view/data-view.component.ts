import {Component, OnInit} from '@angular/core';
import {httpStatus, BendStatus, DataResponse, BaseCrudData, BaseCrudViewData, BaseData, BaseService, BendToastService, ConsoleService} from 'bend-core';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'bend-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent<CrudViewData extends BaseCrudData, Domain extends BaseData> implements OnInit {
  data: any[];
  crudViewData: BaseCrudViewData[];

  constructor(
    protected crudService: BaseService<CrudViewData, Domain>,
    protected consoleService: ConsoleService,
    protected toastService: BendToastService
  ) { }

  ngOnInit(): void {
    this.fetchAll();
  }

  public fetchAll() {
    this.crudService.fetchAll().subscribe((resp: HttpResponse<DataResponse<BaseCrudViewData[]>>) => {
      if (resp.status === httpStatus.OK && resp.body.status === BendStatus.SUCCESS) {
        this.crudViewData = resp.body.data;
        this.consoleService.message('Data Fetched Successfully');
      } else {
        this.consoleService.message('Problem During Fetch Data');
      }
    }, (error => this.consoleService.error('Error During Fetch Data', error)));
  }
}
