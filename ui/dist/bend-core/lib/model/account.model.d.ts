export declare class AccountInfo {
    username?: string;
    authenticated?: boolean;
    authorities?: string[];
    token?: string;
    tokenLiveTime?: number;
    constructor(username?: string, authenticated?: boolean, authorities?: string[], token?: string, tokenLiveTime?: number);
}
export declare class LoginInfo {
    username?: string;
    rememberMe?: boolean;
    password?: string;
}
export declare enum LogoutRule {
    ALL_SESSION = 0,
    CURRENT_SESSION = 1,
    RATHER_THAN_CURRENT_SESSION = 2,
    RATHER_THAN_CURRENT_IP = 3,
    CURRENT_IP = 4
}
export declare class LogoutInfo {
    token?: string;
    logoutRule?: LogoutRule;
}
