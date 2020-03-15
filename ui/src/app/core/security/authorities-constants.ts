import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthoritiesConstants {

  allAdmin(): string[] {
    return [...this.superAdmin(), authorities.ROLE_SETTING_ADMIN, authorities.ROLE_USER_ADMIN];
  }

  superAdmin(): string[] {
    return [authorities.ROLE_ADMIN, authorities.ROLE_SUPER_ADMIN];
  }

  settingAdmin(): string[] {
    return [...this.superAdmin(), authorities.ROLE_SETTING_ADMIN];
  }

  userAdmin(): string[] {
    return [...this.superAdmin(), authorities.ROLE_USER_ADMIN];
  }
}

export const authorities = {
  ROLE_USER: 'ROLE_USER',
  ROLE_ADMIN: 'ROLE_ADMIN',
  ROLE_SUPER_ADMIN: 'ROLE_SUPER_ADMIN',
  ROLE_SETTING_ADMIN: 'ROLE_SETTING_ADMIN',
  ROLE_USER_ADMIN: 'ROLE_USER_ADMIN'
};
