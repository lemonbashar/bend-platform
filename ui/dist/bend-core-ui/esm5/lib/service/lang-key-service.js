import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BendCoreConstants, ConsoleService, StorageService } from 'bend-core';
import { BendToastService } from '../message/bend-toast.service';
import * as i0 from "@angular/core";
import * as i1 from "bend-core";
import * as i2 from "../message/bend-toast.service";
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
    LangKeyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LangKeyService_Factory() { return new LangKeyService(i0.ɵɵinject(i1.ConsoleService), i0.ɵɵinject(i2.BendToastService), i0.ɵɵinject(i1.StorageService)); }, token: LangKeyService, providedIn: "root" });
    LangKeyService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], LangKeyService);
    return LangKeyService;
}());
export { LangKeyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy1rZXktc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS11aS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2xhbmcta2V5LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDNUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFLL0Q7SUFFRSx3QkFDVSxjQUE4QixFQUM5QixnQkFBa0MsRUFDbEMsY0FBOEI7UUFGOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSmhDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO0lBTTVCLENBQUM7SUFDRCxrQ0FBUyxHQUFULFVBQVUsT0FBZTtRQUN2QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsR0FBRyxPQUFPLENBQUMsQ0FBQzthQUMxRTtZQUNILElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RKLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzNGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsT0FBTyxHQUFHLHNCQUFzQixDQUFDLENBQUM7U0FDeEY7SUFDSCxDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFDRSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEcsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Z0JBdkJ5QixjQUFjO2dCQUNaLGdCQUFnQjtnQkFDbEIsY0FBYzs7O0lBTDdCLGNBQWM7UUFIMUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGNBQWMsQ0EyQjFCO3lCQWxDRDtDQWtDQyxBQTNCRCxJQTJCQztTQTNCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCZW5kQ29yZUNvbnN0YW50cywgQ29uc29sZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICdiZW5kLWNvcmUnO1xyXG5pbXBvcnQge0JlbmRUb2FzdFNlcnZpY2V9IGZyb20gJy4uL21lc3NhZ2UvYmVuZC10b2FzdC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExhbmdLZXlTZXJ2aWNlIHtcclxuICBwcml2YXRlIERFRl9MQU5HX0tFWSA9ICdlbic7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbnNvbGVTZXJ2aWNlOiBDb25zb2xlU2VydmljZSxcclxuICAgIHByaXZhdGUgYmVuZFRvYXN0U2VydmljZTogQmVuZFRvYXN0U2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG4gIGFjdGl2ZUtleShsYW5nS2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmF2YWlsYWJsZUtleXMoKS5pbmRleE9mKGxhbmdLZXkpIDwgMClcclxuICAgICAgdGhpcy5jb25zb2xlU2VydmljZS5lcnJvcignVGhlcmVzIG5vIGxhbmd1YWdlIGtleSBhdmFpbGFibGUgZm9yOicgKyBsYW5nS2V5KTtcclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnB1dChCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLnJvdXRpbmdEYXRhYmFzZS5SRUdJU1RSWV9UWVBFLCBCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLnJvdXRpbmdEYXRhYmFzZS5kZXRlY3Rpb25UeXBlcy5MT0NBTEVfS0VZKTtcclxuICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5wdXQoQmVuZENvcmVDb25zdGFudHMuY29va2llcy5yb3V0aW5nRGF0YWJhc2UuUkVHSVNUUllfVkFMVUUsIGxhbmdLZXkpO1xyXG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnB1dChCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLmxhbmcuVVNFX0xBTkdfS0VZLCBsYW5nS2V5KTtcclxuICAgICAgdGhpcy5iZW5kVG9hc3RTZXJ2aWNlLmluZm9Cb3R0b21DZW50ZXIoJ0xhbmd1YWdlICcgKyBsYW5nS2V5ICsgJ1N1Y2Nlc3NmdWxseSBDaGFuZ2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWN0aXZhdGVkS2V5KCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBrZXkgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldChCZW5kQ29yZUNvbnN0YW50cy5jb29raWVzLmxhbmcuVVNFX0xBTkdfS0VZLCB0aGlzLkRFRl9MQU5HX0tFWSk7XHJcbiAgICByZXR1cm4ga2V5ID09IG51bGwgPyB0aGlzLmF2YWlsYWJsZUtleXMoKVswXSA6IGtleTtcclxuICB9XHJcblxyXG4gIGF2YWlsYWJsZUtleXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFsnZW4nLCAnYm4nXTtcclxuICB9XHJcbn1cclxuIl19