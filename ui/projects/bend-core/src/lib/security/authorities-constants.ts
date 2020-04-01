import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthoritiesConstants {

  allAdmin(): string[] {
    return [...this.superAdmin(), authorities.ROLE_SETTINGS_ADMIN, authorities.ROLE_USER_ADMIN];
  }

  superAdmin(): string[] {
    return [authorities.ROLE_ADMIN, authorities.ROLE_SYSTEM_ADMIN];
  }

  settingAdmin(): string[] {
    return [...this.superAdmin(), authorities.ROLE_SETTINGS_ADMIN];
  }

  userAdmin(): string[] {
    return [...this.superAdmin(), authorities.ROLE_USER_ADMIN];
  }
}

export const authorities = {
  ROLE_USER: 'ROLE_USER',
  ROLE_ADMIN: 'ROLE_ADMIN',
  ROLE_SYSTEM_ADMIN: 'ROLE_SYSTEM_ADMIN',
  ROLE_SETTINGS_ADMIN: 'ROLE_SETTINGS_ADMIN',
  ROLE_USER_ADMIN: 'ROLE_USER_ADMIN'
};
