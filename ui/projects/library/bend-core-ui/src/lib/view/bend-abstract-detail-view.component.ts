import {OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  BaseCrudData,
  BaseData,
  BaseService,
  BendStatusText,
  ConsoleService,
  DataResponse,
  TextProcessingService
} from 'bend-core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {BendToastService} from '../message/bend-toast.service';
import {BendUiModel} from '../ui-model/bend-ui-model';
import {TranslateService} from '@ngx-translate/core';
import {BendBaseComponent} from './bend-base.component';
import {LangKeyService} from '../service/lang-key-service';

export abstract class BendAbstractDetailViewComponent<R extends BaseCrudData, Domain extends BaseData> extends BendBaseComponent implements OnInit {
  private viewId: number;
  ready: boolean;
  crudData: R;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected userCrudService: BaseService<R, Domain>,
    protected toastService: BendToastService,
    protected consoleService: ConsoleService,
    protected textProcessingService: TextProcessingService,
    public uiModel: BendUiModel,
    private translate: TranslateService,
    private langKeyService: LangKeyService
  ) { super(); }

  ngOnInit() {
    super.prepareTranslate(this.translate, this.langKeyService);
    this.ready = false;
    this.viewId = this.activatedRoute.snapshot.params.id;
    if (this.viewId == null)
      this.toastService.error('Cannot fetch view Data, id param empty');
    else this.fetchData();
  }

  private fetchData() {
    this.userCrudService.findOne(this.viewId).subscribe((res: HttpResponse<DataResponse<R>>) => {
      this.response(res);
    }, (error: HttpErrorResponse) => {
      this.error(error);
    });
  }

  private response(res: HttpResponse<DataResponse<R>>) {
    if (res.ok && res.body.status.toString() === BendStatusText.SUCCESS) {
      this.consoleService.message('Successfully Fetch Detail View Data');
      this.crudData = res.body.data;
      this.ready = true;
    } else this.toastService.error('Error during Detail View data fetch');
  }

  private error(error: HttpErrorResponse) {
    this.consoleService.error('Error During Detail View Data Fetch', error);
  }

  public getAllAvailableFields(baseCrudData: BaseCrudData): string[] {
    const availableFields = Object.getOwnPropertyNames(baseCrudData); /*Delete Current Time*/
    let idx = availableFields.indexOf('currentTime');
    availableFields.splice(idx, idx + 1);
    idx = availableFields.indexOf('id');
    availableFields.splice(idx, idx + 1);
    idx = availableFields.indexOf('password');
    availableFields.splice(idx, idx + 1);
    return availableFields;
  }

  public getFieldValue(baseCrudData: BaseCrudData, fieldName: string) {
    const descriptor = Object.getOwnPropertyDescriptor(baseCrudData, fieldName);
    const val = descriptor.value;
    if (val == null) return 'N/A';
    if (fieldName === 'active') return val ? 'Active' : 'Inactive';
    return val;
  }

  prepareField(text: string): string {
    if (text === 'active') return 'Active Status';
    return this.textProcessingService.camelCaseToSentence(text);
  }
}
