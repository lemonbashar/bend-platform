import { Message, MessageService } from 'primeng/api';
import * as ɵngcc0 from '@angular/core';
export declare class BendToastService {
    private messageService;
    private SEVERITY_INFO;
    private SEVERITY_ERROR;
    private MESSAGE_TITLE;
    private POSITION_KEY_CENTER;
    private POSITION_KEY_BOTTOM_CENTER;
    constructor(messageService: MessageService);
    info(message: string, position?: string): void;
    infoBottomCenter(message: string): void;
    error(message: string, position?: string): void;
    show(message: string, messageTitle: string, severityType: string, position: string): void;
    showMessage(message: Message): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BendToastService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC10b2FzdC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImJlbmQtdG9hc3Quc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQWFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJlbmRUb2FzdFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTtcclxuICAgIHByaXZhdGUgU0VWRVJJVFlfSU5GTztcclxuICAgIHByaXZhdGUgU0VWRVJJVFlfRVJST1I7XHJcbiAgICBwcml2YXRlIE1FU1NBR0VfVElUTEU7XHJcbiAgICBwcml2YXRlIFBPU0lUSU9OX0tFWV9DRU5URVI7XHJcbiAgICBwcml2YXRlIFBPU0lUSU9OX0tFWV9CT1RUT01fQ0VOVEVSO1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKTtcclxuICAgIGluZm8obWVzc2FnZTogc3RyaW5nLCBwb3NpdGlvbj86IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBpbmZvQm90dG9tQ2VudGVyKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIHBvc2l0aW9uPzogc3RyaW5nKTogdm9pZDtcclxuICAgIHNob3cobWVzc2FnZTogc3RyaW5nLCBtZXNzYWdlVGl0bGU6IHN0cmluZywgc2V2ZXJpdHlUeXBlOiBzdHJpbmcsIHBvc2l0aW9uOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgc2hvd01lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQ7XHJcbn1cclxuIl19