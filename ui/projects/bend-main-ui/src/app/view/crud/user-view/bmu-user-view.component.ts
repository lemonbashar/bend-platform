import { Component, OnInit } from '@angular/core';
import {AppUtilService, BendFlexibleCompilerService, ConsoleService, UserCrudData} from 'bend-core';
import {BendAbstractListViewComponent, BendToastService} from 'bend-core-ui';
import {BmuUserCrudService} from '../../../service/bmu-user-crud.service';
import {bendUserUiModel} from './user-view-model';

@Component({
  selector: 'main-profile-dashboard',
  templateUrl: '../../bmu-abstract-list-view.component.html'
})
export class BmuUserViewComponent extends BendAbstractListViewComponent<UserCrudData, UserCrudData> implements OnInit {

  constructor(
    crudService: BmuUserCrudService,
    toastService: BendToastService,
    consoleService: ConsoleService,
    appUtilService: AppUtilService,
    compiler: BendFlexibleCompilerService
  ) {
    super(crudService, toastService, consoleService, appUtilService, compiler, bendUserUiModel);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
