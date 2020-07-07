import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BendHasAnyAuthorityDirective } from './security/directive/bend-has-any-authority.directive';
import { BendIsAuthenticatedDirective } from './security/directive/bend-is-authenticated.directive';
import { RequestTokenInterceptor } from './security/http/interceptor/request-token-interceptor';
import { RoutingDatabaseInterceptor } from './security/http/interceptor/routing-database-interceptor';
const DIRECTIVES = [BendHasAnyAuthorityDirective, BendIsAuthenticatedDirective];
let BendCoreModule = class BendCoreModule {
};
BendCoreModule = __decorate([
    NgModule({
        declarations: [...DIRECTIVES],
        imports: [CommonModule,
            HttpClientModule, BrowserModule, FormsModule,
        ],
        providers: [
            {
                provide: HTTP_INTERCEPTORS,
                useClass: RequestTokenInterceptor,
                multi: true
            },
            {
                provide: HTTP_INTERCEPTORS,
                useClass: RoutingDatabaseInterceptor,
                multi: true
            }
        ],
        exports: [...DIRECTIVES]
    })
], BendCoreModule);
export { BendCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1jb3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9iZW5kLWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ25HLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQzlGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBRXBHLE1BQU0sVUFBVSxHQUFHLENBQUMsNEJBQTRCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztBQXFCaEYsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztDQUFJLENBQUE7QUFBbEIsY0FBYztJQW5CMUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUMsWUFBWTtZQUNwQixnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsV0FBVztTQUM3QztRQUNELFNBQVMsRUFBRTtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztLQUN6QixDQUFDO0dBQ1csY0FBYyxDQUFJO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7QmVuZEhhc0FueUF1dGhvcml0eURpcmVjdGl2ZX0gZnJvbSAnLi9zZWN1cml0eS9kaXJlY3RpdmUvYmVuZC1oYXMtYW55LWF1dGhvcml0eS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0JlbmRJc0F1dGhlbnRpY2F0ZWREaXJlY3RpdmV9IGZyb20gJy4vc2VjdXJpdHkvZGlyZWN0aXZlL2JlbmQtaXMtYXV0aGVudGljYXRlZC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1JlcXVlc3RUb2tlbkludGVyY2VwdG9yfSBmcm9tICcuL3NlY3VyaXR5L2h0dHAvaW50ZXJjZXB0b3IvcmVxdWVzdC10b2tlbi1pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7Um91dGluZ0RhdGFiYXNlSW50ZXJjZXB0b3J9IGZyb20gJy4vc2VjdXJpdHkvaHR0cC9pbnRlcmNlcHRvci9yb3V0aW5nLWRhdGFiYXNlLWludGVyY2VwdG9yJztcclxuXHJcbmNvbnN0IERJUkVDVElWRVMgPSBbQmVuZEhhc0FueUF1dGhvcml0eURpcmVjdGl2ZSwgQmVuZElzQXV0aGVudGljYXRlZERpcmVjdGl2ZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogWy4uLkRJUkVDVElWRVNdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLCBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IFJlcXVlc3RUb2tlbkludGVyY2VwdG9yLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgIHVzZUNsYXNzOiBSb3V0aW5nRGF0YWJhc2VJbnRlcmNlcHRvcixcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGV4cG9ydHM6IFsuLi5ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmVuZENvcmVNb2R1bGUgeyB9XHJcbiJdfQ==