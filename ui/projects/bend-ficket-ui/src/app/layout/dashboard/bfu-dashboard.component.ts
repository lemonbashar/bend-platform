import { Component, OnInit } from '@angular/core';
import {AuthoritiesConstants} from 'bend-core';
import {BendBaseLangComponent, LangKeyService} from 'bend-core-ui';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ficket-dashboard',
  templateUrl: './bfu-dashboard.component.html'
})
export class BfuDashboardComponent extends BendBaseLangComponent implements OnInit {
  constructor(
    public auth: AuthoritiesConstants,
    translate: TranslateService,
    langKeyService: LangKeyService
  ) { super(translate, langKeyService); }

  ngOnInit() {
    super.ngOnInit();
    const today = new Date();
    today.setMinutes(today.getMinutes() + 30);
  }
}

