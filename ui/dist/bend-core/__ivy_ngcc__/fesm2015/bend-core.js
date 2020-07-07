import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ɵɵinject, isDevMode, TemplateRef, ViewContainerRef, Input, Directive, NgModule } from '@angular/core';
import { HttpParams, HttpClient, HttpResponse, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Location, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@angular/router';
class BaseData {
}

class BaseCrudData extends BaseData {
}
class BaseCrudViewData extends BaseData {
}

class UserCrudData extends BaseCrudData {
    constructor(username, email, password, authorities) {
        super();
        this.username = username;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }
}

class AuthorityCrudData extends BaseCrudData {
}

class AccountInfo {
    constructor(username, authenticated, authorities, token, tokenLiveTime) {
        this.username = username;
        this.authenticated = authenticated;
        this.authorities = authorities;
        this.token = token;
        this.tokenLiveTime = tokenLiveTime;
    }
}
class LoginInfo {
}
var LogoutRule;
(function (LogoutRule) {
    LogoutRule[LogoutRule["ALL_SESSION"] = 0] = "ALL_SESSION";
    LogoutRule[LogoutRule["CURRENT_SESSION"] = 1] = "CURRENT_SESSION";
    LogoutRule[LogoutRule["RATHER_THAN_CURRENT_SESSION"] = 2] = "RATHER_THAN_CURRENT_SESSION";
    LogoutRule[LogoutRule["RATHER_THAN_CURRENT_IP"] = 3] = "RATHER_THAN_CURRENT_IP";
    LogoutRule[LogoutRule["CURRENT_IP"] = 4] = "CURRENT_IP";
})(LogoutRule || (LogoutRule = {}));
class LogoutInfo {
}

class BaseFlexibleCrudViewData {
}
class FlexibleIndex {
}
class FlexibleRule {
}
var FlexibleRulePolicy;
(function (FlexibleRulePolicy) {
    FlexibleRulePolicy[FlexibleRulePolicy["CHECKED_BY_NULL"] = 0] = "CHECKED_BY_NULL";
    FlexibleRulePolicy[FlexibleRulePolicy["CHECKED_BY_BOOLEAN"] = 1] = "CHECKED_BY_BOOLEAN";
})(FlexibleRulePolicy || (FlexibleRulePolicy = {}));
const FlexibleRulePolicyTexts = {
    CHECKED_BY_NULL: 'CHECKED_BY_NULL',
    CHECKED_BY_BOOLEAN: 'CHECKED_BY_BOOLEAN'
};
const FlexibleRuleNameTexts = {
    OR: 'OR',
    AND: 'AND',
    BOOL: 'BOOL'
};
const FlexibleDataTypes = {
    STRING: 'STRING',
    DATE: 'DATE'
};

class Page {
    constructor(page, size) {
        this.page = page;
        this.size = size;
    }
    static defaultPage() {
        return new Page(0, 20);
    }
}

var BendStatus;
(function (BendStatus) {
    BendStatus[BendStatus["SUCCESS"] = 0] = "SUCCESS";
    BendStatus[BendStatus["FAILURE"] = 1] = "FAILURE";
    BendStatus[BendStatus["FORBIDDEN"] = 2] = "FORBIDDEN";
})(BendStatus || (BendStatus = {}));
const BendStatusText = {
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
    FORBIDDEN: 'FORBIDDEN'
};

class BendResponse {
}

class DataResponse extends BendResponse {
}
class PageableDataResponse extends DataResponse {
}

class ExtraResponse extends DataResponse {
}

class OnlyExtraResponse extends BendResponse {
}

class FieldDefinition extends BaseData {
}

class DomainDescription extends BaseData {
}

class FieldDescription extends BaseData {
}

var FetchResponseType;
(function (FetchResponseType) {
    FetchResponseType[FetchResponseType["SINGLE"] = 0] = "SINGLE";
    FetchResponseType[FetchResponseType["LIST"] = 1] = "LIST";
    FetchResponseType[FetchResponseType["MAP"] = 2] = "MAP";
})(FetchResponseType || (FetchResponseType = {}));
var FetchResponseDataType;
(function (FetchResponseDataType) {
    FetchResponseDataType[FetchResponseDataType["NUMBER"] = 0] = "NUMBER";
    FetchResponseDataType[FetchResponseDataType["STRING"] = 1] = "STRING";
})(FetchResponseDataType || (FetchResponseDataType = {}));
class FetchResponse {
}

var IJoinType;
(function (IJoinType) {
    IJoinType[IJoinType["INNER_JOIN"] = 0] = "INNER_JOIN";
    IJoinType[IJoinType["LEFT_JOIN"] = 1] = "LEFT_JOIN";
    IJoinType[IJoinType["RIGHT_JOIN"] = 2] = "RIGHT_JOIN";
    IJoinType[IJoinType["LEFT_OUTER_JOIN"] = 3] = "LEFT_OUTER_JOIN";
    IJoinType[IJoinType["RIGHT_OUTER_JOIN"] = 4] = "RIGHT_OUTER_JOIN";
    IJoinType[IJoinType["FULL_JOIN"] = 5] = "FULL_JOIN";
})(IJoinType || (IJoinType = {}));
class SqlJoin {
    constructor(joinType, dependentAlias, relationName, alias) {
        this.joinType = joinType;
        this.dependentAlias = dependentAlias;
        this.relationName = relationName;
        this.alias = alias;
    }
}
class Parameter {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
class FetchDefinition {
    constructor() { }
}
class SqlFetchDefinition extends FetchDefinition {
    constructor() { super(); }
}

const authorities = {
    ROLE_USER: 'ROLE_USER',
    ROLE_ADMIN: 'ROLE_ADMIN',
    ROLE_SYSTEM_ADMIN: 'ROLE_SYSTEM_ADMIN',
    ROLE_SETTINGS_ADMIN: 'ROLE_SETTINGS_ADMIN',
    ROLE_USER_ADMIN: 'ROLE_USER_ADMIN'
};
let AuthoritiesConstants = class AuthoritiesConstants {
    allAdmin() {
        return [...this.superAdmin(), authorities.ROLE_SETTINGS_ADMIN, authorities.ROLE_USER_ADMIN];
    }
    superAdmin() {
        return [authorities.ROLE_ADMIN, authorities.ROLE_SYSTEM_ADMIN];
    }
    settingAdmin() {
        return [...this.superAdmin(), authorities.ROLE_SETTINGS_ADMIN];
    }
    userAdmin() {
        return [...this.superAdmin(), authorities.ROLE_USER_ADMIN];
    }
};
AuthoritiesConstants.ɵfac = function AuthoritiesConstants_Factory(t) { return new (t || AuthoritiesConstants)(); };
AuthoritiesConstants.ɵprov = ɵɵdefineInjectable({ factory: function AuthoritiesConstants_Factory() { return new AuthoritiesConstants(); }, token: AuthoritiesConstants, providedIn: "root" });

const createRequestOption = (req) => {
    let options = new HttpParams();
    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach(val => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};

const commonResource = {
    HOST_URL: 'http://localhost:8788',
    CONTEXT: '/api/bend-main-app',
    FICKET_CONTEXT: '/api/bend-ficket-app'
};
const BendCoreConstants = {
    production: true,
    API_URL: commonResource.HOST_URL + commonResource.CONTEXT,
    DEBUG_ENABLE: true,
    cookies: {
        ACCOUNT_INFO: 'ACCOUNT_INFO',
        TOKEN: 'TOKEN',
        AUTHENTICATION_STATE: 'AUTHENTICATION_STATE',
        AUTHORITIES: 'AUTHORITIES',
        lifetime: {
            TOKEN_LIFETIME: 3600000,
            TOKEN_LIFETIME_FOR_REMEMBER_ME: 7200000
        },
        TOKEN_LIFETIME: 'TOKEN_LIFETIME',
        routingDatabase: {
            REGISTRY_TYPE: 'REGISTRY_TYPE',
            REGISTRY_VALUE: 'REGISTRY_VALUE',
            detectionTypes: {
                CLUSTER_KEY: 'CLUSTER_KEY',
                LOCALE_KEY: 'LOCALE_KEY'
            }
        },
        lang: {
            DEFAULT_LANG_KEY: 'DEF-LANG-KEY',
            USE_LANG_KEY: 'USE-LANG-KEY'
        }
    },
    jwt: {
        JSON_WEB_TOKEN: 'Json-Web-Token',
        REFRESHED_JSON_WEB_TOKEN: 'Refreshed-Json-Web-Token'
    },
    neighbourBaseUrls: {
        BEND_MAIN_APP: commonResource.HOST_URL + commonResource.CONTEXT,
        BEND_FICKET_APP: commonResource.HOST_URL + commonResource.FICKET_CONTEXT
    }
};

class AbstractBaseService {
    constructor(BASE_URL, http, BASE_API_URL) {
        this.BASE_URL = BASE_URL;
        this.http = http;
        this.BASE_API_URL = BASE_API_URL;
        if (this.BASE_API_URL == null || this.BASE_API_URL.length < 1) {
            this.BASE_API_URL = BendCoreConstants.API_URL;
        }
        this.PRIVATE_URL = this.BASE_API_URL + '/private' + this.BASE_URL;
        this.PRIVATE_ADMIN_URL = this.BASE_API_URL + '/private/admin' + this.BASE_URL;
        this.PUBLIC_URL = this.BASE_API_URL + '/public' + this.BASE_URL;
        this.ACTUAL_URL = this.BASE_API_URL + this.BASE_URL;
        this.DEFAULT_URL = this.PRIVATE_URL;
    }
}
class BaseService extends AbstractBaseService {
    constructor(BASE_URL, http, BASE_API_URL = BendCoreConstants.API_URL) { super(BASE_URL, http, BASE_API_URL); }
    save(baseData) {
        return this.http.post(this.DEFAULT_URL, baseData, { observe: 'response' });
    }
    update(baseData) {
        return this.http.put(this.DEFAULT_URL, baseData, { observe: 'response' });
    }
    fetchAll(page) {
        const options = createRequestOption(page);
        return this.http.get(this.DEFAULT_URL, { params: options, observe: 'response' });
    }
    fetchAllFlexible(page) {
        const options = createRequestOption(page);
        return this.http.get(`${this.DEFAULT_URL}/flexible`, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.DEFAULT_URL}/${id}`, { observe: 'response' });
    }
    findOne(id) {
        return this.http.get(`${this.DEFAULT_URL}/${id}`, { observe: 'response' });
    }
}
class BaseFetchService extends AbstractBaseService {
    constructor(BASE_URL, http, BASE_API_URL) { super(BASE_URL, http, BASE_API_URL); }
    fetch(inputs) {
        return this.http.post(this.DEFAULT_URL, inputs, { observe: 'response' });
    }
}

let BendAccountService = class BendAccountService extends BaseService {
    constructor(http) {
        super('/account', http);
    }
    /*Cause Here we need to request on public url*/
    save(user) {
        return this.http.post(this.PUBLIC_URL, user, { observe: 'response' });
    }
    login(info) {
        return this.http.post(this.PUBLIC_URL + '/login', info, { observe: 'response' });
    }
    accountInfo() {
        return this.http.get(this.PRIVATE_URL + '/current-account', { observe: 'response' });
    }
};
BendAccountService.ɵfac = function BendAccountService_Factory(t) { return new (t || BendAccountService)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient)); };
BendAccountService.ctorParameters = () => [
    { type: HttpClient }
];
BendAccountService.ɵprov = ɵɵdefineInjectable({ factory: function BendAccountService_Factory() { return new BendAccountService(ɵɵinject(HttpClient)); }, token: BendAccountService, providedIn: "root" });

const httpStatus = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    CHECKPOINT: 103,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    ALREADY_REPORTED: 208,
    IM_USED: 226,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    MOVED_TEMPORARILY: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    REQUEST_ENTITY_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    REQUEST_URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    I_AM_A_TEAPOT: 418,
    INSUFFICIENT_SPACE_ON_RESOURCE: 419,
    METHOD_FAILURE: 420,
    DESTINATION_LOCKED: 421,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    UPGRADE_REQUIRED: 426,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    BANDWIDTH_LIMIT_EXCEEDED: 509,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};

class ConsoleAuthenticationCallback {
    constructor(consoleService) {
        this.consoleService = consoleService;
    }
    authenticationState(isAuthenticated, message, error) {
        if (error == null) {
            this.consoleService.message(message);
        }
        else {
            this.consoleService.error(message, error);
        }
    }
}
class AbstractAuthenticationService {
    constructor(accountService, consoleService, storageService) {
        this.accountService = accountService;
        this.consoleService = consoleService;
        this.storageService = storageService;
        this.authenticationState = new Subject();
        this.SUCCESS_MESSAGE = 'Authenticated Successfully';
        this.FAILURE_MESSAGE = 'Error Occurred During Authentication';
    }
    authenticate(info, callback) {
        if (callback == null) {
            callback = new ConsoleAuthenticationCallback(this.consoleService);
        }
        this.accountService.login(info)
            .subscribe((res) => {
            if (res.status === httpStatus.OK) {
                this.accountInfo = res.body;
                if (this.accountInfo != null && this.accountInfo.authenticated) {
                    this.saveToCookie(this.accountInfo);
                    this.authenticationState.next(this.accountInfo);
                    callback.authenticationState(true, this.SUCCESS_MESSAGE);
                }
                else {
                    this.authenticationState.next(null);
                    callback.authenticationState(false, this.FAILURE_MESSAGE);
                }
            }
            else {
                this.authenticationState.next(null);
                callback.authenticationState(false, this.FAILURE_MESSAGE);
            }
        }, (res) => {
            this.deleteCookie();
            this.authenticationState.next(null);
            callback.authenticationState(false, this.FAILURE_MESSAGE);
        });
    }
    saveToCookie(accountInfo) {
        this.saveCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE, JSON.stringify(accountInfo.authenticated));
        this.saveCookieByKey(BendCoreConstants.cookies.TOKEN, accountInfo.token);
        this.saveCookieByKey(BendCoreConstants.cookies.AUTHORITIES, JSON.stringify(accountInfo.authorities));
        accountInfo.token = null;
        accountInfo.authorities = [];
        this.saveCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO, JSON.stringify(accountInfo));
    }
    refreshToken(token) {
        this.deleteCookieByKey(BendCoreConstants.cookies.TOKEN);
        this.saveCookieByKey(BendCoreConstants.cookies.TOKEN, token);
    }
    retrieveAccountInfo() {
        const cookie = this.retrieveCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO);
        if (cookie == null || cookie.length < 1) {
            this.accountService.accountInfo().subscribe((resp) => {
                if (resp.status === httpStatus.OK) {
                    const accInfo = resp.body;
                    this.saveToCookie(accInfo);
                    const sub = new Subject();
                    sub.next(accInfo);
                    return sub.asObservable();
                }
                else {
                    this.consoleService.error('No Account Info Found');
                }
            }, (err) => {
                this.consoleService.error('Error Occurred During Account Fetch', err);
            });
        }
        this.accountInfo = JSON.parse(cookie);
        const subject = new Subject();
        subject.next(this.accountInfo);
        return subject.asObservable();
    }
    isAuthenticated() {
        const cookie = this.retrieveCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE);
        if (cookie == null || cookie.length < 1) {
            return false;
        }
        return JSON.parse(cookie);
    }
    currentToken() {
        return this.retrieveCookieByKey(BendCoreConstants.cookies.TOKEN);
    }
    authorities() {
        const authorities = this.retrieveCookieByKey(BendCoreConstants.cookies.AUTHORITIES);
        if (authorities == null || authorities.length < 1) {
            return [];
        }
        return JSON.parse(authorities);
    }
    getAuthenticationState() {
        return this.authenticationState.asObservable();
    }
    deleteCookie() {
        this.deleteCookieByKey(BendCoreConstants.cookies.TOKEN);
        this.deleteCookieByKey(BendCoreConstants.cookies.AUTHORITIES);
        this.deleteCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO);
        this.deleteCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE);
    }
    logout(info) {
        this.deleteCookie();
        this.authenticationState.next(null);
        this.consoleService.message('Logout Success of User' + info.logoutRule);
    }
    hasAnyAuthority(authorities) {
        const grantedAuthorities = this.authorities();
        for (const auth of authorities) {
            if (grantedAuthorities.includes(auth)) {
                return true;
            }
        }
        return false;
    }
    deleteCookieByKey(key) {
        this.storageService.remove(key);
    }
    saveCookieByKey(key, value) {
        this.storageService.put(key, value);
    }
    retrieveCookieByKey(key) {
        return this.storageService.get(key);
    }
}

var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["CONSOLE"] = 0] = "CONSOLE";
    LogLevel[LogLevel["TOAST"] = 1] = "TOAST";
    LogLevel[LogLevel["MESSAGE"] = 2] = "MESSAGE";
})(LogLevel || (LogLevel = {}));
let ConsoleService = class ConsoleService {
    constructor(location, route) {
        this.location = location;
        this.route = route;
    }
    message(message, logLevel = LogLevel.CONSOLE) {
        switch (logLevel) {
            case LogLevel.CONSOLE:
                console.log(message);
                return this;
            default:
                console.log(message);
        }
        return this;
    }
    successBodyPrint(body) {
        console.log(body);
        return this;
    }
    log(message, body) {
        console.log(message);
        return this;
    }
    error(errMessage, error) {
        console.error(errMessage);
        if (error) {
            console.error('Error Occurred:' + error.error.message);
        }
        return this;
    }
    backStack() {
        this.location.back();
    }
    goTo(url) {
        this.route.navigate(url);
    }
};
ConsoleService.ɵfac = function ConsoleService_Factory(t) { return new (t || ConsoleService)(ɵngcc0.ɵɵinject(ɵngcc2.Location), ɵngcc0.ɵɵinject(ɵngcc3.Router)); };
ConsoleService.ctorParameters = () => [
    { type: Location },
    { type: Router }
];
ConsoleService.ɵprov = ɵɵdefineInjectable({ factory: function ConsoleService_Factory() { return new ConsoleService(ɵɵinject(Location), ɵɵinject(Router)); }, token: ConsoleService, providedIn: "root" });

let StorageService = class StorageService {
    put(key, value) {
        localStorage.setItem(key, value);
        return this;
    }
    removeAll() {
        localStorage.clear();
        return this;
    }
    get(key, valueIfMissing) {
        const value = localStorage.getItem(key);
        if (value === undefined || value === null)
            return valueIfMissing;
        return value;
    }
    remove(key) {
        localStorage.removeItem(key);
        return this;
    }
};
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = ɵɵdefineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });

let BendAuthenticationService = class BendAuthenticationService extends AbstractAuthenticationService {
    constructor(accountService, consoleService, storageService) {
        super(accountService, consoleService, storageService);
    }
};
BendAuthenticationService.ɵfac = function BendAuthenticationService_Factory(t) { return new (t || BendAuthenticationService)(ɵngcc0.ɵɵinject(BendAccountService), ɵngcc0.ɵɵinject(ConsoleService), ɵngcc0.ɵɵinject(StorageService)); };
BendAuthenticationService.ctorParameters = () => [
    { type: BendAccountService },
    { type: ConsoleService },
    { type: StorageService }
];
BendAuthenticationService.ɵprov = ɵɵdefineInjectable({ factory: function BendAuthenticationService_Factory() { return new BendAuthenticationService(ɵɵinject(BendAccountService), ɵɵinject(ConsoleService), ɵɵinject(StorageService)); }, token: BendAuthenticationService, providedIn: "root" });

let RouterActivateInterceptor = class RouterActivateInterceptor {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const authorities = route.data.authorities;
        if (authorities == null || authorities.length <= 0) {
            return Promise.resolve(this.authenticationService.isAuthenticated());
        }
        else {
            return this.checkLogin(authorities, state.url);
        }
    }
    checkLogin(authorities, url) {
        return Promise.resolve(this.checkInternally(authorities, url));
    }
    checkInternally(authorities, url) {
        const authorize = this.authenticationService.hasAnyAuthority(authorities);
        if (!authorize) {
            if (isDevMode()) {
                console.error('User doesn\'t have any of required authorities: ' + authorities);
            }
            else {
                this.router.navigate(['accessdenied']);
            }
        }
        return authorize;
    }
};
RouterActivateInterceptor.ɵfac = function RouterActivateInterceptor_Factory(t) { return new (t || RouterActivateInterceptor)(ɵngcc0.ɵɵinject(ɵngcc3.Router), ɵngcc0.ɵɵinject(BendAuthenticationService)); };
RouterActivateInterceptor.ctorParameters = () => [
    { type: Router },
    { type: BendAuthenticationService }
];
RouterActivateInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function RouterActivateInterceptor_Factory() { return new RouterActivateInterceptor(ɵɵinject(Router), ɵɵinject(BendAuthenticationService)); }, token: RouterActivateInterceptor, providedIn: "root" });

let RequestTokenInterceptor = class RequestTokenInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(req, next) {
        if (this.authenticationService.isAuthenticated()) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authenticationService.currentToken()}`
                }
            });
        }
        return next.handle(req).pipe(tap(evt => {
            if (evt instanceof HttpResponse) {
                const JWT_TOKEN = evt.headers.get(BendCoreConstants.jwt.REFRESHED_JSON_WEB_TOKEN);
                if (JWT_TOKEN != null) {
                    this.authenticationService.refreshToken(JWT_TOKEN);
                }
            }
        }));
    }
};
RequestTokenInterceptor.ɵfac = function RequestTokenInterceptor_Factory(t) { return new (t || RequestTokenInterceptor)(ɵngcc0.ɵɵinject(BendAuthenticationService)); };
RequestTokenInterceptor.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: RequestTokenInterceptor, factory: RequestTokenInterceptor.ɵfac });
RequestTokenInterceptor.ctorParameters = () => [
    { type: BendAuthenticationService }
];

