(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('bend-core'), require('@angular/core'), require('primeng/dynamicdialog'), require('primeng/api'), require('primeng/dialog'), require('@angular/platform-browser'), require('@angular/forms'), require('primeng/toast'), require('primeng/inputtext'), require('primeng/button'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('bend-core-ui', ['exports', 'bend-core', '@angular/core', 'primeng/dynamicdialog', 'primeng/api', 'primeng/dialog', '@angular/platform-browser', '@angular/forms', 'primeng/toast', 'primeng/inputtext', 'primeng/button', '@angular/common/http'], factory) :
    (global = global || self, factory(global['bend-core-ui'] = {}, global.bendCore, global.ng.core, global.dynamicdialog, global.api, global.dialog, global.ng.platformBrowser, global.ng.forms, global.toast, global.inputtext, global.button, global.ng.common.http));
}(this, (function (exports, bendCore, core, dynamicdialog, api, dialog, platformBrowser, forms, toast, inputtext, button, http) { 'use strict';

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

    var BendUiField = /** @class */ (function () {
        function BendUiField() {
        }
        return BendUiField;
    }());

    (function (DataType) {
        DataType[DataType["TEXT"] = 0] = "TEXT";
        DataType[DataType["LONG_TEXT"] = 1] = "LONG_TEXT";
        DataType[DataType["SELECT"] = 2] = "SELECT";
    })(exports.DataType || (exports.DataType = {}));

    var BendUiModel = /** @class */ (function () {
        function BendUiModel() {
        }
        return BendUiModel;
    }());
    var TableStructure = /** @class */ (function () {
        function TableStructure() {
        }
        return TableStructure;
    }());
    var ActionColumn = /** @class */ (function () {
        function ActionColumn() {
            this.title = 'ACTION';
            this.actionViewName = 'View';
            this.actionEditName = 'Edit';
            this.actionDeleteName = 'Delete';
            this.actionDisableIndex = 0;
        }
        return ActionColumn;
    }());
    var ActionRoute = /** @class */ (function () {
        function ActionRoute(viewRoute, editRoute, deleteRoute) {
            if (viewRoute === void 0) { viewRoute = '/bmu-crud/view'; }
            if (editRoute === void 0) { editRoute = '/bmu-crud/edit'; }
            if (deleteRoute === void 0) { deleteRoute = '/bmu-crud/delete'; }
            this.viewRoute = viewRoute;
            this.editRoute = editRoute;
            this.deleteRoute = deleteRoute;
        }
        return ActionRoute;
    }());

    var GsmLocation = /** @class */ (function (_super) {
        __extends(GsmLocation, _super);
        function GsmLocation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GsmLocation;
    }(bendCore.BaseData));
    var Division = /** @class */ (function (_super) {
        __extends(Division, _super);
        function Division() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Division;
    }(bendCore.BaseData));
    var District = /** @class */ (function (_super) {
        __extends(District, _super);
        function District() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return District;
    }(bendCore.BaseData));
    var Thana = /** @class */ (function (_super) {
        __extends(Thana, _super);
        function Thana() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Thana;
    }(bendCore.BaseData));
    var Place = /** @class */ (function (_super) {
        __extends(Place, _super);
        function Place() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Place;
    }(bendCore.BaseData));

    var RouteUtil = /** @class */ (function () {
        function RouteUtil() {
        }
        RouteUtil.startFromThis = function (route) {
            return "/" + route;
        };
        return RouteUtil;
    }());

    var BendBaseComponent = /** @class */ (function () {
        function BendBaseComponent() {
            this.authoritiesConstants = new bendCore.AuthoritiesConstants();
            this.today = new Date();
            this.DEF_LANG_KEY = 'en';
        }
        BendBaseComponent.prototype.makeRouteStartFromThis = function (route) {
            return RouteUtil.startFromThis(route);
        };
        Object.defineProperty(BendBaseComponent.prototype, "authorities", {
            get: function () {
                return this.authoritiesConstants;
            },
            enumerable: true,
            configurable: true
        });
        BendBaseComponent.prototype.prepareTranslate = function (translate, langKeyService) {
            translate.setDefaultLang(this.DEF_LANG_KEY);
            translate.use(langKeyService.activatedKey());
        };
        return BendBaseComponent;
    }());

    var BendAbstractListViewComponent = /** @class */ (function (_super) {
        __extends(BendAbstractListViewComponent, _super);
        function BendAbstractListViewComponent(crudService, toastService, consoleService, appUtilService, compiler, uiModel, translate, langKeyService) {
            var _this = _super.call(this) || this;
            _this.crudService = crudService;
            _this.toastService = toastService;
            _this.consoleService = consoleService;
            _this.appUtilService = appUtilService;
            _this.compiler = compiler;
            _this.uiModel = uiModel;
            _this.translate = translate;
            _this.langKeyService = langKeyService;
            _this.SUCCESS = 'Active Status Changed Successfully';
            _this.FAILED = 'Active Status Change Failed';
            _this.pageSize = 2;
            _this.pageCount = 0;
            _this.load = false;
            return _this;
        }
        BendAbstractListViewComponent.prototype.ngOnInit = function () {
            _super.prototype.prepareTranslate.call(this, this.translate, this.langKeyService);
            this.crudData = this.emptyData();
            this.fetchAll();
        };
        BendAbstractListViewComponent.prototype.fetchAll = function () {
            var _this = this;
            this.crudService.fetchAllFlexible({ page: this.pageCount, size: this.pageSize }).subscribe(function (res) {
                if (res.status === bendCore.httpStatus.OK && res.body.status.toString() === bendCore.BendStatusText.SUCCESS) {
                    _this.crudData = res.body;
                    _this.crudData.data.columns.push(_this.uiModel.tableStructure.actionColumn.title);
                    _this.load = true;
                }
                else {
                    _this.consoleService.error('Crud Data Fetch Problem');
                }
            }, function (error) {
                _this.consoleService.error('Error Occurred During Crud Data Fetch', error);
            });
        };
        BendAbstractListViewComponent.prototype.compile = function (index, values) {
            return this.compiler.compile(index, values);
        };
        BendAbstractListViewComponent.prototype.prev = function () {
            this.pageCount--;
            this.reshape();
            this.fetchAll();
        };
        BendAbstractListViewComponent.prototype.isFirstPage = function () {
            return this.pageCount === 0;
        };
        BendAbstractListViewComponent.prototype.reset = function () {
            this.pageCount = 0;
            this.fetchAll();
        };
        BendAbstractListViewComponent.prototype.next = function () {
            this.pageCount++;
            this.reshape();
            this.fetchAll();
        };
        BendAbstractListViewComponent.prototype.isLastPage = function () {
            return this.pageCount === (this.crudData.totalPages - 1);
        };
        BendAbstractListViewComponent.prototype.onPage = function (event) {
            console.log(event);
        };
        BendAbstractListViewComponent.prototype.reshape = function () {
            if (this.pageCount < 0) {
                this.pageCount = 0;
            }
            else if (this.pageCount > this.crudData.totalPages) {
                this.pageCount = this.crudData.totalPages;
            }
        };
        BendAbstractListViewComponent.prototype.emptyData = function () {
            var data = new bendCore.BaseFlexibleCrudViewData();
            data.columns = [];
            data.indexes = [];
            data.values = [];
            var d = new bendCore.PageableDataResponse();
            d.totalPages = 0;
            d.totalElements = 0;
            d.status = bendCore.BendStatus.FAILURE;
            d.data = data;
            d.dataTypes = [];
            return d;
        };
        return BendAbstractListViewComponent;
    }(BendBaseComponent));

    var BendAbstractDetailViewComponent = /** @class */ (function (_super) {
        __extends(BendAbstractDetailViewComponent, _super);
        function BendAbstractDetailViewComponent(activatedRoute, userCrudService, toastService, consoleService, textProcessingService, uiModel, translate, langKeyService) {
            var _this = _super.call(this) || this;
            _this.activatedRoute = activatedRoute;
            _this.userCrudService = userCrudService;
            _this.toastService = toastService;
            _this.consoleService = consoleService;
            _this.textProcessingService = textProcessingService;
            _this.uiModel = uiModel;
            _this.translate = translate;
            _this.langKeyService = langKeyService;
            return _this;
        }
        BendAbstractDetailViewComponent.prototype.ngOnInit = function () {
            _super.prototype.prepareTranslate.call(this, this.translate, this.langKeyService);
            this.ready = false;
            this.viewId = this.activatedRoute.snapshot.params.id;
            if (this.viewId == null)
                this.toastService.error('Cannot fetch view Data, id param empty');
            else
                this.fetchData();
        };
        BendAbstractDetailViewComponent.prototype.fetchData = function () {
            var _this = this;
            this.userCrudService.findOne(this.viewId).subscribe(function (res) {
                _this.response(res);
            }, function (error) {
                _this.error(error);
            });
        };
        BendAbstractDetailViewComponent.prototype.response = function (res) {
            if (res.ok && res.body.status.toString() === bendCore.BendStatusText.SUCCESS) {
                this.consoleService.message('Successfully Fetch Detail View Data');
                this.crudData = res.body.data;
                this.ready = true;
            }
            else
                this.toastService.error('Error during Detail View data fetch');
        };
        BendAbstractDetailViewComponent.prototype.error = function (error) {
            this.consoleService.error('Error During Detail View Data Fetch', error);
        };
        BendAbstractDetailViewComponent.prototype.getAllAvailableFields = function (baseCrudData) {
            var availableFields = Object.getOwnPropertyNames(baseCrudData); /*Delete Current Time*/
            var idx = availableFields.indexOf('currentTime');
            availableFields.splice(idx, idx + 1);
            idx = availableFields.indexOf('id');
            availableFields.splice(idx, idx + 1);
            idx = availableFields.indexOf('password');
            availableFields.splice(idx, idx + 1);
            return availableFields;
        };
        BendAbstractDetailViewComponent.prototype.getFieldValue = function (baseCrudData, fieldName) {
            var descriptor = Object.getOwnPropertyDescriptor(baseCrudData, fieldName);
            var val = descriptor.value;
            if (val == null)
                return 'N/A';
            if (fieldName === 'active')
                return val ? 'Active' : 'Inactive';
            return val;
        };
        BendAbstractDetailViewComponent.prototype.prepareField = function (text) {
            if (text === 'active')
                return 'Active Status';
            return this.textProcessingService.camelCaseToSentence(text);
        };
        return BendAbstractDetailViewComponent;
    }(BendBaseComponent));

    var BendBaseLangComponent = /** @class */ (function (_super) {
        __extends(BendBaseLangComponent, _super);
        function BendBaseLangComponent(translate, langKeyService) {
            var _this = _super.call(this) || this;
            _this.translate = translate;
            _this.langKeyService = langKeyService;
            return _this;
        }
        BendBaseLangComponent.prototype.ngOnInit = function () {
            _super.prototype.prepareTranslate.call(this, this.translate, this.langKeyService);
        };
        return BendBaseLangComponent;
    }(BendBaseComponent));

    var bendToastPosition = {
        POSITION_CENTER: 'key-center',
        POSITION_TOP_LEFT: 'key-top-left',
        POSITION_TOP_RIGHT: 'key-top-right',
        POSITION_TOP_CENTER: 'key-top-center',
        POSITION_BOTTOM_LEFT: 'key-bottom-left',
        POSITION_BOTTOM_RIGHT: 'key-bottom-right',
        POSITION_BOTTOM_CENTER: 'key-bottom-center',
    };

    var BendToastService = /** @class */ (function () {
        function BendToastService(messageService) {
            this.messageService = messageService;
            this.SEVERITY_INFO = 'info';
            this.SEVERITY_ERROR = 'error';
            this.MESSAGE_TITLE = 'Alert';
            this.POSITION_KEY_CENTER = 'key-center';
            this.POSITION_KEY_BOTTOM_CENTER = 'key-bottom-center';
        }
        BendToastService.prototype.info = function (message, position) {
            if (position === void 0) { position = bendToastPosition.POSITION_BOTTOM_CENTER; }
            this.show(message, this.MESSAGE_TITLE, this.SEVERITY_INFO, position);
        };
        BendToastService.prototype.infoBottomCenter = function (message) {
            this.showMessage({ severity: this.SEVERITY_INFO, summary: this.MESSAGE_TITLE, detail: message, key: this.POSITION_KEY_BOTTOM_CENTER });
        };
        BendToastService.prototype.error = function (message, position) {
            if (position === void 0) { position = bendToastPosition.POSITION_BOTTOM_CENTER; }
            this.show(message, this.MESSAGE_TITLE, this.SEVERITY_ERROR, position);
        };
        BendToastService.prototype.show = function (message, messageTitle, severityType, position) {
            this.showMessage({ severity: severityType, summary: messageTitle, detail: message, key: position });
        };
        BendToastService.prototype.showMessage = function (message) {
            this.messageService.add(message);
        };
        BendToastService.ctorParameters = function () { return [
            { type: api.MessageService }
        ]; };
        BendToastService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function BendToastService_Factory() { return new BendToastService(core["ɵɵinject"](api.MessageService)); }, token: BendToastService, providedIn: "root" });
        BendToastService = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], BendToastService);
        return BendToastService;
    }());

    var AuthState = /** @class */ (function () {
        function AuthState(ref, toastService) {
            this.ref = ref;
            this.toastService = toastService;
        }
        AuthState.prototype.authenticationState = function (isAuthenticated, message, error) {
            if (isAuthenticated) {
                this.toastService.info('Authentication Success');
                this.ref.close();
            }
            else {
                this.toastService.error('Authentication Failed');
            }
        };
        return AuthState;
    }());
    var BendLoginDialogComponent = /** @class */ (function () {
        function BendLoginDialogComponent(authenticationService, ref, config, toastService) {
            this.authenticationService = authenticationService;
            this.ref = ref;
            this.config = config;
            this.toastService = toastService;
        }
        BendLoginDialogComponent.prototype.ngOnInit = function () {
            this.loginInfo = new bendCore.LoginInfo();
        };
        BendLoginDialogComponent.prototype.login = function () {
            this.authenticationService.authenticate(this.loginInfo, new AuthState(this.ref, this.toastService));
        };
        BendLoginDialogComponent.prototype.cancel = function () {
            this.ref.close();
        };
        BendLoginDialogComponent.ctorParameters = function () { return [
            { type: bendCore.BendAuthenticationService },
            { type: dynamicdialog.DynamicDialogRef },
            { type: dynamicdialog.DynamicDialogConfig },
            { type: BendToastService }
        ]; };
        BendLoginDialogComponent = __decorate([
            core.Component({
                selector: 'bend-login-dialog',
                template: "<div>\r\n  <div class=\"ui-g-12\">\r\n    <label for=\"id-bmu-view-login-dialog-username\">Username</label>\r\n    <input class=\"ui-g-12\" id=\"id-bmu-view-login-dialog-username\" [(ngModel)]=\"loginInfo.username\" type=\"text\" pInputText />\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <label for=\"id-bmu-view-login-dialog-password\">Password</label>\r\n    <input class=\"ui-g-12\" id=\"id-bmu-view-login-dialog-password\" [(ngModel)]=\"loginInfo.password\" type=\"password\" pInputText />\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"element-right\">\r\n      <button pButton label=\"Cancel\" style=\"margin-right: 1em\" (click)=\"cancel()\" icon=\"fa fa-times-circle\"></button>\r\n      <button pButton label=\"Login\" (click)=\"login()\" icon=\"fa fa-check-circle\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
            })
        ], BendLoginDialogComponent);
        return BendLoginDialogComponent;
    }());

    var PRIME_NG_MODULES = [
        dynamicdialog.DynamicDialogModule,
        dialog.DialogModule,
        toast.ToastModule,
        inputtext.InputTextModule,
        button.ButtonModule
    ];
    var THIRD_PARTIES_MODULES = __spread(PRIME_NG_MODULES, [platformBrowser.BrowserModule, forms.FormsModule]);
    var LIBRARY_MODULE = [bendCore.BendCoreModule];
    var COMPONENTS = [BendLoginDialogComponent];
    var ENTRY_COMPONENTS = [BendLoginDialogComponent];
    var PIPES = [];
    var BendCoreUiModule = /** @class */ (function () {
        function BendCoreUiModule() {
        }
        BendCoreUiModule = __decorate([
            core.NgModule({
                declarations: __spread(COMPONENTS, PIPES),
                imports: __spread(LIBRARY_MODULE, THIRD_PARTIES_MODULES, [
                    http.HttpClientModule
                ]),
                providers: [api.MessageService],
                exports: __spread(PIPES),
                entryComponents: __spread(ENTRY_COMPONENTS)
            })
        ], BendCoreUiModule);
        return BendCoreUiModule;
    }());

    var LangKeyService = /** @class */ (function () {
        function LangKeyService(consoleService, bendToastService, storageService) {
            this.consoleService = consoleService;
            this.bendToastService = bendToastService;
            this.storageService = storageService;
            this.DEF_LANG_KEY = 'en';
        }
        LangKeyService.prototype.activeKey = function (langKey) {
            if (this.availableKeys().indexOf(langKey) < 0)
                this.consoleService.error('Theres no language key available for:' + langKey);
            else {
                this.storageService.put(bendCore.BendCoreConstants.cookies.routingDatabase.REGISTRY_TYPE, bendCore.BendCoreConstants.cookies.routingDatabase.detectionTypes.LOCALE_KEY);
                this.storageService.put(bendCore.BendCoreConstants.cookies.routingDatabase.REGISTRY_VALUE, langKey);
                this.storageService.put(bendCore.BendCoreConstants.cookies.lang.USE_LANG_KEY, langKey);
                this.bendToastService.infoBottomCenter('Language ' + langKey + 'Successfully Changed');
            }
        };
        LangKeyService.prototype.activatedKey = function () {
            var key = this.storageService.get(bendCore.BendCoreConstants.cookies.lang.USE_LANG_KEY, this.DEF_LANG_KEY);
            return key == null ? this.availableKeys()[0] : key;
        };
        LangKeyService.prototype.availableKeys = function () {
            return ['en', 'bn'];
        };
        LangKeyService.ctorParameters = function () { return [
            { type: bendCore.ConsoleService },
            { type: BendToastService },
            { type: bendCore.StorageService }
        ]; };
        LangKeyService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function LangKeyService_Factory() { return new LangKeyService(core["ɵɵinject"](bendCore.ConsoleService), core["ɵɵinject"](BendToastService), core["ɵɵinject"](bendCore.StorageService)); }, token: LangKeyService, providedIn: "root" });
        LangKeyService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], LangKeyService);
        return LangKeyService;
    }());

    exports.ActionColumn = ActionColumn;
    exports.ActionRoute = ActionRoute;
    exports.AuthState = AuthState;
    exports.BendAbstractDetailViewComponent = BendAbstractDetailViewComponent;
    exports.BendAbstractListViewComponent = BendAbstractListViewComponent;
    exports.BendBaseComponent = BendBaseComponent;
    exports.BendBaseLangComponent = BendBaseLangComponent;
    exports.BendCoreUiModule = BendCoreUiModule;
    exports.BendLoginDialogComponent = BendLoginDialogComponent;
    exports.BendToastService = BendToastService;
    exports.BendUiField = BendUiField;
    exports.BendUiModel = BendUiModel;
    exports.District = District;
    exports.Division = Division;
    exports.GsmLocation = GsmLocation;
    exports.LangKeyService = LangKeyService;
    exports.Place = Place;
    exports.RouteUtil = RouteUtil;
    exports.TableStructure = TableStructure;
    exports.Thana = Thana;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bend-core-ui.umd.js.map
