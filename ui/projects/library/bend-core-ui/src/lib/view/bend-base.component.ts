import {RouteUtil} from '../util/route.util';
import {AuthoritiesConstants, BendCoreConstants, StorageService} from 'bend-core';
import {TranslateService} from '@ngx-translate/core';

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

  prepareTranslate(translate: TranslateService, storageService: StorageService) {
    translate.setDefaultLang(this.DEF_LANG_KEY);
    translate.use(storageService.get(BendCoreConstants.cookies.lang.USE_LANG_KEY, this.DEF_LANG_KEY));
  }
}