/*If Passed Empty or YES Tag that means it check for authenticated*/
/*If Passed NO Tag that means it check for not authenticated*/
/*ALL OTHER TAG ARE MENTIONED AS YES TAG*/
let BendIsAuthenticatedDirective = class BendIsAuthenticatedDirective {
    constructor(templateRef, viewContainerRef, authenticationService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.authenticationService = authenticationService;
    }
    set bendIsAuthenticated(value) {
        this.updateView(value);
        this.authenticationService.getAuthenticationState().subscribe(info => this.updateView(value));
    }
    updateView(value) {
        this.viewContainerRef.clear();
        if (this.isAuthenticatedCheck(value)) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
    isAuthenticatedCheck(value) {
        const out = this.authenticationService.isAuthenticated();
        return value.toLowerCase() === 'no' ? !out : out;
    }
};
BendIsAuthenticatedDirective.ɵfac = function BendIsAuthenticatedDirective_Factory(t) { return new (t || BendIsAuthenticatedDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(BendAuthenticationService)); };
BendIsAuthenticatedDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BendIsAuthenticatedDirective, selectors: [["", "bendIsAuthenticated", ""]], inputs: { bendIsAuthenticated: "bendIsAuthenticated" } });
BendIsAuthenticatedDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: BendAuthenticationService }
];
__decorate([
    Input()
], BendIsAuthenticatedDirective.prototype, "bendIsAuthenticated", null);

