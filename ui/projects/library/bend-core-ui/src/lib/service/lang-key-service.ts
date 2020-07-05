import {Injectable} from '@angular/core';
import {BendCoreConstants, ConsoleService, StorageService} from 'bend-core';
import {BendToastService} from '../message/bend-toast.service';

@Injectable({
  providedIn: 'root'
})
export class LangKeyService {
  private DEF_LANG_KEY = 'en';
  constructor(
    private consoleService: ConsoleService,
    private bendToastService: BendToastService,
    private storageService: StorageService
  ) {
  }
  activeKey(langKey: string) {
    if (this.availableKeys().indexOf(langKey) < 0)
      this.consoleService.error('Theres no language key available for:' + langKey);
    else {
      this.storageService.put(BendCoreConstants.cookies.routingDatabase.REGISTRY_TYPE, BendCoreConstants.cookies.routingDatabase.detectionTypes.LOCALE_KEY);
      this.storageService.put(BendCoreConstants.cookies.routingDatabase.REGISTRY_VALUE, langKey);
      this.storageService.put(BendCoreConstants.cookies.lang.USE_LANG_KEY, langKey);
      this.bendToastService.infoBottomCenter('Language ' + langKey + 'Successfully Changed');
    }
  }

  public activatedKey(): string {
    const key = this.storageService.get(BendCoreConstants.cookies.lang.USE_LANG_KEY, this.DEF_LANG_KEY);
    return key == null ? this.availableKeys()[0] : key;
  }

  availableKeys(): string[] {
    return ['en', 'bn'];
  }
}
