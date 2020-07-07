import { BaseData, AuthoritiesConstants, httpStatus, BendStatusText, BaseFlexibleCrudViewData, PageableDataResponse, BendStatus, LoginInfo, BendAuthenticationService, BendCoreModule, BendCoreConstants, ConsoleService, StorageService } from 'bend-core';
import { __decorate } from 'tslib';
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

class BendUiField {
}
var DataType;
(function (DataType) {
    DataType[DataType["TEXT"] = 0] = "TEXT";
    DataType[DataType["LONG_TEXT"] = 1] = "LONG_TEXT";
    DataType[DataType["SELECT"] = 2] = "SELECT";
})(DataType || (DataType = {}));

class BendUiModel {
}
class TableStructure {
}
class ActionColumn {
    constructor() {
        this.title = 'ACTION';
        this.actionViewName = 'View';
        this.actionEditName = 'Edit';
        this.actionDeleteName = 'Delete';
        this.actionDisableIndex = 0;
    }
}
class ActionRoute {
    constructor(viewRoute = '/bmu-crud/view', editRoute = '/bmu-crud/edit', deleteRoute = '/bmu-crud/delete') {
        this.viewRoute = viewRoute;
        this.editRoute = editRoute;
        this.deleteRoute = deleteRoute;
    }
}

class GsmLocation extends BaseData {
}
class Division extends BaseData {
}
class District extends BaseData {
}
class Thana extends BaseData {
}
class Place extends BaseData {
}

class RouteUtil {
    static startFromThis(route) {
        return `/${route}`;
    }
}

class BendBaseComponent {
    constructor() {
        this.authoritiesConstants = new AuthoritiesConstants();
        this.today = new Date();
        this.DEF_LANG_KEY = 'en';
    }
    makeRouteStartFromThis(route) {
        return RouteUtil.startFromThis(route);
    }
    get authorities() {
        return this.authoritiesConstants;
    }
    prepareTranslate(translate, langKeyService) {
        translate.setDefaultLang(this.DEF_LANG_KEY);
        translate.use(langKeyService.activatedKey());
    }
}

class BendAbstractListViewComponent extends BendBaseComponent {
    constructor(crudService, toastService, consoleService, appUtilService, compiler, uiModel, translate, langKeyService) {
        super();
        this.crudService = crudService;
        this.toastService = toastService;
        this.consoleService = consoleService;
        this.appUtilService = appUtilService;
        this.compiler = compiler;
        this.uiModel = uiModel;
        this.translate = translate;
        this.langKeyService = langKeyService;
        this.SUCCESS = 'Active Status Changed Successfully';
        this.FAILED = 'Active Status Change Failed';
        this.pageSize = 2;
        this.pageCount = 0;
        this.load = false;
    }
    ngOnInit() {
        super.prepareTranslate(this.translate, this.langKeyService);
        this.crudData = this.emptyData();
        this.fetchAll();
    }
    fetchAll() {
        this.crudService.fetchAllFlexible({ page: this.pageCount, size: this.pageSize }).subscribe((res) => {
            if (res.status === httpStatus.OK && res.body.status.toString() === BendStatusText.SUCCESS) {
                this.crudData = res.body;
                this.crudData.data.columns.push(this.uiModel.tableStructure.actionColumn.title);
                this.load = true;
            }
            else {
                this.consoleService.error('Crud Data Fetch Problem');
            }
        }, (error) => {
            this.consoleService.error('Error Occurred During Crud Data Fetch', error);
        });
    }
    compile(index, values) {
        return this.compiler.compile(index, values);
    }
    prev() {
        this.pageCount--;
        this.reshape();
        this.fetchAll();
    }
    isFirstPage() {
        return this.pageCount === 0;
    }
    reset() {
        this.pageCount = 0;
        this.fetchAll();
    }
    next() {
        this.pageCount++;
        this.reshape();
        this.fetchAll();
    }
    isLastPage() {
        return this.pageCount === (this.crudData.totalPages - 1);
    }
    onPage(event) {
        console.log(event);
    }
    reshape() {
        if (this.pageCount < 0) {
            this.pageCount = 0;
        }
        else if (this.pageCount > this.crudData.totalPages) {
            this.pageCount = this.crudData.totalPages;
        }
    }
    emptyData() {
        const data = new BaseFlexibleCrudViewData();
        data.columns = [];
        data.indexes = [];
        data.values = [];
        const d = new PageableDataResponse();
        d.totalPages = 0;
        d.totalElements = 0;
        d.status = BendStatus.FAILURE;
        d.data = data;
        d.dataTypes = [];
        return d;
    }
}

