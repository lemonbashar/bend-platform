import {TranslateService} from '@ngx-translate/core';
import {OnInit} from '@angular/core';
import {BendBaseComponent} from './bend-base.component';
import {LangKeyService} from '../service/lang-key-service';

export class BendBaseLangComponent extends BendBaseComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    public langKeyService: LangKeyService
  ) { super();  }

  ngOnInit(): void {
    super.prepareTranslate(this.translate, this.langKeyService);
  }
}
