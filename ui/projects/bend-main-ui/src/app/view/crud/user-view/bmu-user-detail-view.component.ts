import { Component, OnInit } from '@angular/core';
import {ConsoleService, TextProcessingService, UserCrudData} from 'bend-core';
import {BendAbstractDetailViewComponent, BendToastService, LangKeyService} from 'bend-core-ui';
import {BmuUserCrudService} from '../../../service/bmu-user-crud.service';
import {ActivatedRoute} from '@angular/router';
import {bendUserUiModel} from '../crud-ui-model';
import {TranslateService} from '@ngx-translate/core';

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
    textProcessingService: TextProcessingService,
    translate: TranslateService,
    langKeyService: LangKeyService
  ) {
    super(activatedRoute, crudService, toastService, consoleService, textProcessingService, bendUserUiModel, translate, langKeyService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
