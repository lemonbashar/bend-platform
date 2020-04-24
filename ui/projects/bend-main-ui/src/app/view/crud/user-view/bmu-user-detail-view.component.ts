import { Component, OnInit } from '@angular/core';
import {ConsoleService, TextProcessingService, UserCrudData} from 'bend-core';
import {BendAbstractDetailViewComponent, BendToastService} from 'bend-core-ui';
import {BmuUserCrudService} from '../../../service/bmu-user-crud.service';
import {ActivatedRoute} from '@angular/router';
import {bendUserUiModel} from '../crud-ui-model';

@Component({
  selector: 'main-bmu-user-detail-view',
  templateUrl: '../../bmu-abstract-detail-view.component.html'
})
export class BmuUserDetailViewComponent extends BendAbstractDetailViewComponent<UserCrudData, UserCrudData> implements OnInit {

  constructor(
    activatedRoute: ActivatedRoute,
    crudService: BmuUserCrudService,
    toastService: BendToastService,
    consoleService: ConsoleService,
    textProcessingService: TextProcessingService
  ) {
    super(activatedRoute, crudService, toastService, consoleService, textProcessingService, bendUserUiModel);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