let BendHasAnyAuthorityDirective = class BendHasAnyAuthorityDirective {
    constructor(templateRef, viewContainerRef, authenticationService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.authenticationService = authenticationService;
    }
    set bendHasAnyAuthority(value) {
        this.authorities = typeof value === 'string' ? [value] : value;
        this.updateView();
        this.authenticationService.getAuthenticationState().subscribe(info => this.updateView());
    }
    updateView() {
        this.viewContainerRef.clear();
        if (this.hasAnyAuthorityCheck()) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
    hasAnyAuthorityCheck() {
        if (!this.authenticationService.isAuthenticated()) {
            return false;
        }
        return this.authenticationService.hasAnyAuthority(this.authorities);
    }
};
BendHasAnyAuthorityDirective.ɵfac = function BendHasAnyAuthorityDirective_Factory(t) { return new (t || BendHasAnyAuthorityDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(BendAuthenticationService)); };
BendHasAnyAuthorityDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BendHasAnyAuthorityDirective, selectors: [["", "bendHasAnyAuthority", ""]], inputs: { bendHasAnyAuthority: "bendHasAnyAuthority" } });
BendHasAnyAuthorityDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: BendAuthenticationService }
];
__decorate([
    Input()
], BendHasAnyAuthorityDirective.prototype, "bendHasAnyAuthority", null);

