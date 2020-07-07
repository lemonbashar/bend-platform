import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { BendCoreModule } from 'bend-core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BendLoginDialogComponent } from './dialog/login-dialog/bend-login-dialog.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
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
export { BendCoreUiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1jb3JlLXVpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS11aS8iLCJzb3VyY2VzIjpbImxpYi9iZW5kLWNvcmUtdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtDQUNiLENBQUM7QUFDRixJQUFNLHFCQUFxQixZQUFPLGdCQUFnQixHQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUVoRixJQUFNLGNBQWMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXhDLElBQU0sVUFBVSxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM5QyxJQUFNLGdCQUFnQixHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUVwRCxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7QUFhakI7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQVg1QixRQUFRLENBQUM7WUFDUixZQUFZLFdBQU0sVUFBVSxFQUFLLEtBQUssQ0FBQztZQUN2QyxPQUFPLFdBQ0YsY0FBYyxFQUNkLHFCQUFxQjtnQkFDeEIsZ0JBQWdCO2NBQ2pCO1lBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQzNCLE9BQU8sV0FBTSxLQUFLLENBQUM7WUFDbkIsZUFBZSxXQUFNLGdCQUFnQixDQUFDO1NBQ3ZDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCZW5kQ29yZU1vZHVsZX0gZnJvbSAnYmVuZC1jb3JlJztcclxuaW1wb3J0IHtEeW5hbWljRGlhbG9nTW9kdWxlfSBmcm9tICdwcmltZW5nL2R5bmFtaWNkaWFsb2cnO1xyXG5pbXBvcnQge0RpYWxvZ01vZHVsZX0gZnJvbSAncHJpbWVuZy9kaWFsb2cnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7QmVuZExvZ2luRGlhbG9nQ29tcG9uZW50fSBmcm9tICcuL2RpYWxvZy9sb2dpbi1kaWFsb2cvYmVuZC1sb2dpbi1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHtUb2FzdE1vZHVsZX0gZnJvbSAncHJpbWVuZy90b2FzdCc7XHJcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5jb25zdCBQUklNRV9OR19NT0RVTEVTID0gW1xyXG4gIER5bmFtaWNEaWFsb2dNb2R1bGUsXHJcbiAgRGlhbG9nTW9kdWxlLFxyXG4gIFRvYXN0TW9kdWxlLFxyXG4gIElucHV0VGV4dE1vZHVsZSxcclxuICBCdXR0b25Nb2R1bGVcclxuXTtcclxuY29uc3QgVEhJUkRfUEFSVElFU19NT0RVTEVTID0gWy4uLlBSSU1FX05HX01PRFVMRVMsIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlXTtcclxuXHJcbmNvbnN0IExJQlJBUllfTU9EVUxFID0gW0JlbmRDb3JlTW9kdWxlXTtcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbQmVuZExvZ2luRGlhbG9nQ29tcG9uZW50XTtcclxuY29uc3QgRU5UUllfQ09NUE9ORU5UUyA9IFtCZW5kTG9naW5EaWFsb2dDb21wb25lbnRdO1xyXG5cclxuY29uc3QgUElQRVMgPSBbXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uUElQRVNdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIC4uLkxJQlJBUllfTU9EVUxFLFxyXG4gICAgLi4uVEhJUkRfUEFSVElFU19NT0RVTEVTLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbTWVzc2FnZVNlcnZpY2VdLFxyXG4gIGV4cG9ydHM6IFsuLi5QSVBFU10sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uRU5UUllfQ09NUE9ORU5UU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJlbmRDb3JlVWlNb2R1bGUgeyB9XHJcbiJdfQ==