class BendAbstractDetailViewComponent extends BendBaseComponent {
    constructor(activatedRoute, userCrudService, toastService, consoleService, textProcessingService, uiModel, translate, langKeyService) {
        super();
        this.activatedRoute = activatedRoute;
        this.userCrudService = userCrudService;
        this.toastService = toastService;
        this.consoleService = consoleService;
        this.textProcessingService = textProcessingService;
        this.uiModel = uiModel;
        this.translate = translate;
        this.langKeyService = langKeyService;
    }
    ngOnInit() {
        super.prepareTranslate(this.translate, this.langKeyService);
        this.ready = false;
        this.viewId = this.activatedRoute.snapshot.params.id;
        if (this.viewId == null)
            this.toastService.error('Cannot fetch view Data, id param empty');
        else
            this.fetchData();
    }
    fetchData() {
        this.userCrudService.findOne(this.viewId).subscribe((res) => {
            this.response(res);
        }, (error) => {
            this.error(error);
        });
    }
    response(res) {
        if (res.ok && res.body.status.toString() === BendStatusText.SUCCESS) {
            this.consoleService.message('Successfully Fetch Detail View Data');
            this.crudData = res.body.data;
            this.ready = true;
        }
        else
            this.toastService.error('Error during Detail View data fetch');
    }
    error(error) {
        this.consoleService.error('Error During Detail View Data Fetch', error);
    }
    getAllAvailableFields(baseCrudData) {
        const availableFields = Object.getOwnPropertyNames(baseCrudData); /*Delete Current Time*/
        let idx = availableFields.indexOf('currentTime');
        availableFields.splice(idx, idx + 1);
        idx = availableFields.indexOf('id');
        availableFields.splice(idx, idx + 1);
        idx = availableFields.indexOf('password');
        availableFields.splice(idx, idx + 1);
        return availableFields;
    }
    getFieldValue(baseCrudData, fieldName) {
        const descriptor = Object.getOwnPropertyDescriptor(baseCrudData, fieldName);
        const val = descriptor.value;
        if (val == null)
            return 'N/A';
        if (fieldName === 'active')
            return val ? 'Active' : 'Inactive';
        return val;
    }
    prepareField(text) {
        if (text === 'active')
            return 'Active Status';
        return this.textProcessingService.camelCaseToSentence(text);
    }
}

class BendBaseLangComponent extends BendBaseComponent {
    constructor(translate, langKeyService) {
        super();
        this.translate = translate;
        this.langKeyService = langKeyService;
    }
    ngOnInit() {
        super.prepareTranslate(this.translate, this.langKeyService);
    }
}

const bendToastPosition = {
    POSITION_CENTER: 'key-center',
    POSITION_TOP_LEFT: 'key-top-left',
    POSITION_TOP_RIGHT: 'key-top-right',
    POSITION_TOP_CENTER: 'key-top-center',
    POSITION_BOTTOM_LEFT: 'key-bottom-left',
    POSITION_BOTTOM_RIGHT: 'key-bottom-right',
    POSITION_BOTTOM_CENTER: 'key-bottom-center',
};

let BendToastService = class BendToastService {
    constructor(messageService) {
        this.messageService = messageService;
        this.SEVERITY_INFO = 'info';
        this.SEVERITY_ERROR = 'error';
        this.MESSAGE_TITLE = 'Alert';
        this.POSITION_KEY_CENTER = 'key-center';
        this.POSITION_KEY_BOTTOM_CENTER = 'key-bottom-center';
    }
    info(message, position = bendToastPosition.POSITION_BOTTOM_CENTER) {
        this.show(message, this.MESSAGE_TITLE, this.SEVERITY_INFO, position);
    }
    infoBottomCenter(message) {
        this.showMessage({ severity: this.SEVERITY_INFO, summary: this.MESSAGE_TITLE, detail: message, key: this.POSITION_KEY_BOTTOM_CENTER });
    }
    error(message, position = bendToastPosition.POSITION_BOTTOM_CENTER) {
        this.show(message, this.MESSAGE_TITLE, this.SEVERITY_ERROR, position);
    }
    show(message, messageTitle, severityType, position) {
        this.showMessage({ severity: severityType, summary: messageTitle, detail: message, key: position });
    }
    showMessage(message) {
        this.messageService.add(message);
    }
};
BendToastService.ctorParameters = () => [
    { type: MessageService }
];
BendToastService.ɵprov = ɵɵdefineInjectable({ factory: function BendToastService_Factory() { return new BendToastService(ɵɵinject(MessageService)); }, token: BendToastService, providedIn: "root" });
BendToastService = __decorate([
    Injectable({ providedIn: 'root' })
], BendToastService);

