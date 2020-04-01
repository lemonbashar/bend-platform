export interface IAccountInfo {
  username?: string;
  authenticated?: boolean;
  authorities?: string[];
  token?: string;
  tokenLiveTime?: number;
}

export interface IUserInfo {
  username?: string;
  rememberMe?: boolean;
  password?: string;
}

export enum ILogoutRule {
  ALL_SESSION,
  CURRENT_SESSION,
  RATHER_THAN_CURRENT_SESSION,
  RATHER_THAN_CURRENT_IP,
  CURRENT_IP
}

export interface ILogoutInfo {
  token?: string;
  logoutRule?: ILogoutRule;
}

export class AccountInfo implements IAccountInfo {
  constructor(
    public username?: string,
    public authenticated?: boolean,
    public authorities?: string[],
    public token?: string,
    public tokenLiveTime?: number
  ) {}
}

export class UserInfo implements IUserInfo {
  constructor(
    public username?: string,
    public rememberMe?: boolean,
    public password?: string
  ) {}
}

export class LogoutInfo implements ILogoutInfo {
  constructor(
    public token?: string,
    public logoutRule?: ILogoutRule
  ) {}
}
