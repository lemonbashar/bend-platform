import { Component, OnInit } from '@angular/core';
import {BendBaseLangComponent, LangKeyService} from 'bend-core-ui';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from 'bend-core';

@Component({
  selector: 'ficket-footer',
  templateUrl: './bfu-footer.component.html'
})
export class BfuFooterComponent extends BendBaseLangComponent implements OnInit {

  constructor(
    translate: TranslateService,
    langKeyService: LangKeyService
  ) { super(translate, langKeyService); }

  ngOnInit() {
    super.ngOnInit();
  }

}
