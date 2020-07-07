import { Observable, Subject } from 'rxjs';
import { BendAccountService } from './bend-account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ConsoleService } from '../../service/console/console.service';
import { AccountInfo, LoginInfo, LogoutInfo } from '../../model/account.model';
import { StorageService } from '../../service/storage/storage-service';
export interface IAuthenticationCallback {
    authenticationState(isAuthenticated: boolean, message?: string, error?: HttpErrorResponse): void;
}
export declare class ConsoleAuthenticationCallback implements IAuthenticationCallback {
    private consoleService;
    constructor(consoleService: ConsoleService);
    authenticationState(isAuthenticated: boolean, message?: string, error?: HttpErrorResponse): void;
}
export interface IAbstractAuthenticationService {
    authenticate(info: LoginInfo, callback?: IAuthenticationCallback): any;
    refreshToken(token: string): any;
    retrieveAccountInfo(): Observable<AccountInfo>;
    isAuthenticated(): boolean;
    currentToken(): string;
    authorities(): string[];
    getAuthenticationState(): Observable<AccountInfo>;
    logout(info: LogoutInfo): any;
    hasAnyAuthority(authorities: string[]): boolean;
}
export declare abstract class AbstractAuthenticationService implements IAbstractAuthenticationService {
    private accountService;
    private consoleService;
    private storageService;
    protected accountInfo: AccountInfo;
    protected authenticationState: Subject<AccountInfo>;
    SUCCESS_MESSAGE: string;
    FAILURE_MESSAGE: string;
    constructor(accountService: BendAccountService, consoleService: ConsoleService, storageService: StorageService);
    authenticate(info: LoginInfo, callback: IAuthenticationCallback): void;
    protected saveToCookie(accountInfo: AccountInfo): void;
    refreshToken(token: string): void;
    retrieveAccountInfo(): Observable<AccountInfo>;
    isAuthenticated(): boolean;
    currentToken(): string;
    authorities(): string[];
    getAuthenticationState(): Observable<AccountInfo>;
    protected deleteCookie(): void;
    logout(info: LogoutInfo): void;
    hasAnyAuthority(authorities: string[]): boolean;
    protected deleteCookieByKey(key: string): void;
    protected saveCookieByKey(key: string, value: string): void;
    protected retrieveCookieByKey(key: string): string;
}
