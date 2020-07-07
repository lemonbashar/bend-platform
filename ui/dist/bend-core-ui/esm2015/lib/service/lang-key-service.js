import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BendCoreConstants, ConsoleService, StorageService } from 'bend-core';
import { BendToastService } from '../message/bend-toast.service';
import * as i0 from "@angular/core";
import * as i1 from "bend-core";
import * as i2 from "../message/bend-toast.service";
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
LangKeyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LangKeyService_Factory() { return new LangKeyService(i0.ɵɵinject(i1.ConsoleService), i0.ɵɵinject(i2.BendToastService), i0.ɵɵinject(i1.StorageService)); }, token: LangKeyService, providedIn: "root" });
LangKeyService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LangKeyService);
export { LangKeyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy1rZXktc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS11aS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2xhbmcta2V5LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDNUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFLL0QsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUV6QixZQUNVLGNBQThCLEVBQzlCLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUY5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKaEMsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFNNUIsQ0FBQztJQUNELFNBQVMsQ0FBQyxPQUFlO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxHQUFHLE9BQU8sQ0FBQyxDQUFDO2FBQzFFO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEosSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxPQUFPLEdBQUcsc0JBQXNCLENBQUMsQ0FBQztTQUN4RjtJQUNILENBQUM7SUFFTSxZQUFZO1FBQ2pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3JELENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0YsQ0FBQTs7WUF4QjJCLGNBQWM7WUFDWixnQkFBZ0I7WUFDbEIsY0FBYzs7O0FBTDdCLGNBQWM7SUFIMUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGNBQWMsQ0EyQjFCO1NBM0JZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JlbmRDb3JlQ29uc3RhbnRzLCBDb25zb2xlU2VydmljZSwgU3RvcmFnZVNlcnZpY2V9IGZyb20gJ2JlbmQtY29yZSc7XHJcbmltcG9ydCB7QmVuZFRvYXN0U2VydmljZX0gZnJvbSAnLi4vbWVzc2FnZS9iZW5kLXRvYXN0LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFuZ0tleVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgREVGX0xBTkdfS0VZID0gJ2VuJztcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29uc29sZVNlcnZpY2U6IENvbnNvbGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBiZW5kVG9hc3RTZXJ2aWNlOiBCZW5kVG9hc3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2VcclxuICApIHtcclxuICB9XHJcbiAgYWN0aXZlS2V5KGxhbmdLZXk6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuYXZhaWxhYmxlS2V5cygpLmluZGV4T2YobGFuZ0tleSkgPCAwKVxyXG4gICAgICB0aGlzLmNvbnNvbGVTZXJ2aWNlLmVycm9yKCdUaGVyZXMgbm8gbGFuZ3VhZ2Uga2V5IGF2YWlsYWJsZSBmb3I6JyArIGxhbmdLZXkpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UucHV0KEJlbmRDb3JlQ29uc3RhbnRzLmNvb2tpZXMucm91dGluZ0RhdGFiYXNlLlJFR0lTVFJZX1RZUEUsIEJlbmRDb3JlQ29uc3RhbnRzLmNvb2tpZXMucm91dGluZ0RhdGFiYXNlLmRldGVjdGlvblR5cGVzLkxPQ0FMRV9LRVkpO1xyXG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnB1dChCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLnJvdXRpbmdEYXRhYmFzZS5SRUdJU1RSWV9WQUxVRSwgbGFuZ0tleSk7XHJcbiAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UucHV0KEJlbmRDb3JlQ29uc3RhbnRzLmNvb2tpZXMubGFuZy5VU0VfTEFOR19LRVksIGxhbmdLZXkpO1xyXG4gICAgICB0aGlzLmJlbmRUb2FzdFNlcnZpY2UuaW5mb0JvdHRvbUNlbnRlcignTGFuZ3VhZ2UgJyArIGxhbmdLZXkgKyAnU3VjY2Vzc2Z1bGx5IENoYW5nZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhY3RpdmF0ZWRLZXkoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGtleSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KEJlbmRDb3JlQ29uc3RhbnRzLmNvb2tpZXMubGFuZy5VU0VfTEFOR19LRVksIHRoaXMuREVGX0xBTkdfS0VZKTtcclxuICAgIHJldHVybiBrZXkgPT0gbnVsbCA/IHRoaXMuYXZhaWxhYmxlS2V5cygpWzBdIDoga2V5O1xyXG4gIH1cclxuXHJcbiAgYXZhaWxhYmxlS2V5cygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gWydlbicsICdibiddO1xyXG4gIH1cclxufVxyXG4iXX0=