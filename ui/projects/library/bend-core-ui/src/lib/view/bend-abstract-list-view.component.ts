import {OnInit} from '@angular/core';
import {
  AppUtilService, BaseCrudData, BaseData,
  BaseFlexibleCrudViewData, BaseService, BendFlexibleCompilerService,
  BendStatus,
  BendStatusText,
  ConsoleService,
  FlexibleIndex,
  httpStatus,
  PageableDataResponse, StorageService
} from 'bend-core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {BendToastService} from '../message/bend-toast.service';
import {BendUiModel} from '../ui-model/bend-ui-model';
import {TranslateService} from '@ngx-translate/core';
import {BendBaseComponent} from './bend-base.component';
import {LangKeyService} from '../service/lang-key-service';

export class BendAbstractListViewComponent<R extends BaseCrudData, Domain extends BaseData> extends BendBaseComponent implements OnInit {
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
    private compiler: BendFlexibleCompilerService,
    public uiModel: BendUiModel,
    private translate: TranslateService,
    private langKeyService: LangKeyService
  ) { super(); }

  ngOnInit(): void {
    super.prepareTranslate(this.translate, this.langKeyService);
    this.crudData = this.emptyData();
    this.fetchAll();
  }

  protected fetchAll() {
    this.crudService.fetchAllFlexible({page: this.pageCount, size: this.pageSize}).subscribe((res: HttpResponse<PageableDataResponse<BaseFlexibleCrudViewData>>) => {
      if (res.status === httpStatus.OK && res.body.status.toString() === BendStatusText.SUCCESS) {
        this.crudData = res.body;
        this.crudData.data.columns.push(this.uiModel.tableStructure.actionColumn.title);
        this.load = true;
      } else {
        this.consoleService.error('Crud Data Fetch Problem');
      }
    }, (error: HttpErrorResponse) => {
      this.consoleService.error('Error Occurred During Crud Data Fetch', error);
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
