import {Injectable} from '@angular/core';
import {ConsoleService} from 'bend-core';
import {BendToastService} from '../message/bend-toast.service';

@Injectable({
  providedIn: 'root'
})
export class LangKeyService {
  private LANG_KEY = 'LANG-KEY';
  constructor(
    private consoleService: ConsoleService,
    private bendToastService: BendToastService
  ) {
  }
  activeKey(key: string) {
    if (this.availableKeys().indexOf(key) < 0)
      this.consoleService.error('Theres no language key available for:' + key);
    else {
      localStorage.setItem(this.LANG_KEY, key);
      this.bendToastService.infoBottomCenter('Language ' + key + 'Successfully Changed');
    }
  }

  activatedKey(): string {
    const key = localStorage.getItem(this.LANG_KEY);
    return key == null ? this.availableKeys()[0] : key;
  }

  availableKeys(): string[] {
    return ['en', 'bn'];
  }
}
