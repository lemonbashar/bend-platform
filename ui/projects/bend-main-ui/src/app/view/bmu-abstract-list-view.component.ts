import {OnInit} from '@angular/core';
import {
  AppUtilService, BaseCrudData, BaseData,
  BaseFlexibleCrudViewData, BaseService, BendFlexibleCompilerService,
  BendStatus,
  BendStatusText,
  ConsoleService,
  DataResponse,
  FieldDefinition,
  FlexibleIndex,
  httpStatus,
  PageableDataResponse
} from 'bend-core';
import {BendToastService} from 'bend-core-ui';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

export class BmuAbstractListViewComponent<R extends BaseCrudData, Domain extends BaseData> implements OnInit {
  crudData: PageableDataResponse<BaseFlexibleCrudViewData>;
  private SUCCESS = 'Active Status Changed Successfully';
  private FAILED = 'Active Status Change Failed';
  private domainName: string;
  pageSize = 2;
  pageCount = 0;
  load = false;

  constructor(
    private crudService: BaseService<R, Domain>,
    private toastService: BendToastService,
    private consoleService: ConsoleService,
    private appUtilService: AppUtilService,
    private compiler: BendFlexibleCompilerService
  ) { }

  ngOnInit(): void {
    this.crudData = this.emptyData();
    this.fetchAll();
  }

  protected fetchAll() {
    this.crudService.fetchAllFlexible({page: this.pageCount, size: this.pageSize}).subscribe((res: HttpResponse<PageableDataResponse<BaseFlexibleCrudViewData>>) => {
      if (res.status === httpStatus.OK && res.body.status.toString() === BendStatusText.SUCCESS) {
        this.crudData = res.body;
        this.load = true;
      } else {
        this.consoleService.error('Crud Data Fetch Problem');
      }
    }, (error: HttpErrorResponse) => {
      this.consoleService.error('Error Occurred During Crud Data Fetch', error);
    });
  }

  changeActiveStatus(id: number, status: boolean) {
    const fieldDefinition = new FieldDefinition();
    fieldDefinition.domainName = this.domainName;
    fieldDefinition.fieldName = 'active';
    fieldDefinition.value = JSON.stringify(status);
    this.appUtilService.updateAll([fieldDefinition]).subscribe((res: HttpResponse<DataResponse<Map<string, object>>>) => {
      if (res.status === httpStatus.OK && res.body.status.toString() === BendStatusText.SUCCESS) {
        this.toastService.info(this.SUCCESS);
      } else {
        this.toastService.error(this.FAILED);
      }
    }, (error: HttpErrorResponse) => {
      this.toastService.error(this.FAILED);
      this.consoleService.error(this.FAILED, error);
    });
  }

  compile(index: FlexibleIndex, values: any[]): any {
    return this.compiler.compile(index, values);
  }

  prev() {
    this.pageCount --;
    this.reshape();
    this.fetchAll();
  }

  isFirstPage(): boolean {
    return this.pageCount === 0;
  }

  reset() {
    this.pageCount = 0;
    this.fetchAll();
  }

  next() {
    this.pageCount ++;
    this.reshape();
    this.fetchAll();
  }

  isLastPage(): boolean {
    return this.pageCount === (this.crudData.totalPages - 1);
  }

  onPage(event: any) {
    console.log(event);
  }

  protected reshape() {
    if (this.pageCount < 0) {
      this.pageCount = 0;
    } else if (this.pageCount > this.crudData.totalPages) {
      this.pageCount = this.crudData.totalPages;
    }
  }

  protected emptyData(): PageableDataResponse<BaseFlexibleCrudViewData> {
    const data = new BaseFlexibleCrudViewData();
    data.columns = [];
    data.indexes = [];
    data.values = [];
    const d = new PageableDataResponse<BaseFlexibleCrudViewData>();
    d.totalPages = 0;
    d.totalElements = 0;
    d.status = BendStatus.FAILURE;
    d.data = data;
    d.dataTypes = [];
    return d;
  }
}
