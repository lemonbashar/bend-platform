import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["CONSOLE"] = 0] = "CONSOLE";
    LogLevel[LogLevel["TOAST"] = 1] = "TOAST";
    LogLevel[LogLevel["MESSAGE"] = 2] = "MESSAGE";
})(LogLevel || (LogLevel = {}));
var ConsoleService = /** @class */ (function () {
    function ConsoleService(location, route) {
        this.location = location;
        this.route = route;
    }
    ConsoleService.prototype.message = function (message, logLevel) {
        if (logLevel === void 0) { logLevel = LogLevel.CONSOLE; }
        switch (logLevel) {
            case LogLevel.CONSOLE:
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
        { type: Location },
        { type: Router }
    ]; };
    ConsoleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConsoleService_Factory() { return new ConsoleService(i0.ɵɵinject(i1.Location), i0.ɵɵinject(i2.Router)); }, token: ConsoleService, providedIn: "root" });
    ConsoleService = __decorate([
        Injectable({ providedIn: 'root' })
    ], ConsoleService);
    return ConsoleService;
}());
export { ConsoleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvY29uc29sZS9jb25zb2xlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUd2QyxNQUFNLENBQU4sSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLDZDQUFPLENBQUE7SUFDUCx5Q0FBSyxDQUFBO0lBQ0wsNkNBQU8sQ0FBQTtBQUNULENBQUMsRUFKVyxRQUFRLEtBQVIsUUFBUSxRQUluQjtBQUdEO0lBQ0Usd0JBQ1UsUUFBa0IsRUFDbEIsS0FBYTtRQURiLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUV2QixDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLE9BQWUsRUFBRSxRQUFxQztRQUFyQyx5QkFBQSxFQUFBLFdBQXFCLFFBQVEsQ0FBQyxPQUFPO1FBQzVELFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssUUFBUSxDQUFDLE9BQU87Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDO1lBQ2Q7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHlDQUFnQixHQUFoQixVQUFpQixJQUFTO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsNEJBQUcsR0FBSCxVQUFJLE9BQWUsRUFBRSxJQUF1QjtRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDhCQUFLLEdBQUwsVUFBTSxVQUFrQixFQUFFLEtBQXlCO1FBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLEdBQWE7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBeENtQixRQUFRO2dCQUNYLE1BQU07OztJQUhaLGNBQWM7UUFEMUIsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLGNBQWMsQ0EyQzFCO3lCQXZERDtDQXVEQyxBQTNDRCxJQTJDQztTQTNDWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XHJcbiAgQ09OU09MRSxcclxuICBUT0FTVCxcclxuICBNRVNTQUdFXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgIHByaXZhdGUgcm91dGU6IFJvdXRlclxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIGxvZ0xldmVsOiBMb2dMZXZlbCA9IExvZ0xldmVsLkNPTlNPTEUpOiBDb25zb2xlU2VydmljZSB7XHJcbiAgICBzd2l0Y2ggKGxvZ0xldmVsKSB7XHJcbiAgICAgIGNhc2UgTG9nTGV2ZWwuQ09OU09MRTpcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc3VjY2Vzc0JvZHlQcmludChib2R5OiBhbnkpOiBDb25zb2xlU2VydmljZSB7XHJcbiAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgbG9nKG1lc3NhZ2U6IHN0cmluZywgYm9keTogSHR0cFJlc3BvbnNlPGFueT4pOiBDb25zb2xlU2VydmljZSB7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IoZXJyTWVzc2FnZTogc3RyaW5nLCBlcnJvcj86IEh0dHBFcnJvclJlc3BvbnNlKTogQ29uc29sZVNlcnZpY2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJNZXNzYWdlKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBPY2N1cnJlZDonICsgZXJyb3IuZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGJhY2tTdGFjaygpIHtcclxuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgZ29Ubyh1cmw6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLnJvdXRlLm5hdmlnYXRlKHVybCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==