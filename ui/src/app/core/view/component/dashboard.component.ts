import {OnInit} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {DataResponse, BaseCrudViewData, BaseCrudData, AppUtilService, BaseService, ConsoleService, BaseData} from 'bend-core';

export abstract class DashboardComponent<Crud extends BaseCrudData, IDomain extends BaseData> implements OnInit {
  domains: BaseCrudViewData[];

  protected constructor(
    protected service: BaseService<Crud, IDomain>,
    protected appUtilService: AppUtilService,
    protected dialog: ConsoleService,
    protected domainName: string
  ) { }

  ngOnInit(): void {
    this.fetchAll();
  }

  protected fetchAll() {
    this.service.fetchAll()
      .subscribe((res: HttpResponse<DataResponse<BaseCrudViewData[]>>) => {
        this.domains = res.body.data;
      }, (error: HttpErrorResponse) => {
        this.dialog.message('Error During Fetch');
      });
  }

  revertActiveStatus(domain: IDomain) {
    this.dialog.message('KLJLL');
  }

  delete(domain: IDomain) {
    this.dialog.message('KLJLL');
  }
}
