import { Component, OnInit } from '@angular/core';
import {BendBaseLangComponent, LangKeyService} from 'bend-core-ui';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'main-bmu-setting-dashboard',
  templateUrl: './bmu-setting-dashboard.component.html'
})
export class BmuSettingDashboardComponent extends BendBaseLangComponent implements OnInit {

  constructor(
    translate: TranslateService,
    langKeyService: LangKeyService
  ) { super(translate, langKeyService); }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
