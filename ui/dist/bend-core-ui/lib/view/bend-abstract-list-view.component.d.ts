import { OnInit } from '@angular/core';
import { AppUtilService, BaseCrudData, BaseData, BaseFlexibleCrudViewData, BaseService, BendFlexibleCompilerService, ConsoleService, FlexibleIndex, PageableDataResponse } from 'bend-core';
import { BendToastService } from '../message/bend-toast.service';
import { BendUiModel } from '../ui-model/bend-ui-model';
import { TranslateService } from '@ngx-translate/core';
import { BendBaseComponent } from './bend-base.component';
import { LangKeyService } from '../service/lang-key-service';
import * as ɵngcc0 from '@angular/core';
export declare class BendAbstractListViewComponent<R extends BaseCrudData, Domain extends BaseData> extends BendBaseComponent implements OnInit {
    private crudService;
    private toastService;
    private consoleService;
    private appUtilService;
    private compiler;
    uiModel: BendUiModel;
    private translate;
    private langKeyService;
    crudData: PageableDataResponse<BaseFlexibleCrudViewData>;
    private SUCCESS;
    private FAILED;
    private domainName;
    pageSize: number;
    pageCount: number;
    load: boolean;
    constructor(crudService: BaseService<R, Domain>, toastService: BendToastService, consoleService: ConsoleService, appUtilService: AppUtilService, compiler: BendFlexibleCompilerService, uiModel: BendUiModel, translate: TranslateService, langKeyService: LangKeyService);
    ngOnInit(): void;
    protected fetchAll(): void;
    compile(index: FlexibleIndex, values: any[]): any;
    prev(): void;
    isFirstPage(): boolean;
    reset(): void;
    next(): void;
    isLastPage(): boolean;
    onPage(event: any): void;
    protected reshape(): void;
    protected emptyData(): PageableDataResponse<BaseFlexibleCrudViewData>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BendAbstractListViewComponent<any, any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BendAbstractListViewComponent<any, any>, never, never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1hYnN0cmFjdC1saXN0LXZpZXcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImJlbmQtYWJzdHJhY3QtbGlzdC12aWV3LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBwVXRpbFNlcnZpY2UsIEJhc2VDcnVkRGF0YSwgQmFzZURhdGEsIEJhc2VGbGV4aWJsZUNydWRWaWV3RGF0YSwgQmFzZVNlcnZpY2UsIEJlbmRGbGV4aWJsZUNvbXBpbGVyU2VydmljZSwgQ29uc29sZVNlcnZpY2UsIEZsZXhpYmxlSW5kZXgsIFBhZ2VhYmxlRGF0YVJlc3BvbnNlIH0gZnJvbSAnYmVuZC1jb3JlJztcclxuaW1wb3J0IHsgQmVuZFRvYXN0U2VydmljZSB9IGZyb20gJy4uL21lc3NhZ2UvYmVuZC10b2FzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmVuZFVpTW9kZWwgfSBmcm9tICcuLi91aS1tb2RlbC9iZW5kLXVpLW1vZGVsJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBCZW5kQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vYmVuZC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhbmdLZXlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9sYW5nLWtleS1zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmVuZEFic3RyYWN0TGlzdFZpZXdDb21wb25lbnQ8UiBleHRlbmRzIEJhc2VDcnVkRGF0YSwgRG9tYWluIGV4dGVuZHMgQmFzZURhdGE+IGV4dGVuZHMgQmVuZEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBjcnVkU2VydmljZTtcclxuICAgIHByaXZhdGUgdG9hc3RTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBjb25zb2xlU2VydmljZTtcclxuICAgIHByaXZhdGUgYXBwVXRpbFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGNvbXBpbGVyO1xyXG4gICAgdWlNb2RlbDogQmVuZFVpTW9kZWw7XHJcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTtcclxuICAgIHByaXZhdGUgbGFuZ0tleVNlcnZpY2U7XHJcbiAgICBjcnVkRGF0YTogUGFnZWFibGVEYXRhUmVzcG9uc2U8QmFzZUZsZXhpYmxlQ3J1ZFZpZXdEYXRhPjtcclxuICAgIHByaXZhdGUgU1VDQ0VTUztcclxuICAgIHByaXZhdGUgRkFJTEVEO1xyXG4gICAgcHJpdmF0ZSBkb21haW5OYW1lO1xyXG4gICAgcGFnZVNpemU6IG51bWJlcjtcclxuICAgIHBhZ2VDb3VudDogbnVtYmVyO1xyXG4gICAgbG9hZDogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGNydWRTZXJ2aWNlOiBCYXNlU2VydmljZTxSLCBEb21haW4+LCB0b2FzdFNlcnZpY2U6IEJlbmRUb2FzdFNlcnZpY2UsIGNvbnNvbGVTZXJ2aWNlOiBDb25zb2xlU2VydmljZSwgYXBwVXRpbFNlcnZpY2U6IEFwcFV0aWxTZXJ2aWNlLCBjb21waWxlcjogQmVuZEZsZXhpYmxlQ29tcGlsZXJTZXJ2aWNlLCB1aU1vZGVsOiBCZW5kVWlNb2RlbCwgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBsYW5nS2V5U2VydmljZTogTGFuZ0tleVNlcnZpY2UpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIHByb3RlY3RlZCBmZXRjaEFsbCgpOiB2b2lkO1xyXG4gICAgY29tcGlsZShpbmRleDogRmxleGlibGVJbmRleCwgdmFsdWVzOiBhbnlbXSk6IGFueTtcclxuICAgIHByZXYoKTogdm9pZDtcclxuICAgIGlzRmlyc3RQYWdlKCk6IGJvb2xlYW47XHJcbiAgICByZXNldCgpOiB2b2lkO1xyXG4gICAgbmV4dCgpOiB2b2lkO1xyXG4gICAgaXNMYXN0UGFnZSgpOiBib29sZWFuO1xyXG4gICAgb25QYWdlKGV2ZW50OiBhbnkpOiB2b2lkO1xyXG4gICAgcHJvdGVjdGVkIHJlc2hhcGUoKTogdm9pZDtcclxuICAgIHByb3RlY3RlZCBlbXB0eURhdGEoKTogUGFnZWFibGVEYXRhUmVzcG9uc2U8QmFzZUZsZXhpYmxlQ3J1ZFZpZXdEYXRhPjtcclxufVxyXG4iXX0=