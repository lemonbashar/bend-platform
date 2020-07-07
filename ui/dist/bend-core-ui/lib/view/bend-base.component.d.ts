import { AuthoritiesConstants } from 'bend-core';
import { TranslateService } from '@ngx-translate/core';
import { LangKeyService } from "../service/lang-key-service";
export declare class BendBaseComponent {
    authoritiesConstants: AuthoritiesConstants;
    today: Date;
    private DEF_LANG_KEY;
    makeRouteStartFromThis(route: string): string;
    get authorities(): any;
    prepareTranslate(translate: TranslateService, langKeyService: LangKeyService): void;
}