let AppUtilService = class AppUtilService extends AbstractBaseService {
    constructor(http) {
        super('/app-util', http);
    }
    checkExistence(table, field, value) {
        return this.http.get(this.PUBLIC_URL + `/single-field-existence-check/${table}/${field}/${value}`, { observe: 'response' });
    }
    updateAll(fields) {
        return this.http.post(this.PRIVATE_URL + `/field-edit`, fields, { observe: 'response' });
    }
};
AppUtilService.ɵfac = function AppUtilService_Factory(t) { return new (t || AppUtilService)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient)); };
AppUtilService.ctorParameters = () => [
    { type: HttpClient }
];
AppUtilService.ɵprov = ɵɵdefineInjectable({ factory: function AppUtilService_Factory() { return new AppUtilService(ɵɵinject(HttpClient)); }, token: AppUtilService, providedIn: "root" });

let SqlFetchDefinitionService = class SqlFetchDefinitionService extends BaseFetchService {
    constructor(http) {
        super('/sql-fetch', http);
        this.DEFAULT_URL = this.PUBLIC_URL;
    }
};
SqlFetchDefinitionService.ɵfac = function SqlFetchDefinitionService_Factory(t) { return new (t || SqlFetchDefinitionService)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient)); };
SqlFetchDefinitionService.ctorParameters = () => [
    { type: HttpClient }
];
SqlFetchDefinitionService.ɵprov = ɵɵdefineInjectable({ factory: function SqlFetchDefinitionService_Factory() { return new SqlFetchDefinitionService(ɵɵinject(HttpClient)); }, token: SqlFetchDefinitionService, providedIn: "root" });

