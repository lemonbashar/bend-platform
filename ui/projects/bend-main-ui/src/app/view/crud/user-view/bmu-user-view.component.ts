import { Component, OnInit } from '@angular/core';
import {AppUtilService, BendFlexibleCompilerService, ConsoleService, StorageService, UserCrudData} from 'bend-core';
import {BendAbstractListViewComponent, BendToastService} from 'bend-core-ui';
import {BmuUserCrudService} from '../../../service/bmu-user-crud.service';
import {bendUserUiModel} from '../crud-ui-model';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'main-bmu-user-view',
  templateUrl: '../../bmu-abstract-list-view.component.html'
})
export class BmuUserViewComponent extends BendAbstractListViewComponent<UserCrudData, UserCrudData> implements OnInit {

  constructor(
    crudService: BmuUserCrudService,
    toastService: BendToastService,
    consoleService: ConsoleService,
    appUtilService: AppUtilService,
    compiler: BendFlexibleCompilerService,
    translate: TranslateService,
    storageService: StorageService
  ) {
    super(crudService, toastService, consoleService, appUtilService, compiler, bendUserUiModel, translate, storageService);
    this.pageSize = 20;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
