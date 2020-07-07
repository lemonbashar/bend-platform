import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var TextProcessingService = /** @class */ (function () {
    function TextProcessingService() {
    }
    TextProcessingService.prototype.camelCaseToSentence = function (text) {
        var preparedField = '';
        var isSeparatorFound = false;
        for (var i = 0; i < text.length; i++) {
            var ch = text.charAt(i);
            isSeparatorFound = this.checkSeparator(i, ch, text);
            if (isSeparatorFound) {
                if (i !== 0)
                    preparedField += ' ';
                preparedField += ch.toUpperCase();
            }
            else
                preparedField += ch;
            isSeparatorFound = false;
        }
        return preparedField;
    };
    TextProcessingService.prototype.checkSeparator = function (indexOfChar, currentChar, text) {
        if (this.isUpperCase(currentChar))
            return true;
        return indexOfChar === 0;
    };
    TextProcessingService.prototype.isUpperCase = function (currentChar) {
        return currentChar >= 'A' && currentChar <= 'Z';
    };
    TextProcessingService.prototype.isLowerCase = function (currentChar) {
        return currentChar >= 'a' && currentChar <= 'z';
    };
    TextProcessingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TextProcessingService_Factory() { return new TextProcessingService(); }, token: TextProcessingService, providedIn: "root" });
    TextProcessingService = __decorate([
        Injectable({ providedIn: 'root' })
    ], TextProcessingService);
    return TextProcessingService;
}());
export { TextProcessingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1wcm9jZXNzaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iZW5kLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS90ZXh0L3RleHQtcHJvY2Vzc2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU96QztJQUFBO0tBaUNDO0lBL0JRLG1EQUFtQixHQUExQixVQUEyQixJQUFZO1FBQ3JDLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRCxJQUFJLGdCQUFnQixFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDO29CQUFFLGFBQWEsSUFBSSxHQUFHLENBQUM7Z0JBQ2xDLGFBQWEsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7O2dCQUFNLGFBQWEsSUFBSSxFQUFFLENBQUM7WUFFM0IsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1NBQzFCO1FBRUQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVNLDhDQUFjLEdBQXJCLFVBQXNCLFdBQW1CLEVBQUUsV0FBbUIsRUFBRSxJQUFZO1FBQzFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUM7UUFFZCxPQUFPLFdBQVcsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLDJDQUFXLEdBQWxCLFVBQW1CLFdBQW1CO1FBQ3BDLE9BQU8sV0FBVyxJQUFJLEdBQUcsSUFBSSxXQUFXLElBQUksR0FBRyxDQUFDO0lBQ2xELENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixXQUFtQjtRQUNwQyxPQUFPLFdBQVcsSUFBSSxHQUFHLElBQUksV0FBVyxJQUFJLEdBQUcsQ0FBQztJQUNsRCxDQUFDOztJQWhDVSxxQkFBcUI7UUFEakMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLHFCQUFxQixDQWlDakM7Z0NBeENEO0NBd0NDLEFBakNELElBaUNDO1NBakNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0UHJvY2Vzc2luZ1NlcnZpY2Uge1xyXG4gIGNhbWVsQ2FzZVRvU2VudGVuY2UodGV4dDogc3RyaW5nKTogc3RyaW5nIDtcclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFRleHRQcm9jZXNzaW5nU2VydmljZSBpbXBsZW1lbnRzIElUZXh0UHJvY2Vzc2luZ1NlcnZpY2Uge1xyXG5cclxuICBwdWJsaWMgY2FtZWxDYXNlVG9TZW50ZW5jZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IHByZXBhcmVkRmllbGQgPSAnJztcclxuICAgIGxldCBpc1NlcGFyYXRvckZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2ggPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgICAgaXNTZXBhcmF0b3JGb3VuZCA9IHRoaXMuY2hlY2tTZXBhcmF0b3IoaSwgY2gsIHRleHQpO1xyXG4gICAgICBpZiAoaXNTZXBhcmF0b3JGb3VuZCkge1xyXG4gICAgICAgIGlmIChpICE9PSAwKSBwcmVwYXJlZEZpZWxkICs9ICcgJztcclxuICAgICAgICBwcmVwYXJlZEZpZWxkICs9IGNoLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIH0gZWxzZSBwcmVwYXJlZEZpZWxkICs9IGNoO1xyXG5cclxuICAgICAgaXNTZXBhcmF0b3JGb3VuZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmVwYXJlZEZpZWxkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrU2VwYXJhdG9yKGluZGV4T2ZDaGFyOiBudW1iZXIsIGN1cnJlbnRDaGFyOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuaXNVcHBlckNhc2UoY3VycmVudENoYXIpKVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gaW5kZXhPZkNoYXIgPT09IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNVcHBlckNhc2UoY3VycmVudENoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRDaGFyID49ICdBJyAmJiBjdXJyZW50Q2hhciA8PSAnWic7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNMb3dlckNhc2UoY3VycmVudENoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRDaGFyID49ICdhJyAmJiBjdXJyZW50Q2hhciA8PSAneic7XHJcbiAgfVxyXG59XHJcbiJdfQ==