let TextProcessingService = class TextProcessingService {
    camelCaseToSentence(text) {
        let preparedField = '';
        let isSeparatorFound = false;
        for (let i = 0; i < text.length; i++) {
            const ch = text.charAt(i);
            isSeparatorFound = this.checkSeparator(i, ch, text);
            if (isSeparatorFound) {
                if (i !== 0)
                    preparedField += ' ';
                preparedField += ch.toUpperCase();
            }
            else
                preparedField += ch;
            isSeparatorFound = false;
        }
        return preparedField;
    }
    checkSeparator(indexOfChar, currentChar, text) {
        if (this.isUpperCase(currentChar))
            return true;
        return indexOfChar === 0;
    }
    isUpperCase(currentChar) {
        return currentChar >= 'A' && currentChar <= 'Z';
    }
    isLowerCase(currentChar) {
        return currentChar >= 'a' && currentChar <= 'z';
    }
};
TextProcessingService.ɵfac = function TextProcessingService_Factory(t) { return new (t || TextProcessingService)(); };
TextProcessingService.ɵprov = ɵɵdefineInjectable({ factory: function TextProcessingService_Factory() { return new TextProcessingService(); }, token: TextProcessingService, providedIn: "root" });

class AbstractBendFlexibleCompilerService {
    constructor() {
        this.AND_SEPARATOR = ' - ';
        this.GLOBAL_DEFAULT_VALUE = 'N/A';
    }
    compile(index, values) {
        if (!index.dynamic) {
            return values[index.index];
        }
        else {
            if (index.flexibleRule.name === FlexibleRuleNameTexts.AND) {
                return this.returnFromAnd(index, values);
            }
            else if (index.flexibleRule.name === FlexibleRuleNameTexts.OR) {
                return this.returnFromOr(index, values);
            }
            else if (index.flexibleRule.name === FlexibleRuleNameTexts.BOOL) {
                return this.returnFromBool(index, values);
            }
        }
        return this.GLOBAL_DEFAULT_VALUE;
    }
    valueByDataType(objValue, dataType) {
        if (objValue == null) {
            return this.GLOBAL_DEFAULT_VALUE;
        }
        switch (dataType) {
            case FlexibleDataTypes.STRING:
                return objValue.toString();
        }
    }
    returnFromAnd(index, values) {
        let output = '';
        for (const indexValue of index.flexibleRule.fromIndices) {
            output += this.AND_SEPARATOR + this.valueByDataType(values[indexValue], index.flexibleRule.indicesDataTypes[indexValue]);
        }
        return output;
    }
    returnFromOr(index, values) {
        switch (index.flexibleRule.rulePolicy.toString()) {
            case FlexibleRulePolicyTexts.CHECKED_BY_NULL:
                return this.basedOnNull(index, values);
        }
        return this.GLOBAL_DEFAULT_VALUE;
    }
    returnFromBool(index, values) {
        const indexTop = index.flexibleRule.fromIndices[0];
        if (String(values[indexTop]).toUpperCase() === 'TRUE') {
            return this.valueByDataType(index.flexibleRule.referenceValues[0], this.getByIndex(index.flexibleRule.indicesDataTypes, 0));
        }
        else {
            return this.valueByDataType(index.flexibleRule.referenceValues[1], this.getByIndex(index.flexibleRule.indicesDataTypes, 1));
        }
    }
    getByIndex(indicesDataTypes, index) {
        if (indicesDataTypes == null || indicesDataTypes.length <= index) {
            return FlexibleDataTypes.STRING;
        }
        return indicesDataTypes[index];
    }
    basedOnNull(index, values) {
        for (const indexValue of index.flexibleRule.fromIndices) {
            if (values[indexValue] != null) {
                return this.valueByDataType(values[indexValue], this.getByIndex(index.flexibleRule.indicesDataTypes, indexValue));
            }
        }
        return this.GLOBAL_DEFAULT_VALUE;
    }
}
let BendFlexibleCompilerService = class BendFlexibleCompilerService extends AbstractBendFlexibleCompilerService {
};
BendFlexibleCompilerService.ɵfac = function BendFlexibleCompilerService_Factory(t) { return ɵBendFlexibleCompilerService_BaseFactory(t || BendFlexibleCompilerService); };
BendFlexibleCompilerService.ɵprov = ɵɵdefineInjectable({ factory: function BendFlexibleCompilerService_Factory() { return new BendFlexibleCompilerService(); }, token: BendFlexibleCompilerService, providedIn: "root" });

