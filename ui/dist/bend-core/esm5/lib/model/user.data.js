import { __extends } from "tslib";
import { BaseCrudData } from './crud/base-crud.data';
var UserCrudData = /** @class */ (function (_super) {
    __extends(UserCrudData, _super);
    function UserCrudData(username, email, password, authorities) {
        var _this = _super.call(this) || this;
        _this.username = username;
        _this.email = email;
        _this.password = password;
        _this.authorities = authorities;
        return _this;
    }
    return UserCrudData;
}(BaseCrudData));
export { UserCrudData };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVsL3VzZXIuZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRW5EO0lBQWtDLGdDQUFZO0lBQzVDLHNCQUNTLFFBQWlCLEVBQ2pCLEtBQWMsRUFDZCxRQUFpQixFQUNqQixXQUFpQztRQUoxQyxZQU1FLGlCQUFPLFNBQ1I7UUFOUSxjQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFdBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxjQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGlCQUFXLEdBQVgsV0FBVyxDQUFzQjs7SUFHMUMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQVRELENBQWtDLFlBQVksR0FTN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dGhvcml0eUNydWREYXRhfSBmcm9tICcuL2F1dGhvcml0eS1jcnVkLmRhdGEnO1xyXG5pbXBvcnQge0Jhc2VDcnVkRGF0YX0gZnJvbSAnLi9jcnVkL2Jhc2UtY3J1ZC5kYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ3J1ZERhdGEgZXh0ZW5kcyBCYXNlQ3J1ZERhdGEge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHVzZXJuYW1lPzogc3RyaW5nLFxyXG4gICAgcHVibGljIGVtYWlsPzogc3RyaW5nLFxyXG4gICAgcHVibGljIHBhc3N3b3JkPzogc3RyaW5nLFxyXG4gICAgcHVibGljIGF1dGhvcml0aWVzPzogQXV0aG9yaXR5Q3J1ZERhdGFbXVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbn1cclxuIl19