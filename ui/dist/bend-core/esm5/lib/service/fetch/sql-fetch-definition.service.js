import { __decorate, __extends } from "tslib";
import { BaseFetchService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var SqlFetchDefinitionService = /** @class */ (function (_super) {
    __extends(SqlFetchDefinitionService, _super);
    function SqlFetchDefinitionService(http) {
        var _this = _super.call(this, '/sql-fetch', http) || this;
        _this.DEFAULT_URL = _this.PUBLIC_URL;
        return _this;
    }
    SqlFetchDefinitionService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    SqlFetchDefinitionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SqlFetchDefinitionService_Factory() { return new SqlFetchDefinitionService(i0.ɵɵinject(i1.HttpClient)); }, token: SqlFetchDefinitionService, providedIn: "root" });
    SqlFetchDefinitionService = __decorate([
        Injectable({ providedIn: 'root' })
    ], SqlFetchDefinitionService);
    return SqlFetchDefinitionService;
}(BaseFetchService));
export { SqlFetchDefinitionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsLWZldGNoLWRlZmluaXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2ZldGNoL3NxbC1mZXRjaC1kZWZpbml0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFLekM7SUFBK0MsNkNBQW9EO0lBQ2pHLG1DQUNFLElBQWdCO1FBRGxCLFlBR0Usa0JBQU0sWUFBWSxFQUFFLElBQUksQ0FBQyxTQUUxQjtRQURDLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQzs7SUFDckMsQ0FBQzs7Z0JBSk8sVUFBVTs7O0lBRlAseUJBQXlCO1FBRHJDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0Qix5QkFBeUIsQ0FPckM7b0NBZEQ7Q0FjQyxBQVBELENBQStDLGdCQUFnQixHQU85RDtTQVBZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZUZldGNoU2VydmljZX0gZnJvbSAnLi4vYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SVNxbEZldGNoRGVmaW5pdGlvbn0gZnJvbSAnLi4vLi4vbW9kZWwvZmV0Y2gvZmV0Y2gtZGVmaW5pdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7RmV0Y2hSZXNwb25zZX0gZnJvbSAnLi4vLi4vbW9kZWwvZmV0Y2gvZmV0Y2gtcmVzcG9uc2UubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFNxbEZldGNoRGVmaW5pdGlvblNlcnZpY2UgZXh0ZW5kcyBCYXNlRmV0Y2hTZXJ2aWNlPElTcWxGZXRjaERlZmluaXRpb24sIEZldGNoUmVzcG9uc2U+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGh0dHA6IEh0dHBDbGllbnRcclxuICApIHtcclxuICAgIHN1cGVyKCcvc3FsLWZldGNoJywgaHR0cCk7XHJcbiAgICB0aGlzLkRFRkFVTFRfVVJMID0gdGhpcy5QVUJMSUNfVVJMO1xyXG4gIH1cclxufVxyXG4iXX0=