import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare enum LogLevel {
    CONSOLE = 0,
    TOAST = 1,
    MESSAGE = 2
}
export declare class ConsoleService {
    private location;
    private route;
    constructor(location: Location, route: Router);
    message(message: string, logLevel?: LogLevel): ConsoleService;
    successBodyPrint(body: any): ConsoleService;
    log(message: string, body: HttpResponse<any>): ConsoleService;
    error(errMessage: string, error?: HttpErrorResponse): ConsoleService;
    backStack(): void;
    goTo(url: string[]): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsoleService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNvbnNvbGUuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuZXhwb3J0IGRlY2xhcmUgZW51bSBMb2dMZXZlbCB7XHJcbiAgICBDT05TT0xFID0gMCxcclxuICAgIFRPQVNUID0gMSxcclxuICAgIE1FU1NBR0UgPSAyXHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uc29sZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjtcclxuICAgIHByaXZhdGUgcm91dGU7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhdGlvbjogTG9jYXRpb24sIHJvdXRlOiBSb3V0ZXIpO1xyXG4gICAgbWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIGxvZ0xldmVsPzogTG9nTGV2ZWwpOiBDb25zb2xlU2VydmljZTtcclxuICAgIHN1Y2Nlc3NCb2R5UHJpbnQoYm9keTogYW55KTogQ29uc29sZVNlcnZpY2U7XHJcbiAgICBsb2cobWVzc2FnZTogc3RyaW5nLCBib2R5OiBIdHRwUmVzcG9uc2U8YW55Pik6IENvbnNvbGVTZXJ2aWNlO1xyXG4gICAgZXJyb3IoZXJyTWVzc2FnZTogc3RyaW5nLCBlcnJvcj86IEh0dHBFcnJvclJlc3BvbnNlKTogQ29uc29sZVNlcnZpY2U7XHJcbiAgICBiYWNrU3RhY2soKTogdm9pZDtcclxuICAgIGdvVG8odXJsOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuIl19