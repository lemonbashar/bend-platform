import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { BendAccountService } from './bend-account.service';
import { AbstractAuthenticationService } from './abstract-authentication-service';
import { ConsoleService } from '../../service/console/console.service';
import { StorageService } from '../../service/storage/storage-service';
import * as i0 from "@angular/core";
import * as i1 from "./bend-account.service";
import * as i2 from "../../service/console/console.service";
import * as i3 from "../../service/storage/storage-service";
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
    BendAuthenticationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BendAuthenticationService_Factory() { return new BendAuthenticationService(i0.ɵɵinject(i1.BendAccountService), i0.ɵɵinject(i2.ConsoleService), i0.ɵɵinject(i3.StorageService)); }, token: BendAuthenticationService, providedIn: "root" });
    BendAuthenticationService = __decorate([
        Injectable({ providedIn: 'root' })
    ], BendAuthenticationService);
    return BendAuthenticationService;
}(AbstractAuthenticationService));
export { BendAuthenticationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1hdXRoZW50aWNhdGlvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlY3VyaXR5L2F1dGgvYmVuZC1hdXRoZW50aWNhdGlvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUNBQXVDLENBQUM7Ozs7O0FBR3JFO0lBQStDLDZDQUE2QjtJQUMxRSxtQ0FDRSxjQUFrQyxFQUNsQyxjQUE4QixFQUM5QixjQUE4QjtlQUU5QixrQkFBTSxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztJQUN2RCxDQUFDOztnQkFMaUIsa0JBQWtCO2dCQUNsQixjQUFjO2dCQUNkLGNBQWM7OztJQUpyQix5QkFBeUI7UUFEckMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLHlCQUF5QixDQVFyQztvQ0FmRDtDQWVDLEFBUkQsQ0FBK0MsNkJBQTZCLEdBUTNFO1NBUlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCZW5kQWNjb3VudFNlcnZpY2V9IGZyb20gJy4vYmVuZC1hY2NvdW50LnNlcnZpY2UnO1xyXG5pbXBvcnQge0Fic3RyYWN0QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuL2Fic3RyYWN0LWF1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbnNvbGVTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2NvbnNvbGUvY29uc29sZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZS9zdG9yYWdlL3N0b3JhZ2Utc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQmVuZEF1dGhlbnRpY2F0aW9uU2VydmljZSBleHRlbmRzIEFic3RyYWN0QXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGFjY291bnRTZXJ2aWNlOiBCZW5kQWNjb3VudFNlcnZpY2UsXHJcbiAgICBjb25zb2xlU2VydmljZTogQ29uc29sZVNlcnZpY2UsXHJcbiAgICBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGFjY291bnRTZXJ2aWNlLCBjb25zb2xlU2VydmljZSwgc3RvcmFnZVNlcnZpY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=