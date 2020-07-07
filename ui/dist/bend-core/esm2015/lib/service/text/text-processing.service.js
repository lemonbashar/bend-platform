import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let TextProcessingService = class TextProcessingService {
    camelCaseToSentence(text) {
        let preparedField = '';
        let isSeparatorFound = false;
        for (let i = 0; i < text.length; i++) {
            const ch = text.charAt(i);
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
    }
    checkSeparator(indexOfChar, currentChar, text) {
        if (this.isUpperCase(currentChar))
            return true;
        return indexOfChar === 0;
    }
    isUpperCase(currentChar) {
        return currentChar >= 'A' && currentChar <= 'Z';
    }
    isLowerCase(currentChar) {
        return currentChar >= 'a' && currentChar <= 'z';
    }
};
TextProcessingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TextProcessingService_Factory() { return new TextProcessingService(); }, token: TextProcessingService, providedIn: "root" });
TextProcessingService = __decorate([
    Injectable({ providedIn: 'root' })
], TextProcessingService);
export { TextProcessingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1wcm9jZXNzaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iZW5kLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS90ZXh0L3RleHQtcHJvY2Vzc2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU96QyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUV6QixtQkFBbUIsQ0FBQyxJQUFZO1FBQ3JDLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRCxJQUFJLGdCQUFnQixFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDO29CQUFFLGFBQWEsSUFBSSxHQUFHLENBQUM7Z0JBQ2xDLGFBQWEsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7O2dCQUFNLGFBQWEsSUFBSSxFQUFFLENBQUM7WUFFM0IsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1NBQzFCO1FBRUQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVNLGNBQWMsQ0FBQyxXQUFtQixFQUFFLFdBQW1CLEVBQUUsSUFBWTtRQUMxRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQy9CLE9BQU8sSUFBSSxDQUFDO1FBRWQsT0FBTyxXQUFXLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxXQUFXLENBQUMsV0FBbUI7UUFDcEMsT0FBTyxXQUFXLElBQUksR0FBRyxJQUFJLFdBQVcsSUFBSSxHQUFHLENBQUM7SUFDbEQsQ0FBQztJQUVNLFdBQVcsQ0FBQyxXQUFtQjtRQUNwQyxPQUFPLFdBQVcsSUFBSSxHQUFHLElBQUksV0FBVyxJQUFJLEdBQUcsQ0FBQztJQUNsRCxDQUFDO0NBQ0YsQ0FBQTs7QUFqQ1kscUJBQXFCO0lBRGpDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixxQkFBcUIsQ0FpQ2pDO1NBakNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0UHJvY2Vzc2luZ1NlcnZpY2Uge1xyXG4gIGNhbWVsQ2FzZVRvU2VudGVuY2UodGV4dDogc3RyaW5nKTogc3RyaW5nIDtcclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFRleHRQcm9jZXNzaW5nU2VydmljZSBpbXBsZW1lbnRzIElUZXh0UHJvY2Vzc2luZ1NlcnZpY2Uge1xyXG5cclxuICBwdWJsaWMgY2FtZWxDYXNlVG9TZW50ZW5jZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IHByZXBhcmVkRmllbGQgPSAnJztcclxuICAgIGxldCBpc1NlcGFyYXRvckZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY2ggPSB0ZXh0LmNoYXJBdChpKTtcclxuICAgICAgaXNTZXBhcmF0b3JGb3VuZCA9IHRoaXMuY2hlY2tTZXBhcmF0b3IoaSwgY2gsIHRleHQpO1xyXG4gICAgICBpZiAoaXNTZXBhcmF0b3JGb3VuZCkge1xyXG4gICAgICAgIGlmIChpICE9PSAwKSBwcmVwYXJlZEZpZWxkICs9ICcgJztcclxuICAgICAgICBwcmVwYXJlZEZpZWxkICs9IGNoLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIH0gZWxzZSBwcmVwYXJlZEZpZWxkICs9IGNoO1xyXG5cclxuICAgICAgaXNTZXBhcmF0b3JGb3VuZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmVwYXJlZEZpZWxkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrU2VwYXJhdG9yKGluZGV4T2ZDaGFyOiBudW1iZXIsIGN1cnJlbnRDaGFyOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuaXNVcHBlckNhc2UoY3VycmVudENoYXIpKVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gaW5kZXhPZkNoYXIgPT09IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNVcHBlckNhc2UoY3VycmVudENoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRDaGFyID49ICdBJyAmJiBjdXJyZW50Q2hhciA8PSAnWic7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNMb3dlckNhc2UoY3VycmVudENoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRDaGFyID49ICdhJyAmJiBjdXJyZW50Q2hhciA8PSAneic7XHJcbiAgfVxyXG59XHJcbiJdfQ==