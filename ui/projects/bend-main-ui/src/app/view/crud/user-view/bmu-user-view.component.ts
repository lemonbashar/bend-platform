import { Component, OnInit } from '@angular/core';
import {BmuAbstractListViewComponent} from '../../bmu-abstract-list-view.component';
import {AppUtilService, BaseService, BendFlexibleCompilerService, ConsoleService, UserCrudData} from 'bend-core';
import {BendToastService} from 'bend-core-ui';
import {BmuUserCrudService} from '../../../service/bmu-user-crud.service';

@Component({
  selector: 'main-profile-dashboard',
  templateUrl: '../../bmu-abstract-list-view.component.html'
})
export class BmuUserViewComponent extends BmuAbstractListViewComponent<UserCrudData, UserCrudData> implements OnInit {

  constructor(
    crudService: BmuUserCrudService,
    toastService: BendToastService,
    consoleService: ConsoleService,
    appUtilService: AppUtilService,
    compiler: BendFlexibleCompilerService
  ) {
    super(crudService, toastService, consoleService, appUtilService, compiler);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
