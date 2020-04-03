export class AccountInfo {
  username?: string;
  authenticated?: boolean;
  authorities?: string[];
  token?: string;
  tokenLiveTime?: number;
}

export class UserInfo {
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
