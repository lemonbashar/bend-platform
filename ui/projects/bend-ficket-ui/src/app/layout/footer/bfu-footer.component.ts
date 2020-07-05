import { Component, OnInit } from '@angular/core';
import {BendBaseLangComponent} from 'bend-core-ui';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from 'bend-core';

@Component({
  selector: 'ficket-footer',
  templateUrl: './bfu-footer.component.html'
})
export class BfuFooterComponent extends BendBaseLangComponent implements OnInit {

  constructor(
    translate: TranslateService,
    storageService: StorageService
  ) { super(translate, storageService); }

  ngOnInit() {
    super.ngOnInit();
  }

}
