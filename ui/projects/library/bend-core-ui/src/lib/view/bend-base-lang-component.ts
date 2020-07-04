import {TranslateService} from '@ngx-translate/core';
import {OnInit} from '@angular/core';
import {BendBaseComponent} from './bend-base.component';
import {StorageService} from 'bend-core';

export class BendBaseLangComponent extends BendBaseComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    public storageService: StorageService
  ) { super();  }

  ngOnInit(): void {
    super.prepareTranslate(this.translate, this.storageService);
  }
}
