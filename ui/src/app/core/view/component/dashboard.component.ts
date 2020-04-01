import {OnInit} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {AppUtilService, BaseService, DialogService, FieldDefinition, httpStatus, IBaseModel} from 'bend-core';

export abstract class DashboardComponent<IDomain extends IBaseModel> implements OnInit {
  domains: IDomain[];

  protected constructor(
    protected service: BaseService<IDomain>,
    protected appUtilService: AppUtilService,
    protected dialog: DialogService,
    protected domainName: string
  ) { }

  ngOnInit(): void {
    this.fetchAll();
  }

  protected fetchAll() {
    this.service.fetchAll()
      .subscribe((res: HttpResponse<IDomain[]>) => {
        this.domains = res.body;
      }, (error: HttpErrorResponse) => {
        this.dialog.message('Error During Fetch');
      });
  }

  revertActiveStatus(domain: IDomain) {
    this.appUtilService.updateAll([new FieldDefinition(domain.id, this.domainName, 'active', String(!domain.active))])
      .subscribe((res: HttpResponse<Map<string, object>>) => {
        if (res.status === httpStatus.OK) {
          domain.active = !domain.active;
        }
      }, (error: HttpErrorResponse) => {
        this.dialog.error('Error-Occurred During Batch Update', error);
      });
  }

  delete(domain: IDomain) {
    this.service.delete(domain.id)
      .subscribe((res: HttpResponse<Map<string, object>>) => {
        if (res.status === httpStatus.OK) {
          this.dialog.message('Delete Success');
          this.domains.splice(this.domains.indexOf(domain), 1);
        } else {
          this.dialog.message('Delete Error');
        }
      }, (error: HttpErrorResponse) => {
        this.dialog.error('Error During Delete user', error);
      });
  }
}
