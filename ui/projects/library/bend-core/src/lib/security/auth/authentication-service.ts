import {Injectable} from '@angular/core';
import {AccountService} from './account.service';
import {ConsoleService} from '../../service/console/console.service';
import {BendToastService} from '../../service/message/bend-toast.service';
import {AbstractAuthenticationService} from './abstract-authentication-service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends AbstractAuthenticationService {
  constructor(
    accountService: AccountService,
    consoleService: ConsoleService,
    toastService: BendToastService
  ) {
    super(accountService, consoleService, toastService);
  }
}
