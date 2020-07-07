import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let StorageService = class StorageService {
    put(key, value) {
        localStorage.setItem(key, value);
        return this;
    }
    removeAll() {
        localStorage.clear();
        return this;
    }
    get(key, valueIfMissing) {
        const value = localStorage.getItem(key);
        if (value === undefined || value === null)
            return valueIfMissing;
        return value;
    }
    remove(key) {
        localStorage.removeItem(key);
        return this;
    }
};
StorageService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
StorageService = __decorate([
    Injectable({ providedIn: 'root' })
], StorageService);
export { StorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2Uvc3RvcmFnZS9zdG9yYWdlLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBR3pDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFFekIsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFhO1FBQzVCLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFNBQVM7UUFDUCxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxjQUF1QjtRQUN0QyxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSTtZQUFFLE9BQVEsY0FBYyxDQUFDO1FBQ2xFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTs7QUF0QlksY0FBYztJQUQxQixVQUFVLENBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLENBQUM7R0FDcEIsY0FBYyxDQXNCMUI7U0F0QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcclxuXHJcbiAgcHV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogU3RvcmFnZVNlcnZpY2Uge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlbW92ZUFsbCgpOiBTdG9yYWdlU2VydmljZSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGtleTogc3RyaW5nLCB2YWx1ZUlmTWlzc2luZz86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuICB2YWx1ZUlmTWlzc2luZztcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFN0b3JhZ2VTZXJ2aWNlIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIl19