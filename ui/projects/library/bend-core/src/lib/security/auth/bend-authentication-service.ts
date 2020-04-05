import {Injectable} from '@angular/core';
import {BendAccountService} from './bend-account.service';
import {AbstractAuthenticationService} from './abstract-authentication-service';
import {ConsoleService} from '../../service/console/console.service';

@Injectable({ providedIn: 'root' })
export class BendAuthenticationService extends AbstractAuthenticationService {
  constructor(
    accountService: BendAccountService,
    consoleService: ConsoleService
  ) {
    super(accountService, consoleService);
  }
}
