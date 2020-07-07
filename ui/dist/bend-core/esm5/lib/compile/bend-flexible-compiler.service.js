import { __decorate, __extends, __values } from "tslib";
import { FlexibleDataTypes, FlexibleRuleNameTexts, FlexibleRulePolicyTexts } from '../model/crud/base-flexible-crud.data';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var AbstractBendFlexibleCompilerService = /** @class */ (function () {
    function AbstractBendFlexibleCompilerService() {
        this.AND_SEPARATOR = ' - ';
        this.GLOBAL_DEFAULT_VALUE = 'N/A';
    }
    AbstractBendFlexibleCompilerService.prototype.compile = function (index, values) {
        if (!index.dynamic) {
            return values[index.index];
        }
        else {
            if (index.flexibleRule.name === FlexibleRuleNameTexts.AND) {
                return this.returnFromAnd(index, values);
            }
            else if (index.flexibleRule.name === FlexibleRuleNameTexts.OR) {
                return this.returnFromOr(index, values);
            }
            else if (index.flexibleRule.name === FlexibleRuleNameTexts.BOOL) {
                return this.returnFromBool(index, values);
            }
        }
        return this.GLOBAL_DEFAULT_VALUE;
    };
    AbstractBendFlexibleCompilerService.prototype.valueByDataType = function (objValue, dataType) {
        if (objValue == null) {
            return this.GLOBAL_DEFAULT_VALUE;
        }
        switch (dataType) {
            case FlexibleDataTypes.STRING:
                return objValue.toString();
        }
    };
    AbstractBendFlexibleCompilerService.prototype.returnFromAnd = function (index, values) {
        var e_1, _a;
        var output = '';
        try {
            for (var _b = __values(index.flexibleRule.fromIndices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var indexValue = _c.value;
                output += this.AND_SEPARATOR + this.valueByDataType(values[indexValue], index.flexibleRule.indicesDataTypes[indexValue]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return output;
    };
    AbstractBendFlexibleCompilerService.prototype.returnFromOr = function (index, values) {
        switch (index.flexibleRule.rulePolicy.toString()) {
            case FlexibleRulePolicyTexts.CHECKED_BY_NULL:
                return this.basedOnNull(index, values);
        }
        return this.GLOBAL_DEFAULT_VALUE;
    };
    AbstractBendFlexibleCompilerService.prototype.returnFromBool = function (index, values) {
        var indexTop = index.flexibleRule.fromIndices[0];
        if (String(values[indexTop]).toUpperCase() === 'TRUE') {
            return this.valueByDataType(index.flexibleRule.referenceValues[0], this.getByIndex(index.flexibleRule.indicesDataTypes, 0));
        }
        else {
            return this.valueByDataType(index.flexibleRule.referenceValues[1], this.getByIndex(index.flexibleRule.indicesDataTypes, 1));
        }
    };
    AbstractBendFlexibleCompilerService.prototype.getByIndex = function (indicesDataTypes, index) {
        if (indicesDataTypes == null || indicesDataTypes.length <= index) {
            return FlexibleDataTypes.STRING;
        }
        return indicesDataTypes[index];
    };
    AbstractBendFlexibleCompilerService.prototype.basedOnNull = function (index, values) {
        var e_2, _a;
        try {
            for (var _b = __values(index.flexibleRule.fromIndices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var indexValue = _c.value;
                if (values[indexValue] != null) {
                    return this.valueByDataType(values[indexValue], this.getByIndex(index.flexibleRule.indicesDataTypes, indexValue));
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this.GLOBAL_DEFAULT_VALUE;
    };
    return AbstractBendFlexibleCompilerService;
}());
export { AbstractBendFlexibleCompilerService };
var BendFlexibleCompilerService = /** @class */ (function (_super) {
    __extends(BendFlexibleCompilerService, _super);
    function BendFlexibleCompilerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BendFlexibleCompilerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BendFlexibleCompilerService_Factory() { return new BendFlexibleCompilerService(); }, token: BendFlexibleCompilerService, providedIn: "root" });
    BendFlexibleCompilerService = __decorate([
        Injectable({ providedIn: 'root' })
    ], BendFlexibleCompilerService);
    return BendFlexibleCompilerService;
}(AbstractBendFlexibleCompilerService));
export { BendFlexibleCompilerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1mbGV4aWJsZS1jb21waWxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBpbGUvYmVuZC1mbGV4aWJsZS1jb21waWxlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLHFCQUFxQixFQUFFLHVCQUF1QixFQUMvQyxNQUFNLHVDQUF1QyxDQUFDO0FBQy9DLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXpDO0lBQUE7UUFDRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUNkLHlCQUFvQixHQUFHLEtBQUssQ0FBQztJQW1FdkMsQ0FBQztJQWpFQyxxREFBTyxHQUFQLFVBQVEsS0FBb0IsRUFBRSxNQUFhO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDMUM7aUJBQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9ELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDekM7aUJBQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDM0M7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixD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QkFDbkg7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztJQUNILDBDQUFDO0FBQUQsQ0FBQyxBQXJFRCxJQXFFQzs7QUFHRDtJQUFpRCwrQ0FBbUM7SUFBcEY7O0tBRUM7O0lBRlksMkJBQTJCO1FBRHZDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QiwyQkFBMkIsQ0FFdkM7c0NBakZEO0NBaUZDLEFBRkQsQ0FBaUQsbUNBQW1DLEdBRW5GO1NBRlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGbGV4aWJsZURhdGFUeXBlcyxcclxuICBGbGV4aWJsZUluZGV4LFxyXG4gIEZsZXhpYmxlUnVsZU5hbWVUZXh0cywgRmxleGlibGVSdWxlUG9saWN5VGV4dHNcclxufSBmcm9tICcuLi9tb2RlbC9jcnVkL2Jhc2UtZmxleGlibGUtY3J1ZC5kYXRhJztcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEJlbmRGbGV4aWJsZUNvbXBpbGVyU2VydmljZSB7XHJcbiAgQU5EX1NFUEFSQVRPUiA9ICcgLSAnO1xyXG4gIHByaXZhdGUgR0xPQkFMX0RFRkFVTFRfVkFMVUUgPSAnTi9BJztcclxuXHJcbiAgY29tcGlsZShpbmRleDogRmxleGlibGVJbmRleCwgdmFsdWVzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBpZiAoIWluZGV4LmR5bmFtaWMpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlc1tpbmRleC5pbmRleF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoaW5kZXguZmxleGlibGVSdWxlLm5hbWUgPT09IEZsZXhpYmxlUnVsZU5hbWVUZXh0cy5BTkQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5Gcm9tQW5kKGluZGV4LCB2YWx1ZXMpO1xyXG4gICAgICB9IGVsc2UgaWYgKGluZGV4LmZsZXhpYmxlUnVsZS5uYW1lID09PSBGbGV4aWJsZVJ1bGVOYW1lVGV4dHMuT1IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5Gcm9tT3IoaW5kZXgsIHZhbHVlcyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXguZmxleGlibGVSdWxlLm5hbWUgPT09IEZsZXhpYmxlUnVsZU5hbWVUZXh0cy5CT09MKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0dXJuRnJvbUJvb2woaW5kZXgsIHZhbHVlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLkdMT0JBTF9ERUZBVUxUX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZUJ5RGF0YVR5cGUob2JqVmFsdWU6IGFueSwgZGF0YVR5cGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAob2JqVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5HTE9CQUxfREVGQVVMVF9WQUxVRTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoZGF0YVR5cGUpIHtcclxuICAgICAgY2FzZSBGbGV4aWJsZURhdGFUeXBlcy5TVFJJTkc6XHJcbiAgICAgICAgcmV0dXJuIG9ialZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmV0dXJuRnJvbUFuZChpbmRleDogRmxleGlibGVJbmRleCwgdmFsdWVzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBsZXQgb3V0cHV0ID0gJyc7XHJcbiAgICBmb3IgKGNvbnN0IGluZGV4VmFsdWUgb2YgaW5kZXguZmxleGlibGVSdWxlLmZyb21JbmRpY2VzKSB7XHJcbiAgICAgIG91dHB1dCArPSB0aGlzLkFORF9TRVBBUkFUT1IgKyB0aGlzLnZhbHVlQnlEYXRhVHlwZSh2YWx1ZXNbaW5kZXhWYWx1ZV0sIGluZGV4LmZsZXhpYmxlUnVsZS5pbmRpY2VzRGF0YVR5cGVzW2luZGV4VmFsdWVdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmV0dXJuRnJvbU9yKGluZGV4OiBGbGV4aWJsZUluZGV4LCB2YWx1ZXM6IGFueVtdKSB7XHJcbiAgICBzd2l0Y2ggKGluZGV4LmZsZXhpYmxlUnVsZS5ydWxlUG9saWN5LnRvU3RyaW5nKCkpIHtcclxuICAgICAgY2FzZSBGbGV4aWJsZVJ1bGVQb2xpY3lUZXh0cy5DSEVDS0VEX0JZX05VTEw6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZWRPbk51bGwoaW5kZXgsIHZhbHVlcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5HTE9CQUxfREVGQVVMVF9WQUxVRTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZXR1cm5Gcm9tQm9vbChpbmRleDogRmxleGlibGVJbmRleCwgdmFsdWVzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBjb25zdCBpbmRleFRvcCA9IGluZGV4LmZsZXhpYmxlUnVsZS5mcm9tSW5kaWNlc1swXTtcclxuICAgIGlmIChTdHJpbmcodmFsdWVzW2luZGV4VG9wXSkudG9VcHBlckNhc2UoKSA9PT0gJ1RSVUUnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlQnlEYXRhVHlwZShpbmRleC5mbGV4aWJsZVJ1bGUucmVmZXJlbmNlVmFsdWVzWzBdLCB0aGlzLmdldEJ5SW5kZXgoaW5kZXguZmxleGlibGVSdWxlLmluZGljZXNEYXRhVHlwZXMsIDApKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlQnlEYXRhVHlwZShpbmRleC5mbGV4aWJsZVJ1bGUucmVmZXJlbmNlVmFsdWVzWzFdLCB0aGlzLmdldEJ5SW5kZXgoaW5kZXguZmxleGlibGVSdWxlLmluZGljZXNEYXRhVHlwZXMsIDEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QnlJbmRleChpbmRpY2VzRGF0YVR5cGVzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBpZiAoaW5kaWNlc0RhdGFUeXBlcyA9PSBudWxsIHx8IGluZGljZXNEYXRhVHlwZXMubGVuZ3RoIDw9IGluZGV4KSB7XHJcbiAgICAgIHJldHVybiBGbGV4aWJsZURhdGFUeXBlcy5TVFJJTkc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5kaWNlc0RhdGFUeXBlc1tpbmRleF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJhc2VkT25OdWxsKGluZGV4OiBGbGV4aWJsZUluZGV4LCB2YWx1ZXM6IGFueVtdKTogYW55IHtcclxuICAgIGZvciAoY29uc3QgaW5kZXhWYWx1ZSBvZiBpbmRleC5mbGV4aWJsZVJ1bGUuZnJvbUluZGljZXMpIHtcclxuICAgICAgaWYgKHZhbHVlc1tpbmRleFZhbHVlXSAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVCeURhdGFUeXBlKHZhbHVlc1tpbmRleFZhbHVlXSwgdGhpcy5nZXRCeUluZGV4KGluZGV4LmZsZXhpYmxlUnVsZS5pbmRpY2VzRGF0YVR5cGVzLCBpbmRleFZhbHVlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLkdMT0JBTF9ERUZBVUxUX1ZBTFVFO1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEJlbmRGbGV4aWJsZUNvbXBpbGVyU2VydmljZSBleHRlbmRzIEFic3RyYWN0QmVuZEZsZXhpYmxlQ29tcGlsZXJTZXJ2aWNlIHtcclxuXHJcbn1cclxuIl19