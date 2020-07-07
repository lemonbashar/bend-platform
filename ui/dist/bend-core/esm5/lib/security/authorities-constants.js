import { __decorate, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export var authorities = {
    ROLE_USER: 'ROLE_USER',
    ROLE_ADMIN: 'ROLE_ADMIN',
    ROLE_SYSTEM_ADMIN: 'ROLE_SYSTEM_ADMIN',
    ROLE_SETTINGS_ADMIN: 'ROLE_SETTINGS_ADMIN',
    ROLE_USER_ADMIN: 'ROLE_USER_ADMIN'
};
var AuthoritiesConstants = /** @class */ (function () {
    function AuthoritiesConstants() {
    }
    AuthoritiesConstants.prototype.allAdmin = function () {
        return __spread(this.superAdmin(), [authorities.ROLE_SETTINGS_ADMIN, authorities.ROLE_USER_ADMIN]);
    };
    AuthoritiesConstants.prototype.superAdmin = function () {
        return [authorities.ROLE_ADMIN, authorities.ROLE_SYSTEM_ADMIN];
    };
    AuthoritiesConstants.prototype.settingAdmin = function () {
        return __spread(this.superAdmin(), [authorities.ROLE_SETTINGS_ADMIN]);
    };
    AuthoritiesConstants.prototype.userAdmin = function () {
        return __spread(this.superAdmin(), [authorities.ROLE_USER_ADMIN]);
    };
    AuthoritiesConstants.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthoritiesConstants_Factory() { return new AuthoritiesConstants(); }, token: AuthoritiesConstants, providedIn: "root" });
    AuthoritiesConstants = __decorate([
        Injectable({ providedIn: 'root' })
    ], AuthoritiesConstants);
    return AuthoritiesConstants;
}());
export { AuthoritiesConstants };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXRpZXMtY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlY3VyaXR5L2F1dGhvcml0aWVzLWNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFekMsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHO0lBQ3pCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxtQkFBbUIsRUFBRSxxQkFBcUI7SUFDMUMsZUFBZSxFQUFFLGlCQUFpQjtDQUNuQyxDQUFDO0FBR0Y7SUFBQTtLQWlCQztJQWZDLHVDQUFRLEdBQVI7UUFDRSxnQkFBVyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUUsV0FBVyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxlQUFlLEdBQUU7SUFDOUYsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFDRSxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNFLGdCQUFXLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRSxXQUFXLENBQUMsbUJBQW1CLEdBQUU7SUFDakUsQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFDRSxnQkFBVyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUUsV0FBVyxDQUFDLGVBQWUsR0FBRTtJQUM3RCxDQUFDOztJQWhCVSxvQkFBb0I7UUFEaEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLG9CQUFvQixDQWlCaEM7K0JBNUJEO0NBNEJDLEFBakJELElBaUJDO1NBakJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aG9yaXRpZXMgPSB7XHJcbiAgUk9MRV9VU0VSOiAnUk9MRV9VU0VSJyxcclxuICBST0xFX0FETUlOOiAnUk9MRV9BRE1JTicsXHJcbiAgUk9MRV9TWVNURU1fQURNSU46ICdST0xFX1NZU1RFTV9BRE1JTicsXHJcbiAgUk9MRV9TRVRUSU5HU19BRE1JTjogJ1JPTEVfU0VUVElOR1NfQURNSU4nLFxyXG4gIFJPTEVfVVNFUl9BRE1JTjogJ1JPTEVfVVNFUl9BRE1JTidcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBBdXRob3JpdGllc0NvbnN0YW50cyB7XHJcblxyXG4gIGFsbEFkbWluKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5zdXBlckFkbWluKCksIGF1dGhvcml0aWVzLlJPTEVfU0VUVElOR1NfQURNSU4sIGF1dGhvcml0aWVzLlJPTEVfVVNFUl9BRE1JTl07XHJcbiAgfVxyXG5cclxuICBzdXBlckFkbWluKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBbYXV0aG9yaXRpZXMuUk9MRV9BRE1JTiwgYXV0aG9yaXRpZXMuUk9MRV9TWVNURU1fQURNSU5dO1xyXG4gIH1cclxuXHJcbiAgc2V0dGluZ0FkbWluKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5zdXBlckFkbWluKCksIGF1dGhvcml0aWVzLlJPTEVfU0VUVElOR1NfQURNSU5dO1xyXG4gIH1cclxuXHJcbiAgdXNlckFkbWluKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5zdXBlckFkbWluKCksIGF1dGhvcml0aWVzLlJPTEVfVVNFUl9BRE1JTl07XHJcbiAgfVxyXG59XHJcbiJdfQ==