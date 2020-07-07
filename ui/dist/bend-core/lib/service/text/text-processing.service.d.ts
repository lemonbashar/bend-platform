import * as ɵngcc0 from '@angular/core';
export interface ITextProcessingService {
    camelCaseToSentence(text: string): string;
}
export declare class TextProcessingService implements ITextProcessingService {
    camelCaseToSentence(text: string): string;
    checkSeparator(indexOfChar: number, currentChar: string, text: string): boolean;
    isUpperCase(currentChar: string): boolean;
    isLowerCase(currentChar: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TextProcessingService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1wcm9jZXNzaW5nLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidGV4dC1wcm9jZXNzaW5nLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OztBQVFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJVGV4dFByb2Nlc3NpbmdTZXJ2aWNlIHtcclxuICAgIGNhbWVsQ2FzZVRvU2VudGVuY2UodGV4dDogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRleHRQcm9jZXNzaW5nU2VydmljZSBpbXBsZW1lbnRzIElUZXh0UHJvY2Vzc2luZ1NlcnZpY2Uge1xyXG4gICAgY2FtZWxDYXNlVG9TZW50ZW5jZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBjaGVja1NlcGFyYXRvcihpbmRleE9mQ2hhcjogbnVtYmVyLCBjdXJyZW50Q2hhcjogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgaXNVcHBlckNhc2UoY3VycmVudENoYXI6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBpc0xvd2VyQ2FzZShjdXJyZW50Q2hhcjogc3RyaW5nKTogYm9vbGVhbjtcclxufVxyXG4iXX0=