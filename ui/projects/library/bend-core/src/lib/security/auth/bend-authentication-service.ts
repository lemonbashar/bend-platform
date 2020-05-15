import {Injectable} from '@angular/core';
import {BendAccountService} from './bend-account.service';
import {AbstractAuthenticationService} from './abstract-authentication-service';
import {ConsoleService} from '../../service/console/console.service';
import {StorageService} from '../../service/storage/storage-service';

@Injectable({ providedIn: 'root' })
export class BendAuthenticationService extends AbstractAuthenticationService {
  constructor(
    accountService: BendAccountService,
    consoleService: ConsoleService,
    storageService: StorageService
  ) {
    super(accountService, consoleService, storageService);
  }
}
