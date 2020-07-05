import { Component, OnInit } from '@angular/core';
import {BendBaseLangComponent, LangKeyService} from "bend-core-ui";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'main-footer',
  templateUrl: './bmu-footer.component.html'
})
export class BmuFooterComponent extends BendBaseLangComponent implements OnInit {

  constructor(
    translate: TranslateService,
    langKeyService: LangKeyService
  ) { super(translate, langKeyService); }

  ngOnInit() {
    super.ngOnInit();
  }

}
