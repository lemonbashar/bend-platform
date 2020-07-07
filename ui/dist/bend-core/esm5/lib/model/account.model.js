var AccountInfo = /** @class */ (function () {
    function AccountInfo(username, authenticated, authorities, token, tokenLiveTime) {
        this.username = username;
        this.authenticated = authenticated;
        this.authorities = authorities;
        this.token = token;
        this.tokenLiveTime = tokenLiveTime;
    }
    return AccountInfo;
}());
export { AccountInfo };
var LoginInfo = /** @class */ (function () {
    function LoginInfo() {
    }
    return LoginInfo;
}());
export { LoginInfo };
export var LogoutRule;
(function (LogoutRule) {
    LogoutRule[LogoutRule["ALL_SESSION"] = 0] = "ALL_SESSION";
    LogoutRule[LogoutRule["CURRENT_SESSION"] = 1] = "CURRENT_SESSION";
    LogoutRule[LogoutRule["RATHER_THAN_CURRENT_SESSION"] = 2] = "RATHER_THAN_CURRENT_SESSION";
    LogoutRule[LogoutRule["RATHER_THAN_CURRENT_IP"] = 3] = "RATHER_THAN_CURRENT_IP";
    LogoutRule[LogoutRule["CURRENT_IP"] = 4] = "CURRENT_IP";
})(LogoutRule || (LogoutRule = {}));
var LogoutInfo = /** @class */ (function () {
    function LogoutInfo() {
    }
    return LogoutInfo;
}());
export { LogoutInfo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9hY2NvdW50Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0UscUJBQ1MsUUFBaUIsRUFDakIsYUFBdUIsRUFDdkIsV0FBc0IsRUFDdEIsS0FBYyxFQUNkLGFBQXNCO1FBSnRCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQVU7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVc7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFTO0lBRS9CLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFURCxJQVNDOztBQUVEO0lBQUE7SUFJQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7QUFFRCxNQUFNLENBQU4sSUFBWSxVQU1YO0FBTkQsV0FBWSxVQUFVO0lBQ3BCLHlEQUFXLENBQUE7SUFDWCxpRUFBZSxDQUFBO0lBQ2YseUZBQTJCLENBQUE7SUFDM0IsK0VBQXNCLENBQUE7SUFDdEIsdURBQVUsQ0FBQTtBQUNaLENBQUMsRUFOVyxVQUFVLEtBQVYsVUFBVSxRQU1yQjtBQUVEO0lBQUE7SUFHQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBY2NvdW50SW5mbyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdXNlcm5hbWU/OiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgYXV0aGVudGljYXRlZD86IGJvb2xlYW4sXHJcbiAgICBwdWJsaWMgYXV0aG9yaXRpZXM/OiBzdHJpbmdbXSxcclxuICAgIHB1YmxpYyB0b2tlbj86IHN0cmluZyxcclxuICAgIHB1YmxpYyB0b2tlbkxpdmVUaW1lPzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5JbmZvIHtcclxuICB1c2VybmFtZT86IHN0cmluZztcclxuICByZW1lbWJlck1lPzogYm9vbGVhbjtcclxuICBwYXNzd29yZD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTG9nb3V0UnVsZSB7XHJcbiAgQUxMX1NFU1NJT04sXHJcbiAgQ1VSUkVOVF9TRVNTSU9OLFxyXG4gIFJBVEhFUl9USEFOX0NVUlJFTlRfU0VTU0lPTixcclxuICBSQVRIRVJfVEhBTl9DVVJSRU5UX0lQLFxyXG4gIENVUlJFTlRfSVBcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ291dEluZm8ge1xyXG4gIHB1YmxpYyB0b2tlbj86IHN0cmluZztcclxuICBwdWJsaWMgbG9nb3V0UnVsZT86IExvZ291dFJ1bGU7XHJcbn1cclxuIl19