let RoutingDatabaseInterceptor = class RoutingDatabaseInterceptor {
    constructor(storageService) {
        this.storageService = storageService;
    }
    intercept(req, next) {
        const registryType = this.storageService.get(BendCoreConstants.cookies.routingDatabase.REGISTRY_TYPE);
        const registryValue = this.storageService.get(BendCoreConstants.cookies.routingDatabase.REGISTRY_VALUE);
        if (registryType != null && registryValue != null) {
            req = req.clone({
                setHeaders: {
                    HDR_RGTR_DTN_TP: registryType,
                    HDR_RGTR_DTN_VL: registryValue
                }
            });
        }
        return next.handle(req);
    }
};
RoutingDatabaseInterceptor.ɵfac = function RoutingDatabaseInterceptor_Factory(t) { return new (t || RoutingDatabaseInterceptor)(ɵngcc0.ɵɵinject(StorageService)); };
RoutingDatabaseInterceptor.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: RoutingDatabaseInterceptor, factory: RoutingDatabaseInterceptor.ɵfac });
RoutingDatabaseInterceptor.ctorParameters = () => [
    { type: StorageService }
];

const DIRECTIVES = [BendHasAnyAuthorityDirective, BendIsAuthenticatedDirective];
let BendCoreModule = class BendCoreModule {
};
BendCoreModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BendCoreModule });
BendCoreModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BendCoreModule_Factory(t) { return new (t || BendCoreModule)(); }, providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestTokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RoutingDatabaseInterceptor,
            multi: true
        }
    ], imports: [[CommonModule,
            HttpClientModule, BrowserModule, FormsModule,
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AuthoritiesConstants, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BendAccountService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConsoleService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc2.Location }, { type: ɵngcc3.Router }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StorageService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BendAuthenticationService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: BendAccountService }, { type: ConsoleService }, { type: StorageService }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RouterActivateInterceptor, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc3.Router }, { type: BendAuthenticationService }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RequestTokenInterceptor, [{
        type: Injectable
    }], function () { return [{ type: BendAuthenticationService }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BendIsAuthenticatedDirective, [{
        type: Directive,
        args: [{
                selector: '[bendIsAuthenticated]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.ViewContainerRef }, { type: BendAuthenticationService }]; }, { bendIsAuthenticated: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BendHasAnyAuthorityDirective, [{
        type: Directive,
        args: [{
                selector: '[bendHasAnyAuthority]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.ViewContainerRef }, { type: BendAuthenticationService }]; }, { bendHasAnyAuthority: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AppUtilService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SqlFetchDefinitionService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TextProcessingService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
const ɵBendFlexibleCompilerService_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(BendFlexibleCompilerService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BendFlexibleCompilerService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RoutingDatabaseInterceptor, [{
        type: Injectable
    }], function () { return [{ type: StorageService }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BendCoreModule, { declarations: function () { return [BendHasAnyAuthorityDirective,
        BendIsAuthenticatedDirective]; }, imports: function () { return [CommonModule,
        HttpClientModule, BrowserModule, FormsModule]; }, exports: function () { return [BendHasAnyAuthorityDirective,
        BendIsAuthenticatedDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BendCoreModule, [{
        type: NgModule,
        args: [{
                declarations: [...DIRECTIVES],
                imports: [CommonModule,
                    HttpClientModule, BrowserModule, FormsModule,
                ],
                providers: [
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: RequestTokenInterceptor,
                        multi: true
                    },
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: RoutingDatabaseInterceptor,
                        multi: true
                    }
                ],
                exports: [...DIRECTIVES]
            }]
    }], null, null); })();

/*
 * Public API Surface of bend-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractAuthenticationService, AbstractBaseService, AbstractBendFlexibleCompilerService, AccountInfo, AppUtilService, AuthoritiesConstants, AuthorityCrudData, BaseCrudData, BaseCrudViewData, BaseData, BaseFetchService, BaseFlexibleCrudViewData, BaseService, BendAccountService, BendAuthenticationService, BendCoreConstants, BendCoreModule, BendFlexibleCompilerService, BendHasAnyAuthorityDirective, BendIsAuthenticatedDirective, BendResponse, BendStatus, BendStatusText, ConsoleAuthenticationCallback, ConsoleService, DataResponse, DomainDescription, ExtraResponse, FetchDefinition, FetchResponse, FetchResponseDataType, FetchResponseType, FieldDefinition, FieldDescription, FlexibleDataTypes, FlexibleIndex, FlexibleRule, FlexibleRuleNameTexts, FlexibleRulePolicy, FlexibleRulePolicyTexts, IJoinType, LogLevel, LoginInfo, LogoutInfo, LogoutRule, OnlyExtraResponse, Page, PageableDataResponse, Parameter, RequestTokenInterceptor, RouterActivateInterceptor, SqlFetchDefinition, SqlFetchDefinitionService, SqlJoin, StorageService, TextProcessingService, UserCrudData, authorities, commonResource, createRequestOption, httpStatus, RoutingDatabaseInterceptor as ɵa };

//# sourceMappingURL=bend-core.js.map