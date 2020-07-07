import { ConsoleService, StorageService } from 'bend-core';
import { BendToastService } from '../message/bend-toast.service';
import * as ɵngcc0 from '@angular/core';
export declare class LangKeyService {
    private consoleService;
    private bendToastService;
    private storageService;
    private DEF_LANG_KEY;
    constructor(consoleService: ConsoleService, bendToastService: BendToastService, storageService: StorageService);
    activeKey(langKey: string): void;
    activatedKey(): string;
    availableKeys(): string[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LangKeyService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy1rZXktc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJsYW5nLWtleS1zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7O0FBU0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zb2xlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdiZW5kLWNvcmUnO1xyXG5pbXBvcnQgeyBCZW5kVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vbWVzc2FnZS9iZW5kLXRvYXN0LnNlcnZpY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMYW5nS2V5U2VydmljZSB7XHJcbiAgICBwcml2YXRlIGNvbnNvbGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBiZW5kVG9hc3RTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTtcclxuICAgIHByaXZhdGUgREVGX0xBTkdfS0VZO1xyXG4gICAgY29uc3RydWN0b3IoY29uc29sZVNlcnZpY2U6IENvbnNvbGVTZXJ2aWNlLCBiZW5kVG9hc3RTZXJ2aWNlOiBCZW5kVG9hc3RTZXJ2aWNlLCBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UpO1xyXG4gICAgYWN0aXZlS2V5KGxhbmdLZXk6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBhY3RpdmF0ZWRLZXkoKTogc3RyaW5nO1xyXG4gICAgYXZhaWxhYmxlS2V5cygpOiBzdHJpbmdbXTtcclxufVxyXG4iXX0=