import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BendHasAnyAuthorityDirective } from './security/directive/bend-has-any-authority.directive';
import { BendIsAuthenticatedDirective } from './security/directive/bend-is-authenticated.directive';
import { RequestTokenInterceptor } from './security/http/interceptor/request-token-interceptor';
import { RoutingDatabaseInterceptor } from './security/http/interceptor/routing-database-interceptor';
var DIRECTIVES = [BendHasAnyAuthorityDirective, BendIsAuthenticatedDirective];
var BendCoreModule = /** @class */ (function () {
    function BendCoreModule() {
    }
    BendCoreModule = __decorate([
        NgModule({
            declarations: __spread(DIRECTIVES),
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
            exports: __spread(DIRECTIVES)
        })
    ], BendCoreModule);
    return BendCoreModule;
}());
export { BendCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1jb3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9iZW5kLWNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ25HLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQzlGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBRXBHLElBQU0sVUFBVSxHQUFHLENBQUMsNEJBQTRCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztBQXFCaEY7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFuQjFCLFFBQVEsQ0FBQztZQUNSLFlBQVksV0FBTSxVQUFVLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsWUFBWTtnQkFDcEIsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVc7YUFDN0M7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQUNELE9BQU8sV0FBTSxVQUFVLENBQUM7U0FDekIsQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtCZW5kSGFzQW55QXV0aG9yaXR5RGlyZWN0aXZlfSBmcm9tICcuL3NlY3VyaXR5L2RpcmVjdGl2ZS9iZW5kLWhhcy1hbnktYXV0aG9yaXR5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7QmVuZElzQXV0aGVudGljYXRlZERpcmVjdGl2ZX0gZnJvbSAnLi9zZWN1cml0eS9kaXJlY3RpdmUvYmVuZC1pcy1hdXRoZW50aWNhdGVkLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7UmVxdWVzdFRva2VuSW50ZXJjZXB0b3J9IGZyb20gJy4vc2VjdXJpdHkvaHR0cC9pbnRlcmNlcHRvci9yZXF1ZXN0LXRva2VuLWludGVyY2VwdG9yJztcclxuaW1wb3J0IHtSb3V0aW5nRGF0YWJhc2VJbnRlcmNlcHRvcn0gZnJvbSAnLi9zZWN1cml0eS9odHRwL2ludGVyY2VwdG9yL3JvdXRpbmctZGF0YWJhc2UtaW50ZXJjZXB0b3InO1xyXG5cclxuY29uc3QgRElSRUNUSVZFUyA9IFtCZW5kSGFzQW55QXV0aG9yaXR5RGlyZWN0aXZlLCBCZW5kSXNBdXRoZW50aWNhdGVkRGlyZWN0aXZlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uRElSRUNUSVZFU10sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VDbGFzczogUmVxdWVzdFRva2VuSW50ZXJjZXB0b3IsXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IFJvdXRpbmdEYXRhYmFzZUludGVyY2VwdG9yLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgZXhwb3J0czogWy4uLkRJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCZW5kQ29yZU1vZHVsZSB7IH1cclxuIl19