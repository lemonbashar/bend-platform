(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('@angular/common'), require('@angular/router'), require('rxjs/operators'), require('@angular/platform-browser'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('bend-core', ['exports', '@angular/core', '@angular/common/http', 'rxjs', '@angular/common', '@angular/router', 'rxjs/operators', '@angular/platform-browser', '@angular/forms'], factory) :
    (global = global || self, factory(global['bend-core'] = {}, global.ng.core, global.ng.common.http, global.rxjs, global.ng.common, global.ng.router, global.rxjs.operators, global.ng.platformBrowser, global.ng.forms));
}(this, (function (exports, core, http, rxjs, common, router, operators, platformBrowser, forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var BaseData = /** @class */ (function () {
        function BaseData() {
        }
        return BaseData;
    }());

    var BaseCrudData = /** @class */ (function (_super) {
        __extends(BaseCrudData, _super);
        function BaseCrudData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BaseCrudData;
    }(BaseData));
    var BaseCrudViewData = /** @class */ (function (_super) {
        __extends(BaseCrudViewData, _super);
        function BaseCrudViewData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BaseCrudViewData;
    }(BaseData));

    var UserCrudData = /** @class */ (function (_super) {
        __extends(UserCrudData, _super);
        function UserCrudData(username, email, password, authorities) {
            var _this = _super.call(this) || this;
            _this.username = username;
            _this.email = email;
            _this.password = password;
            _this.authorities = authorities;
            return _this;
        }
        return UserCrudData;
    }(BaseCrudData));

    var AuthorityCrudData = /** @class */ (function (_super) {
        __extends(AuthorityCrudData, _super);
        function AuthorityCrudData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AuthorityCrudData;
    }(BaseCrudData));

    var AccountInfo = /** @class */ (function () {
        function AccountInfo(username, authenticated, authorities, token, tokenLiveTime) {
            this.username = username;
            this.authenticated = authenticated;
            this.authorities = authorities;
            this.token = token;
            this.tokenLiveTime = tokenLiveTime;
        }
        return AccountInfo;
    }());
    var LoginInfo = /** @class */ (function () {
        function LoginInfo() {
        }
        return LoginInfo;
    }());

    (function (LogoutRule) {
        LogoutRule[LogoutRule["ALL_SESSION"] = 0] = "ALL_SESSION";
        LogoutRule[LogoutRule["CURRENT_SESSION"] = 1] = "CURRENT_SESSION";
        LogoutRule[LogoutRule["RATHER_THAN_CURRENT_SESSION"] = 2] = "RATHER_THAN_CURRENT_SESSION";
        LogoutRule[LogoutRule["RATHER_THAN_CURRENT_IP"] = 3] = "RATHER_THAN_CURRENT_IP";
        LogoutRule[LogoutRule["CURRENT_IP"] = 4] = "CURRENT_IP";
    })(exports.LogoutRule || (exports.LogoutRule = {}));
    var LogoutInfo = /** @class */ (function () {
        function LogoutInfo() {
        }
        return LogoutInfo;
    }());

    var BaseFlexibleCrudViewData = /** @class */ (function () {
        function BaseFlexibleCrudViewData() {
        }
        return BaseFlexibleCrudViewData;
    }());
    var FlexibleIndex = /** @class */ (function () {
        function FlexibleIndex() {
        }
        return FlexibleIndex;
    }());
    var FlexibleRule = /** @class */ (function () {
        function FlexibleRule() {
        }
        return FlexibleRule;
    }());

    (function (FlexibleRulePolicy) {
        FlexibleRulePolicy[FlexibleRulePolicy["CHECKED_BY_NULL"] = 0] = "CHECKED_BY_NULL";
        FlexibleRulePolicy[FlexibleRulePolicy["CHECKED_BY_BOOLEAN"] = 1] = "CHECKED_BY_BOOLEAN";
    })(exports.FlexibleRulePolicy || (exports.FlexibleRulePolicy = {}));
    var FlexibleRulePolicyTexts = {
        CHECKED_BY_NULL: 'CHECKED_BY_NULL',
        CHECKED_BY_BOOLEAN: 'CHECKED_BY_BOOLEAN'
    };
    var FlexibleRuleNameTexts = {
        OR: 'OR',
        AND: 'AND',
        BOOL: 'BOOL'
    };
    var FlexibleDataTypes = {
        STRING: 'STRING',
        DATE: 'DATE'
    };

    var Page = /** @class */ (function () {
        function Page(page, size) {
            this.page = page;
            this.size = size;
        }
        Page.defaultPage = function () {
            return new Page(0, 20);
        };
        return Page;
    }());


    (function (BendStatus) {
        BendStatus[BendStatus["SUCCESS"] = 0] = "SUCCESS";
        BendStatus[BendStatus["FAILURE"] = 1] = "FAILURE";
        BendStatus[BendStatus["FORBIDDEN"] = 2] = "FORBIDDEN";
    })(exports.BendStatus || (exports.BendStatus = {}));
    var BendStatusText = {
        SUCCESS: 'SUCCESS',
        FAILURE: 'FAILURE',
        FORBIDDEN: 'FORBIDDEN'
    };

    var BendResponse = /** @class */ (function () {
        function BendResponse() {
        }
        return BendResponse;
    }());

    var DataResponse = /** @class */ (function (_super) {
        __extends(DataResponse, _super);
        function DataResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DataResponse;
    }(BendResponse));
    var PageableDataResponse = /** @class */ (function (_super) {
        __extends(PageableDataResponse, _super);
        function PageableDataResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PageableDataResponse;
    }(DataResponse));

    var ExtraResponse = /** @class */ (function (_super) {
        __extends(ExtraResponse, _super);
        function ExtraResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ExtraResponse;
    }(DataResponse));

    var OnlyExtraResponse = /** @class */ (function (_super) {
        __extends(OnlyExtraResponse, _super);
        function OnlyExtraResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return OnlyExtraResponse;
    }(BendResponse));

    var FieldDefinition = /** @class */ (function (_super) {
        __extends(FieldDefinition, _super);
        function FieldDefinition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FieldDefinition;
    }(BaseData));

    var DomainDescription = /** @class */ (function (_super) {
        __extends(DomainDescription, _super);
        function DomainDescription() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DomainDescription;
    }(BaseData));

    var FieldDescription = /** @class */ (function (_super) {
        __extends(FieldDescription, _super);
        function FieldDescription() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FieldDescription;
    }(BaseData));


    (function (FetchResponseType) {
        FetchResponseType[FetchResponseType["SINGLE"] = 0] = "SINGLE";
        FetchResponseType[FetchResponseType["LIST"] = 1] = "LIST";
        FetchResponseType[FetchResponseType["MAP"] = 2] = "MAP";
    })(exports.FetchResponseType || (exports.FetchResponseType = {}));

    (function (FetchResponseDataType) {
        FetchResponseDataType[FetchResponseDataType["NUMBER"] = 0] = "NUMBER";
        FetchResponseDataType[FetchResponseDataType["STRING"] = 1] = "STRING";
    })(exports.FetchResponseDataType || (exports.FetchResponseDataType = {}));
    var FetchResponse = /** @class */ (function () {
        function FetchResponse() {
        }
        return FetchResponse;
    }());


    (function (IJoinType) {
        IJoinType[IJoinType["INNER_JOIN"] = 0] = "INNER_JOIN";
        IJoinType[IJoinType["LEFT_JOIN"] = 1] = "LEFT_JOIN";
        IJoinType[IJoinType["RIGHT_JOIN"] = 2] = "RIGHT_JOIN";
        IJoinType[IJoinType["LEFT_OUTER_JOIN"] = 3] = "LEFT_OUTER_JOIN";
        IJoinType[IJoinType["RIGHT_OUTER_JOIN"] = 4] = "RIGHT_OUTER_JOIN";
        IJoinType[IJoinType["FULL_JOIN"] = 5] = "FULL_JOIN";
    })(exports.IJoinType || (exports.IJoinType = {}));
    var SqlJoin = /** @class */ (function () {
        function SqlJoin(joinType, dependentAlias, relationName, alias) {
            this.joinType = joinType;
            this.dependentAlias = dependentAlias;
            this.relationName = relationName;
            this.alias = alias;
        }
        return SqlJoin;
    }());
    var Parameter = /** @class */ (function () {
        function Parameter(name, value) {
            this.name = name;
            this.value = value;
        }
        return Parameter;
    }());
    var FetchDefinition = /** @class */ (function () {
        function FetchDefinition() {
        }
        return FetchDefinition;
    }());
    var SqlFetchDefinition = /** @class */ (function (_super) {
        __extends(SqlFetchDefinition, _super);
        function SqlFetchDefinition() {
            return _super.call(this) || this;
        }
        return SqlFetchDefinition;
    }(FetchDefinition));

    var authorities = {
        ROLE_USER: 'ROLE_USER',
        ROLE_ADMIN: 'ROLE_ADMIN',
        ROLE_SYSTEM_ADMIN: 'ROLE_SYSTEM_ADMIN',
        ROLE_SETTINGS_ADMIN: 'ROLE_SETTINGS_ADMIN',
        ROLE_USER_ADMIN: 'ROLE_USER_ADMIN'
    };
    var AuthoritiesConstants = /** @class */ (function () {
        function AuthoritiesConstants() {
        }
        AuthoritiesConstants.prototype.allAdmin = function () {
            return __spread(this.superAdmin(), [authorities.ROLE_SETTINGS_ADMIN, authorities.ROLE_USER_ADMIN]);
        };
        AuthoritiesConstants.prototype.superAdmin = function () {
            return [authorities.ROLE_ADMIN, authorities.ROLE_SYSTEM_ADMIN];
        };
        AuthoritiesConstants.prototype.settingAdmin = function () {
            return __spread(this.superAdmin(), [authorities.ROLE_SETTINGS_ADMIN]);
        };
        AuthoritiesConstants.prototype.userAdmin = function () {
            return __spread(this.superAdmin(), [authorities.ROLE_USER_ADMIN]);
        };
        AuthoritiesConstants.ɵprov = core["ɵɵdefineInjectable"]({ factory: function AuthoritiesConstants_Factory() { return new AuthoritiesConstants(); }, token: AuthoritiesConstants, providedIn: "root" });
        AuthoritiesConstants = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], AuthoritiesConstants);
        return AuthoritiesConstants;
    }());

    var createRequestOption = function (req) {
        var options = new http.HttpParams();
        if (req) {
            Object.keys(req).forEach(function (key) {
                if (key !== 'sort') {
                    options = options.set(key, req[key]);
                }
            });
            if (req.sort) {
                req.sort.forEach(function (val) {
                    options = options.append('sort', val);
                });
            }
        }
        return options;
    };

    var commonResource = {
        HOST_URL: 'http://localhost:8788',
        CONTEXT: '/api/bend-main-app',
        FICKET_CONTEXT: '/api/bend-ficket-app'
    };
    var BendCoreConstants = {
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

    var AbstractBaseService = /** @class */ (function () {
        function AbstractBaseService(BASE_URL, http, BASE_API_URL) {
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
        return AbstractBaseService;
    }());
    var BaseService = /** @class */ (function (_super) {
        __extends(BaseService, _super);
        function BaseService(BASE_URL, http, BASE_API_URL) {
            if (BASE_API_URL === void 0) { BASE_API_URL = BendCoreConstants.API_URL; }
            return _super.call(this, BASE_URL, http, BASE_API_URL) || this;
        }
        BaseService.prototype.save = function (baseData) {
            return this.http.post(this.DEFAULT_URL, baseData, { observe: 'response' });
        };
        BaseService.prototype.update = function (baseData) {
            return this.http.put(this.DEFAULT_URL, baseData, { observe: 'response' });
        };
        BaseService.prototype.fetchAll = function (page) {
            var options = createRequestOption(page);
            return this.http.get(this.DEFAULT_URL, { params: options, observe: 'response' });
        };
        BaseService.prototype.fetchAllFlexible = function (page) {
            var options = createRequestOption(page);
            return this.http.get(this.DEFAULT_URL + "/flexible", { params: options, observe: 'response' });
        };
        BaseService.prototype.delete = function (id) {
            return this.http.delete(this.DEFAULT_URL + "/" + id, { observe: 'response' });
        };
        BaseService.prototype.findOne = function (id) {
            return this.http.get(this.DEFAULT_URL + "/" + id, { observe: 'response' });
        };
        return BaseService;
    }(AbstractBaseService));
    var BaseFetchService = /** @class */ (function (_super) {
        __extends(BaseFetchService, _super);
        function BaseFetchService(BASE_URL, http, BASE_API_URL) {
            return _super.call(this, BASE_URL, http, BASE_API_URL) || this;
        }
        BaseFetchService.prototype.fetch = function (inputs) {
            return this.http.post(this.DEFAULT_URL, inputs, { observe: 'response' });
        };
        return BaseFetchService;
    }(AbstractBaseService));

    var BendAccountService = /** @class */ (function (_super) {
        __extends(BendAccountService, _super);
        function BendAccountService(http) {
            return _super.call(this, '/account', http) || this;
        }
        /*Cause Here we need to request on public url*/
        BendAccountService.prototype.save = function (user) {
            return this.http.post(this.PUBLIC_URL, user, { observe: 'response' });
        };
        BendAccountService.prototype.login = function (info) {
            return this.http.post(this.PUBLIC_URL + '/login', info, { observe: 'response' });
        };
        BendAccountService.prototype.accountInfo = function () {
            return this.http.get(this.PRIVATE_URL + '/current-account', { observe: 'response' });
        };
        BendAccountService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        BendAccountService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function BendAccountService_Factory() { return new BendAccountService(core["ɵɵinject"](http.HttpClient)); }, token: BendAccountService, providedIn: "root" });
        BendAccountService = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], BendAccountService);
        return BendAccountService;
    }(BaseService));

    var httpStatus = {
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

    var ConsoleAuthenticationCallback = /** @class */ (function () {
        function ConsoleAuthenticationCallback(consoleService) {
            this.consoleService = consoleService;
        }
        ConsoleAuthenticationCallback.prototype.authenticationState = function (isAuthenticated, message, error) {
            if (error == null) {
                this.consoleService.message(message);
            }
            else {
                this.consoleService.error(message, error);
            }
        };
        return ConsoleAuthenticationCallback;
    }());
    var AbstractAuthenticationService = /** @class */ (function () {
        function AbstractAuthenticationService(accountService, consoleService, storageService) {
            this.accountService = accountService;
            this.consoleService = consoleService;
            this.storageService = storageService;
            this.authenticationState = new rxjs.Subject();
            this.SUCCESS_MESSAGE = 'Authenticated Successfully';
            this.FAILURE_MESSAGE = 'Error Occurred During Authentication';
        }
        AbstractAuthenticationService.prototype.authenticate = function (info, callback) {
            var _this = this;
            if (callback == null) {
                callback = new ConsoleAuthenticationCallback(this.consoleService);
            }
            this.accountService.login(info)
                .subscribe(function (res) {
                if (res.status === httpStatus.OK) {
                    _this.accountInfo = res.body;
                    if (_this.accountInfo != null && _this.accountInfo.authenticated) {
                        _this.saveToCookie(_this.accountInfo);
                        _this.authenticationState.next(_this.accountInfo);
                        callback.authenticationState(true, _this.SUCCESS_MESSAGE);
                    }
                    else {
                        _this.authenticationState.next(null);
                        callback.authenticationState(false, _this.FAILURE_MESSAGE);
                    }
                }
                else {
                    _this.authenticationState.next(null);
                    callback.authenticationState(false, _this.FAILURE_MESSAGE);
                }
            }, function (res) {
                _this.deleteCookie();
                _this.authenticationState.next(null);
                callback.authenticationState(false, _this.FAILURE_MESSAGE);
            });
        };
        AbstractAuthenticationService.prototype.saveToCookie = function (accountInfo) {
            this.saveCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE, JSON.stringify(accountInfo.authenticated));
            this.saveCookieByKey(BendCoreConstants.cookies.TOKEN, accountInfo.token);
            this.saveCookieByKey(BendCoreConstants.cookies.AUTHORITIES, JSON.stringify(accountInfo.authorities));
            accountInfo.token = null;
            accountInfo.authorities = [];
            this.saveCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO, JSON.stringify(accountInfo));
        };
        AbstractAuthenticationService.prototype.refreshToken = function (token) {
            this.deleteCookieByKey(BendCoreConstants.cookies.TOKEN);
            this.saveCookieByKey(BendCoreConstants.cookies.TOKEN, token);
        };
        AbstractAuthenticationService.prototype.retrieveAccountInfo = function () {
            var _this = this;
            var cookie = this.retrieveCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO);
            if (cookie == null || cookie.length < 1) {
                this.accountService.accountInfo().subscribe(function (resp) {
                    if (resp.status === httpStatus.OK) {
                        var accInfo = resp.body;
                        _this.saveToCookie(accInfo);
                        var sub = new rxjs.Subject();
                        sub.next(accInfo);
                        return sub.asObservable();
                    }
                    else {
                        _this.consoleService.error('No Account Info Found');
                    }
                }, function (err) {
                    _this.consoleService.error('Error Occurred During Account Fetch', err);
                });
            }
            this.accountInfo = JSON.parse(cookie);
            var subject = new rxjs.Subject();
            subject.next(this.accountInfo);
            return subject.asObservable();
        };
        AbstractAuthenticationService.prototype.isAuthenticated = function () {
            var cookie = this.retrieveCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE);
            if (cookie == null || cookie.length < 1) {
                return false;
            }
            return JSON.parse(cookie);
        };
        AbstractAuthenticationService.prototype.currentToken = function () {
            return this.retrieveCookieByKey(BendCoreConstants.cookies.TOKEN);
        };
        AbstractAuthenticationService.prototype.authorities = function () {
            var authorities = this.retrieveCookieByKey(BendCoreConstants.cookies.AUTHORITIES);
            if (authorities == null || authorities.length < 1) {
                return [];
            }
            return JSON.parse(authorities);
        };
        AbstractAuthenticationService.prototype.getAuthenticationState = function () {
            return this.authenticationState.asObservable();
        };
        AbstractAuthenticationService.prototype.deleteCookie = function () {
            this.deleteCookieByKey(BendCoreConstants.cookies.TOKEN);
            this.deleteCookieByKey(BendCoreConstants.cookies.AUTHORITIES);
            this.deleteCookieByKey(BendCoreConstants.cookies.ACCOUNT_INFO);
            this.deleteCookieByKey(BendCoreConstants.cookies.AUTHENTICATION_STATE);
        };
        AbstractAuthenticationService.prototype.logout = function (info) {
            this.deleteCookie();
            this.authenticationState.next(null);
            this.consoleService.message('Logout Success of User' + info.logoutRule);
        };
        AbstractAuthenticationService.prototype.hasAnyAuthority = function (authorities) {
            var e_1, _a;
            var grantedAuthorities = this.authorities();
            try {
                for (var authorities_1 = __values(authorities), authorities_1_1 = authorities_1.next(); !authorities_1_1.done; authorities_1_1 = authorities_1.next()) {
                    var auth = authorities_1_1.value;
                    if (grantedAuthorities.includes(auth)) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (authorities_1_1 && !authorities_1_1.done && (_a = authorities_1.return)) _a.call(authorities_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        AbstractAuthenticationService.prototype.deleteCookieByKey = function (key) {
            this.storageService.remove(key);
        };
        AbstractAuthenticationService.prototype.saveCookieByKey = function (key, value) {
            this.storageService.put(key, value);
        };
        AbstractAuthenticationService.prototype.retrieveCookieByKey = function (key) {
            return this.storageService.get(key);
        };
        return AbstractAuthenticationService;
    }());


    (function (LogLevel) {
        LogLevel[LogLevel["CONSOLE"] = 0] = "CONSOLE";
        LogLevel[LogLevel["TOAST"] = 1] = "TOAST";
        LogLevel[LogLevel["MESSAGE"] = 2] = "MESSAGE";
    })(exports.LogLevel || (exports.LogLevel = {}));
    var ConsoleService = /** @class */ (function () {
        function ConsoleService(location, route) {
            this.location = location;
            this.route = route;
        }
        ConsoleService.prototype.message = function (message, logLevel) {
            if (logLevel === void 0) { logLevel = exports.LogLevel.CONSOLE; }
            switch (logLevel) {
                case exports.LogLevel.CONSOLE:
                    console.log(message);
                    return this;
                default:
                    console.log(message);
            }
            return this;
        };
        ConsoleService.prototype.successBodyPrint = function (body) {
            console.log(body);
            return this;
        };
        ConsoleService.prototype.log = function (message, body) {
            console.log(message);
            return this;
        };
        ConsoleService.prototype.error = function (errMessage, error) {
            console.error(errMessage);
            if (error) {
                console.error('Error Occurred:' + error.error.message);
            }
            return this;
        };
        ConsoleService.prototype.backStack = function () {
            this.location.back();
        };
        ConsoleService.prototype.goTo = function (url) {
            this.route.navigate(url);
        };
        ConsoleService.ctorParameters = function () { return [
            { type: common.Location },
            { type: router.Router }
        ]; };
        ConsoleService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ConsoleService_Factory() { return new ConsoleService(core["ɵɵinject"](common.Location), core["ɵɵinject"](router.Router)); }, token: ConsoleService, providedIn: "root" });
        ConsoleService = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], ConsoleService);
        return ConsoleService;
    }());

    var StorageService = /** @class */ (function () {
        function StorageService() {
        }
        StorageService.prototype.put = function (key, value) {
            localStorage.setItem(key, value);
            return this;
        };
        StorageService.prototype.removeAll = function () {
            localStorage.clear();
            return this;
        };
        StorageService.prototype.get = function (key, valueIfMissing) {
            var value = localStorage.getItem(key);
            if (value === undefined || value === null)
                return valueIfMissing;
            return value;
        };
        StorageService.prototype.remove = function (key) {
            localStorage.removeItem(key);
            return this;
        };
        StorageService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
        StorageService = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], StorageService);
        return StorageService;
    }());

    var BendAuthenticationService = /** @class */ (function (_super) {
        __extends(BendAuthenticationService, _super);
        function BendAuthenticationService(accountService, consoleService, storageService) {
            return _super.call(this, accountService, consoleService, storageService) || this;
        }
        BendAuthenticationService.ctorParameters = function () { return [
            { type: BendAccountService },
            { type: ConsoleService },
            { type: StorageService }
        ]; };
        BendAuthenticationService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function BendAuthenticationService_Factory() { return new BendAuthenticationService(core["ɵɵinject"](BendAccountService), core["ɵɵinject"](ConsoleService), core["ɵɵinject"](StorageService)); }, token: BendAuthenticationService, providedIn: "root" });
        BendAuthenticationService = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], BendAuthenticationService);
        return BendAuthenticationService;
    }(AbstractAuthenticationService));

    var RouterActivateInterceptor = /** @class */ (function () {
        function RouterActivateInterceptor(router, authenticationService) {
            this.router = router;
            this.authenticationService = authenticationService;
        }
        RouterActivateInterceptor.prototype.canActivate = function (route, state) {
            var authorities = route.data.authorities;
            if (authorities == null || authorities.length <= 0) {
                return Promise.resolve(this.authenticationService.isAuthenticated());
            }
            else {
                return this.checkLogin(authorities, state.url);
            }
        };
        RouterActivateInterceptor.prototype.checkLogin = function (authorities, url) {
            return Promise.resolve(this.checkInternally(authorities, url));
        };
        RouterActivateInterceptor.prototype.checkInternally = function (authorities, url) {
            var authorize = this.authenticationService.hasAnyAuthority(authorities);
            if (!authorize) {
                if (core.isDevMode()) {
                    console.error('User doesn\'t have any of required authorities: ' + authorities);
                }
                else {
                    this.router.navigate(['accessdenied']);
                }
            }
            return authorize;
        };
        RouterActivateInterceptor.ctorParameters = function () { return [
            { type: router.Router },
            { type: BendAuthenticationService }
        ]; };
        RouterActivateInterceptor.ɵprov = core["ɵɵdefineInjectable"]({ factory: function RouterActivateInterceptor_Factory() { return new RouterActivateInterceptor(core["ɵɵinject"](router.Router), core["ɵɵinject"](BendAuthenticationService)); }, token: RouterActivateInterceptor, providedIn: "root" });
        RouterActivateInterceptor = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], RouterActivateInterceptor);
        return RouterActivateInterceptor;
    }());

    var RequestTokenInterceptor = /** @class */ (function () {
        function RequestTokenInterceptor(authenticationService) {
            this.authenticationService = authenticationService;
        }
        RequestTokenInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            if (this.authenticationService.isAuthenticated()) {
                req = req.clone({
                    setHeaders: {
                        Authorization: "Bearer " + this.authenticationService.currentToken()
                    }
                });
            }
            return next.handle(req).pipe(operators.tap(function (evt) {
                if (evt instanceof http.HttpResponse) {
                    var JWT_TOKEN = evt.headers.get(BendCoreConstants.jwt.REFRESHED_JSON_WEB_TOKEN);
                    if (JWT_TOKEN != null) {
                        _this.authenticationService.refreshToken(JWT_TOKEN);
                    }
                }
            }));
        };
        RequestTokenInterceptor.ctorParameters = function () { return [
            { type: BendAuthenticationService }
        ]; };
        RequestTokenInterceptor = __decorate([
            core.Injectable()
        ], RequestTokenInterceptor);
        return RequestTokenInterceptor;
    }());

    /*If Passed Empty or YES Tag that means it check for authenticated*/
    /*If Passed NO Tag that means it check for not authenticated*/
    /*ALL OTHER TAG ARE MENTIONED AS YES TAG*/
    var BendIsAuthenticatedDirective = /** @class */ (function () {
        function BendIsAuthenticatedDirective(templateRef, viewContainerRef, authenticationService) {
            this.templateRef = templateRef;
            this.viewContainerRef = viewContainerRef;
            this.authenticationService = authenticationService;
        }
        Object.defineProperty(BendIsAuthenticatedDirective.prototype, "bendIsAuthenticated", {
            set: function (value) {
                var _this = this;
                this.updateView(value);
                this.authenticationService.getAuthenticationState().subscribe(function (info) { return _this.updateView(value); });
            },
            enumerable: true,
            configurable: true
        });
        BendIsAuthenticatedDirective.prototype.updateView = function (value) {
            this.viewContainerRef.clear();
            if (this.isAuthenticatedCheck(value)) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        };
        BendIsAuthenticatedDirective.prototype.isAuthenticatedCheck = function (value) {
            var out = this.authenticationService.isAuthenticated();
            return value.toLowerCase() === 'no' ? !out : out;
        };
        BendIsAuthenticatedDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef },
            { type: BendAuthenticationService }
        ]; };
        __decorate([
            core.Input()
        ], BendIsAuthenticatedDirective.prototype, "bendIsAuthenticated", null);
        BendIsAuthenticatedDirective = __decorate([
            core.Directive({
                selector: '[bendIsAuthenticated]'
            })
        ], BendIsAuthenticatedDirective);
        return BendIsAuthenticatedDirective;
    }());

    var BendHasAnyAuthorityDirective = /** @class */ (function () {
        function BendHasAnyAuthorityDirective(templateRef, viewContainerRef, authenticationService) {
            this.templateRef = templateRef;
            this.viewContainerRef = viewContainerRef;
            this.authenticationService = authenticationService;
        }
        Object.defineProperty(BendHasAnyAuthorityDirective.prototype, "bendHasAnyAuthority", {
            set: function (value) {
                var _this = this;
                this.authorities = typeof value === 'string' ? [value] : value;
                this.updateView();
                this.authenticationService.getAuthenticationState().subscribe(function (info) { return _this.updateView(); });
            },
            enumerable: true,
            configurable: true
        });
        BendHasAnyAuthorityDirective.prototype.updateView = function () {
            this.viewContainerRef.clear();
            if (this.hasAnyAuthorityCheck()) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        };
        BendHasAnyAuthorityDirective.prototype.hasAnyAuthorityCheck = function () {
            if (!this.authenticationService.isAuthenticated()) {
                return false;
            }
            return this.authenticationService.hasAnyAuthority(this.authorities);
        };
        BendHasAnyAuthorityDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef },
            { type: BendAuthenticationService }
        ]; };
        __decorate([
            core.Input()
        ], BendHasAnyAuthorityDirective.prototype, "bendHasAnyAuthority", null);
        BendHasAnyAuthorityDirective = __decorate([
            core.Directive({
                selector: '[bendHasAnyAuthority]'
            })
        ], BendHasAnyAuthorityDirective);
        return BendHasAnyAuthorityDirective;
    }());

    var AppUtilService = /** @class */ (function (_super) {
        __extends(AppUtilService, _super);
        function AppUtilService(http) {
            return _super.call(this, '/app-util', http) || this;
        }
        AppUtilService.prototype.checkExistence = function (table, field, value) {
            return this.http.get(this.PUBLIC_URL + ("/single-field-existence-check/" + table + "/" + field + "/" + value), { observe: 'response' });
        };
        AppUtilService.prototype.updateAll = function (fields) {
            return this.http.post(this.PRIVATE_URL + "/field-edit", fields, { observe: 'response' });
        };
        AppUtilService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        AppUtilService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function AppUtilService_Factory() { return new AppUtilService(core["ɵɵinject"](http.HttpClient)); }, token: AppUtilService, providedIn: "root" });
        AppUtilService = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], AppUtilService);
        return AppUtilService;
    }(AbstractBaseService));

    var SqlFetchDefinitionService = /** @class */ (function (_super) {
        __extends(SqlFetchDefinitionService, _super);
        function SqlFetchDefinitionService(http) {
            var _this = _super.call(this, '/sql-fetch', http) || this;
            _this.DEFAULT_URL = _this.PUBLIC_URL;
            return _this;
        }
        SqlFetchDefinitionService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        SqlFetchDefinitionService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function SqlFetchDefinitionService_Factory() { return new SqlFetchDefinitionService(core["ɵɵinject"](http.HttpClient)); }, token: SqlFetchDefinitionService, providedIn: "root" });
        SqlFetchDefinitionService = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], SqlFetchDefinitionService);
        return SqlFetchDefinitionService;
    }(BaseFetchService));

    var TextProcessingService = /** @class */ (function () {
        function TextProcessingService() {
        }
        TextProcessingService.prototype.camelCaseToSentence = function (text) {
            var preparedField = '';
            var isSeparatorFound = false;
            for (var i = 0; i < text.length; i++) {
                var ch = text.charAt(i);
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
        };
        TextProcessingService.prototype.checkSeparator = function (indexOfChar, currentChar, text) {
            if (this.isUpperCase(currentChar))
                return true;
            return indexOfChar === 0;
        };
        TextProcessingService.prototype.isUpperCase = function (currentChar) {
            return currentChar >= 'A' && currentChar <= 'Z';
        };
        TextProcessingService.prototype.isLowerCase = function (currentChar) {
            return currentChar >= 'a' && currentChar <= 'z';
        };
        TextProcessingService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function TextProcessingService_Factory() { return new TextProcessingService(); }, token: TextProcessingService, providedIn: "root" });
        TextProcessingService = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], TextProcessingService);
        return TextProcessingService;
    }());

    var AbstractBendFlexibleCompilerService = /** @class */ (function () {
        function AbstractBendFlexibleCompilerService() {
            this.AND_SEPARATOR = ' - ';
            this.GLOBAL_DEFAULT_VALUE = 'N/A';
        }
        AbstractBendFlexibleCompilerService.prototype.compile = function (index, values) {
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
        };
        AbstractBendFlexibleCompilerService.prototype.valueByDataType = function (objValue, dataType) {
            if (objValue == null) {
                return this.GLOBAL_DEFAULT_VALUE;
            }
            switch (dataType) {
                case FlexibleDataTypes.STRING:
                    return objValue.toString();
            }
        };
        AbstractBendFlexibleCompilerService.prototype.returnFromAnd = function (index, values) {
            var e_1, _a;
            var output = '';
            try {
                for (var _b = __values(index.flexibleRule.fromIndices), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var indexValue = _c.value;
                    output += this.AND_SEPARATOR + this.valueByDataType(values[indexValue], index.flexibleRule.indicesDataTypes[indexValue]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return output;
        };
        AbstractBendFlexibleCompilerService.prototype.returnFromOr = function (index, values) {
            switch (index.flexibleRule.rulePolicy.toString()) {
                case FlexibleRulePolicyTexts.CHECKED_BY_NULL:
                    return this.basedOnNull(index, values);
            }
            return this.GLOBAL_DEFAULT_VALUE;
        };
        AbstractBendFlexibleCompilerService.prototype.returnFromBool = function (index, values) {
            var indexTop = index.flexibleRule.fromIndices[0];
            if (String(values[indexTop]).toUpperCase() === 'TRUE') {
                return this.valueByDataType(index.flexibleRule.referenceValues[0], this.getByIndex(index.flexibleRule.indicesDataTypes, 0));
            }
            else {
                return this.valueByDataType(index.flexibleRule.referenceValues[1], this.getByIndex(index.flexibleRule.indicesDataTypes, 1));
            }
        };
        AbstractBendFlexibleCompilerService.prototype.getByIndex = function (indicesDataTypes, index) {
            if (indicesDataTypes == null || indicesDataTypes.length <= index) {
                return FlexibleDataTypes.STRING;
            }
            return indicesDataTypes[index];
        };
        AbstractBendFlexibleCompilerService.prototype.basedOnNull = function (index, values) {
            var e_2, _a;
            try {
                for (var _b = __values(index.flexibleRule.fromIndices), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var indexValue = _c.value;
                    if (values[indexValue] != null) {
                        return this.valueByDataType(values[indexValue], this.getByIndex(index.flexibleRule.indicesDataTypes, indexValue));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return this.GLOBAL_DEFAULT_VALUE;
        };
        return AbstractBendFlexibleCompilerService;
    }());
    var BendFlexibleCompilerService = /** @class */ (function (_super) {
        __extends(BendFlexibleCompilerService, _super);
        function BendFlexibleCompilerService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BendFlexibleCompilerService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function BendFlexibleCompilerService_Factory() { return new BendFlexibleCompilerService(); }, token: BendFlexibleCompilerService, providedIn: "root" });
        BendFlexibleCompilerService = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], BendFlexibleCompilerService);
        return BendFlexibleCompilerService;
    }(AbstractBendFlexibleCompilerService));

    var RoutingDatabaseInterceptor = /** @class */ (function () {
        function RoutingDatabaseInterceptor(storageService) {
            this.storageService = storageService;
        }
        RoutingDatabaseInterceptor.prototype.intercept = function (req, next) {
            var registryType = this.storageService.get(BendCoreConstants.cookies.routingDatabase.REGISTRY_TYPE);
            var registryValue = this.storageService.get(BendCoreConstants.cookies.routingDatabase.REGISTRY_VALUE);
            if (registryType != null && registryValue != null) {
                req = req.clone({
                    setHeaders: {
                        HDR_RGTR_DTN_TP: registryType,
                        HDR_RGTR_DTN_VL: registryValue
                    }
                });
            }
            return next.handle(req);
        };
        RoutingDatabaseInterceptor.ctorParameters = function () { return [
            { type: StorageService }
        ]; };
        RoutingDatabaseInterceptor = __decorate([
            core.Injectable()
        ], RoutingDatabaseInterceptor);
        return RoutingDatabaseInterceptor;
    }());

    var DIRECTIVES = [BendHasAnyAuthorityDirective, BendIsAuthenticatedDirective];
    var BendCoreModule = /** @class */ (function () {
        function BendCoreModule() {
        }
        BendCoreModule = __decorate([
            core.NgModule({
                declarations: __spread(DIRECTIVES),
                imports: [common.CommonModule,
                    http.HttpClientModule, platformBrowser.BrowserModule, forms.FormsModule,
                ],
                providers: [
                    {
                        provide: http.HTTP_INTERCEPTORS,
                        useClass: RequestTokenInterceptor,
                        multi: true
                    },
                    {
                        provide: http.HTTP_INTERCEPTORS,
                        useClass: RoutingDatabaseInterceptor,
                        multi: true
                    }
                ],
                exports: __spread(DIRECTIVES)
            })
        ], BendCoreModule);
        return BendCoreModule;
    }());

    exports.AbstractAuthenticationService = AbstractAuthenticationService;
    exports.AbstractBaseService = AbstractBaseService;
    exports.AbstractBendFlexibleCompilerService = AbstractBendFlexibleCompilerService;
    exports.AccountInfo = AccountInfo;
    exports.AppUtilService = AppUtilService;
    exports.AuthoritiesConstants = AuthoritiesConstants;
    exports.AuthorityCrudData = AuthorityCrudData;
    exports.BaseCrudData = BaseCrudData;
    exports.BaseCrudViewData = BaseCrudViewData;
    exports.BaseData = BaseData;
    exports.BaseFetchService = BaseFetchService;
    exports.BaseFlexibleCrudViewData = BaseFlexibleCrudViewData;
    exports.BaseService = BaseService;
    exports.BendAccountService = BendAccountService;
    exports.BendAuthenticationService = BendAuthenticationService;
    exports.BendCoreConstants = BendCoreConstants;
    exports.BendCoreModule = BendCoreModule;
    exports.BendFlexibleCompilerService = BendFlexibleCompilerService;
    exports.BendHasAnyAuthorityDirective = BendHasAnyAuthorityDirective;
    exports.BendIsAuthenticatedDirective = BendIsAuthenticatedDirective;
    exports.BendResponse = BendResponse;
    exports.BendStatusText = BendStatusText;
    exports.ConsoleAuthenticationCallback = ConsoleAuthenticationCallback;
    exports.ConsoleService = ConsoleService;
    exports.DataResponse = DataResponse;
    exports.DomainDescription = DomainDescription;
    exports.ExtraResponse = ExtraResponse;
    exports.FetchDefinition = FetchDefinition;
    exports.FetchResponse = FetchResponse;
    exports.FieldDefinition = FieldDefinition;
    exports.FieldDescription = FieldDescription;
    exports.FlexibleDataTypes = FlexibleDataTypes;
    exports.FlexibleIndex = FlexibleIndex;
    exports.FlexibleRule = FlexibleRule;
    exports.FlexibleRuleNameTexts = FlexibleRuleNameTexts;
    exports.FlexibleRulePolicyTexts = FlexibleRulePolicyTexts;
    exports.LoginInfo = LoginInfo;
    exports.LogoutInfo = LogoutInfo;
    exports.OnlyExtraResponse = OnlyExtraResponse;
    exports.Page = Page;
    exports.PageableDataResponse = PageableDataResponse;
    exports.Parameter = Parameter;
    exports.RequestTokenInterceptor = RequestTokenInterceptor;
    exports.RouterActivateInterceptor = RouterActivateInterceptor;
    exports.SqlFetchDefinition = SqlFetchDefinition;
    exports.SqlFetchDefinitionService = SqlFetchDefinitionService;
    exports.SqlJoin = SqlJoin;
    exports.StorageService = StorageService;
    exports.TextProcessingService = TextProcessingService;
    exports.UserCrudData = UserCrudData;
    exports.authorities = authorities;
    exports.commonResource = commonResource;
    exports.createRequestOption = createRequestOption;
    exports.httpStatus = httpStatus;
    exports.ɵa = RoutingDatabaseInterceptor;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bend-core.umd.js.map