class AuthState {
    constructor(ref, toastService) {
        this.ref = ref;
        this.toastService = toastService;
    }
    authenticationState(isAuthenticated, message, error) {
        if (isAuthenticated) {
            this.toastService.info('Authentication Success');
            this.ref.close();
        }
        else {
            this.toastService.error('Authentication Failed');
        }
    }
}
let BendLoginDialogComponent = class BendLoginDialogComponent {
    constructor(authenticationService, ref, config, toastService) {
        this.authenticationService = authenticationService;
        this.ref = ref;
        this.config = config;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.loginInfo = new LoginInfo();
    }
    login() {
        this.authenticationService.authenticate(this.loginInfo, new AuthState(this.ref, this.toastService));
    }
    cancel() {
        this.ref.close();
    }
};
BendLoginDialogComponent.ctorParameters = () => [
    { type: BendAuthenticationService },
    { type: DynamicDialogRef },
    { type: DynamicDialogConfig },
    { type: BendToastService }
];
BendLoginDialogComponent = __decorate([
    Component({
        selector: 'bend-login-dialog',
        template: "<div>\r\n  <div class=\"ui-g-12\">\r\n    <label for=\"id-bmu-view-login-dialog-username\">Username</label>\r\n    <input class=\"ui-g-12\" id=\"id-bmu-view-login-dialog-username\" [(ngModel)]=\"loginInfo.username\" type=\"text\" pInputText />\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <label for=\"id-bmu-view-login-dialog-password\">Password</label>\r\n    <input class=\"ui-g-12\" id=\"id-bmu-view-login-dialog-password\" [(ngModel)]=\"loginInfo.password\" type=\"password\" pInputText />\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"element-right\">\r\n      <button pButton label=\"Cancel\" style=\"margin-right: 1em\" (click)=\"cancel()\" icon=\"fa fa-times-circle\"></button>\r\n      <button pButton label=\"Login\" (click)=\"login()\" icon=\"fa fa-check-circle\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
    })
], BendLoginDialogComponent);

const PRIME_NG_MODULES = [
    DynamicDialogModule,
    DialogModule,
    ToastModule,
    InputTextModule,
    ButtonModule
];
const THIRD_PARTIES_MODULES = [...PRIME_NG_MODULES, BrowserModule, FormsModule];
const LIBRARY_MODULE = [BendCoreModule];
const COMPONENTS = [BendLoginDialogComponent];
const ENTRY_COMPONENTS = [BendLoginDialogComponent];
const PIPES = [];
let BendCoreUiModule = class BendCoreUiModule {
};
BendCoreUiModule = __decorate([
    NgModule({
        declarations: [...COMPONENTS, ...PIPES],
        imports: [
            ...LIBRARY_MODULE,
            ...THIRD_PARTIES_MODULES,
            HttpClientModule
        ],
        providers: [MessageService],
        exports: [...PIPES],
        entryComponents: [...ENTRY_COMPONENTS]
    })
], BendCoreUiModule);

let LangKeyService = class LangKeyService {
    constructor(consoleService, bendToastService, storageService) {
        this.consoleService = consoleService;
        this.bendToastService = bendToastService;
        this.storageService = storageService;
        this.DEF_LANG_KEY = 'en';
    }
    activeKey(langKey) {
        if (this.availableKeys().indexOf(langKey) < 0)
            this.consoleService.error('Theres no language key available for:' + langKey);
        else {
            this.storageService.put(BendCoreConstants.cookies.routingDatabase.REGISTRY_TYPE, BendCoreConstants.cookies.routingDatabase.detectionTypes.LOCALE_KEY);
            this.storageService.put(BendCoreConstants.cookies.routingDatabase.REGISTRY_VALUE, langKey);
            this.storageService.put(BendCoreConstants.cookies.lang.USE_LANG_KEY, langKey);
            this.bendToastService.infoBottomCenter('Language ' + langKey + 'Successfully Changed');
        }
    }
    activatedKey() {
        const key = this.storageService.get(BendCoreConstants.cookies.lang.USE_LANG_KEY, this.DEF_LANG_KEY);
        return key == null ? this.availableKeys()[0] : key;
    }
    availableKeys() {
        return ['en', 'bn'];
    }
};
LangKeyService.ctorParameters = () => [
    { type: ConsoleService },
    { type: BendToastService },
    { type: StorageService }
];
LangKeyService.ɵprov = ɵɵdefineInjectable({ factory: function LangKeyService_Factory() { return new LangKeyService(ɵɵinject(ConsoleService), ɵɵinject(BendToastService), ɵɵinject(StorageService)); }, token: LangKeyService, providedIn: "root" });
LangKeyService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LangKeyService);

/*
 * Public API Surface of bend-core-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionColumn, ActionRoute, AuthState, BendAbstractDetailViewComponent, BendAbstractListViewComponent, BendBaseComponent, BendBaseLangComponent, BendCoreUiModule, BendLoginDialogComponent, BendToastService, BendUiField, BendUiModel, DataType, District, Division, GsmLocation, LangKeyService, Place, RouteUtil, TableStructure, Thana };
//# sourceMappingURL=bend-core-ui.js.map
