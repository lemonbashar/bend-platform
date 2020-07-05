import {RouteUtil} from '../util/route.util';
import {AuthoritiesConstants, BendCoreConstants, StorageService} from 'bend-core';
import {TranslateService} from '@ngx-translate/core';
import {LangKeyService} from "../service/lang-key-service";

export class BendBaseComponent {
  authoritiesConstants = new AuthoritiesConstants();
  today = new Date();
  private DEF_LANG_KEY = 'en';

  makeRouteStartFromThis(route: string): string {
    return RouteUtil.startFromThis(route);
  }

  get authorities(): any {
    return this.authoritiesConstants;
  }

  prepareTranslate(translate: TranslateService, langKeyService: LangKeyService) {
    translate.setDefaultLang(this.DEF_LANG_KEY);
    translate.use(langKeyService.activatedKey());
  }
}
