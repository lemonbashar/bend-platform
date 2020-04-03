export class AccountInfo {
  constructor(
    public username?: string,
    public authenticated?: boolean,
    public authorities?: string[],
    public token?: string,
    public tokenLiveTime?: number
  ) {
  }
}

export class LoginInfo {
  username?: string;
  rememberMe?: boolean;
  password?: string;
}

export enum LogoutRule {
  ALL_SESSION,
  CURRENT_SESSION,
  RATHER_THAN_CURRENT_SESSION,
  RATHER_THAN_CURRENT_IP,
  CURRENT_IP
}

export class LogoutInfo {
  public token?: string;
  public logoutRule?: LogoutRule;
}
