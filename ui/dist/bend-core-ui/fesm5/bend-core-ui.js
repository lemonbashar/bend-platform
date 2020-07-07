import { __extends, __decorate, __spread } from 'tslib';
import { BaseData, AuthoritiesConstants, httpStatus, BendStatusText, BaseFlexibleCrudViewData, PageableDataResponse, BendStatus, LoginInfo, BendAuthenticationService, BendCoreModule, BendCoreConstants, ConsoleService, StorageService } from 'bend-core';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, NgModule } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

var BendUiField = /** @class */ (function () {
    function BendUiField() {
    }
    return BendUiField;
}());
var DataType;
(function (DataType) {
    DataType[DataType["TEXT"] = 0] = "TEXT";
    DataType[DataType["LONG_TEXT"] = 1] = "LONG_TEXT";
    DataType[DataType["SELECT"] = 2] = "SELECT";
})(DataType || (DataType = {}));

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
}(BaseData));
var Division = /** @class */ (function (_super) {
    __extends(Division, _super);
    function Division() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Division;
}(BaseData));
var District = /** @class */ (function (_super) {
    __extends(District, _super);
    function District() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return District;
}(BaseData));
var Thana = /** @class */ (function (_super) {
    __extends(Thana, _super);
    function Thana() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Thana;
}(BaseData));
var Place = /** @class */ (function (_super) {
    __extends(Place, _super);
    function Place() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Place;
}(BaseData));

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
        this.authoritiesConstants = new AuthoritiesConstants();
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
            if (res.status === httpStatus.OK && res.body.status.toString() === BendStatusText.SUCCESS) {
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
        var data = new BaseFlexibleCrudViewData();
        data.columns = [];
        data.indexes = [];
        data.values = [];
        var d = new PageableDataResponse();
        d.totalPages = 0;
        d.totalElements = 0;
        d.status = BendStatus.FAILURE;
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
        if (res.ok && res.body.status.toString() === BendStatusText.SUCCESS) {
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
        { type: MessageService }
    ]; };
    BendToastService.ɵprov = ɵɵdefineInjectable({ factory: function BendToastService_Factory() { return new BendToastService(ɵɵinject(MessageService)); }, token: BendToastService, providedIn: "root" });
    BendToastService = __decorate([
        Injectable({ providedIn: 'root' })
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
        this.loginInfo = new LoginInfo();
    };
    BendLoginDialogComponent.prototype.login = function () {
        this.authenticationService.authenticate(this.loginInfo, new AuthState(this.ref, this.toastService));
    };
    BendLoginDialogComponent.prototype.cancel = function () {
        this.ref.close();
    };
    BendLoginDialogComponent.ctorParameters = function () { return [
        { type: BendAuthenticationService },
        { type: DynamicDialogRef },
        { type: DynamicDialogConfig },
        { type: BendToastService }
    ]; };
    BendLoginDialogComponent = __decorate([
        Component({
            selector: 'bend-login-dialog',
            template: "<div>\r\n  <div class=\"ui-g-12\">\r\n    <label for=\"id-bmu-view-login-dialog-username\">Username</label>\r\n    <input class=\"ui-g-12\" id=\"id-bmu-view-login-dialog-username\" [(ngModel)]=\"loginInfo.username\" type=\"text\" pInputText />\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <label for=\"id-bmu-view-login-dialog-password\">Password</label>\r\n    <input class=\"ui-g-12\" id=\"id-bmu-view-login-dialog-password\" [(ngModel)]=\"loginInfo.password\" type=\"password\" pInputText />\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"element-right\">\r\n      <button pButton label=\"Cancel\" style=\"margin-right: 1em\" (click)=\"cancel()\" icon=\"fa fa-times-circle\"></button>\r\n      <button pButton label=\"Login\" (click)=\"login()\" icon=\"fa fa-check-circle\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
        })
    ], BendLoginDialogComponent);
    return BendLoginDialogComponent;
}());

var PRIME_NG_MODULES = [
    DynamicDialogModule,
    DialogModule,
    ToastModule,
    InputTextModule,
    ButtonModule
];
var THIRD_PARTIES_MODULES = __spread(PRIME_NG_MODULES, [BrowserModule, FormsModule]);
var LIBRARY_MODULE = [BendCoreModule];
var COMPONENTS = [BendLoginDialogComponent];
var ENTRY_COMPONENTS = [BendLoginDialogComponent];
var PIPES = [];
var BendCoreUiModule = /** @class */ (function () {
    function BendCoreUiModule() {
    }
    BendCoreUiModule = __decorate([
        NgModule({
            declarations: __spread(COMPONENTS, PIPES),
            imports: __spread(LIBRARY_MODULE, THIRD_PARTIES_MODULES, [
                HttpClientModule
            ]),
            providers: [MessageService],
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
            this.storageService.put(BendCoreConstants.cookies.routingDatabase.REGISTRY_TYPE, BendCoreConstants.cookies.routingDatabase.detectionTypes.LOCALE_KEY);
            this.storageService.put(BendCoreConstants.cookies.routingDatabase.REGISTRY_VALUE, langKey);
            this.storageService.put(BendCoreConstants.cookies.lang.USE_LANG_KEY, langKey);
            this.bendToastService.infoBottomCenter('Language ' + langKey + 'Successfully Changed');
        }
    };
    LangKeyService.prototype.activatedKey = function () {
        var key = this.storageService.get(BendCoreConstants.cookies.lang.USE_LANG_KEY, this.DEF_LANG_KEY);
        return key == null ? this.availableKeys()[0] : key;
    };
    LangKeyService.prototype.availableKeys = function () {
        return ['en', 'bn'];
    };
    LangKeyService.ctorParameters = function () { return [
        { type: ConsoleService },
        { type: BendToastService },
        { type: StorageService }
    ]; };
    LangKeyService.ɵprov = ɵɵdefineInjectable({ factory: function LangKeyService_Factory() { return new LangKeyService(ɵɵinject(ConsoleService), ɵɵinject(BendToastService), ɵɵinject(StorageService)); }, token: LangKeyService, providedIn: "root" });
    LangKeyService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], LangKeyService);
    return LangKeyService;
}());

/*
 * Public API Surface of bend-core-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionColumn, ActionRoute, AuthState, BendAbstractDetailViewComponent, BendAbstractListViewComponent, BendBaseComponent, BendBaseLangComponent, BendCoreUiModule, BendLoginDialogComponent, BendToastService, BendUiField, BendUiModel, DataType, District, Division, GsmLocation, LangKeyService, Place, RouteUtil, TableStructure, Thana };
//# sourceMappingURL=bend-core-ui.js.map
