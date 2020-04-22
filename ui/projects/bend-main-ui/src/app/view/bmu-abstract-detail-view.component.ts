import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BmuUserCrudService} from '../service/bmu-user-crud.service';
import {BendToastService, BendUiModel} from 'bend-core-ui';
import {BaseCrudData, BendStatusText, ConsoleService, DataResponse, UserCrudData} from 'bend-core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {bendUserUiModel} from './crud/user-view/user-view-model';

@Component({
  selector: 'main-abstract-detail-view',
  templateUrl: './bmu-abstract-detail-view.component.html'
})
export class BmuAbstractDetailViewComponent implements OnInit {
  private viewId: number;
  ready;
  crudData: BaseCrudData;
  uiModel: BendUiModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userCrudService: BmuUserCrudService,
    private toastService: BendToastService,
    private consoleService: ConsoleService
  ) { }

  ngOnInit() {
    this.ready = false;
    this.uiModel = bendUserUiModel;
    this.viewId = this.activatedRoute.snapshot.params.id;
    if (this.viewId == null)
      this.toastService.error('Cannot fetch view Data, id param empty');
    else this.fetchData();
  }

  private fetchData() {
    this.userCrudService.findOne(this.viewId).subscribe((res: HttpResponse<DataResponse<UserCrudData>>) => {
      this.response(res);
    }, (error: HttpErrorResponse) => {
      this.error(error);
    });
  }

  private response(res: HttpResponse<DataResponse<UserCrudData>>) {
    if (res.ok && res.body.status.toString() === BendStatusText.SUCCESS) {
      this.consoleService.message('Successfully Fetch Detail View Data');
      this.crudData = res.body.data;
      this.ready = true;
    } else this.toastService.error('Erroer during Detail View data fetch');
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
    return Object.getOwnPropertyDescriptor(baseCrudData, fieldName).value;
  }

  prepareField(text: string): string {
    let preparedField = '';
    let isSeparatorFound = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text.charAt(i);
      isSeparatorFound = this.checkSeparator(i, ch, text);
      if (isSeparatorFound) {
        if (i !== 0) preparedField += ' ';
        preparedField += ch.toUpperCase();
      } else preparedField += ch;

      isSeparatorFound = false;
    }

    return preparedField;
  }

  public checkSeparator(indexOfChar: number, currentChar: string, text: string): boolean {
    if (this.isUpperCase(currentChar))
      return true;

    return indexOfChar === 0;
  }

  public isUpperCase(currentChar: string): boolean {
    return currentChar >= 'A' && currentChar <= 'Z';
  }

  public isLowerCase(currentChar: string): boolean {
    return currentChar >= 'a' && currentChar <= 'z';
  }
}
