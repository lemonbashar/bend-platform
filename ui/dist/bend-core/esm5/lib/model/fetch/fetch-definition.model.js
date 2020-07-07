import { __extends } from "tslib";
export var IJoinType;
(function (IJoinType) {
    IJoinType[IJoinType["INNER_JOIN"] = 0] = "INNER_JOIN";
    IJoinType[IJoinType["LEFT_JOIN"] = 1] = "LEFT_JOIN";
    IJoinType[IJoinType["RIGHT_JOIN"] = 2] = "RIGHT_JOIN";
    IJoinType[IJoinType["LEFT_OUTER_JOIN"] = 3] = "LEFT_OUTER_JOIN";
    IJoinType[IJoinType["RIGHT_OUTER_JOIN"] = 4] = "RIGHT_OUTER_JOIN";
    IJoinType[IJoinType["FULL_JOIN"] = 5] = "FULL_JOIN";
})(IJoinType || (IJoinType = {}));
var SqlJoin = /** @class */ (function () {
    function SqlJoin(joinType, dependentAlias, relationName, alias) {
        this.joinType = joinType;
        this.dependentAlias = dependentAlias;
        this.relationName = relationName;
        this.alias = alias;
    }
    return SqlJoin;
}());
export { SqlJoin };
var Parameter = /** @class */ (function () {
    function Parameter(name, value) {
        this.name = name;
        this.value = value;
    }
    return Parameter;
}());
export { Parameter };
var FetchDefinition = /** @class */ (function () {
    function FetchDefinition() {
    }
    return FetchDefinition;
}());
export { FetchDefinition };
var SqlFetchDefinition = /** @class */ (function (_super) {
    __extends(SqlFetchDefinition, _super);
    function SqlFetchDefinition() {
        return _super.call(this) || this;
    }
    return SqlFetchDefinition;
}(FetchDefinition));
export { SqlFetchDefinition };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2gtZGVmaW5pdGlvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbC9mZXRjaC9mZXRjaC1kZWZpbml0aW9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLENBQU4sSUFBWSxTQU9YO0FBUEQsV0FBWSxTQUFTO0lBQ25CLHFEQUFVLENBQUE7SUFDVixtREFBUyxDQUFBO0lBQ1QscURBQVUsQ0FBQTtJQUNWLCtEQUFlLENBQUE7SUFDZixpRUFBZ0IsQ0FBQTtJQUNoQixtREFBUyxDQUFBO0FBQ1gsQ0FBQyxFQVBXLFNBQVMsS0FBVCxTQUFTLFFBT3BCO0FBU0Q7SUFDRSxpQkFDUyxRQUFtQixFQUNuQixjQUFzQixFQUN0QixZQUFvQixFQUNwQixLQUFhO1FBSGIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQ25CLENBQUM7SUFDTixjQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7O0FBT0Q7SUFDRSxtQkFDUyxJQUFZLEVBQ1osS0FBYTtRQURiLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQ25CLENBQUM7SUFDTixnQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOztBQWdCRDtJQUdFO0lBQ0csQ0FBQztJQUNOLHNCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7O0FBRUQ7SUFBd0Msc0NBQWU7SUFPckQ7ZUFBZ0IsaUJBQU87SUFBRSxDQUFDO0lBQzVCLHlCQUFDO0FBQUQsQ0FBQyxBQVJELENBQXdDLGVBQWUsR0FRdEQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBJSm9pblR5cGUge1xyXG4gIElOTkVSX0pPSU4sXHJcbiAgTEVGVF9KT0lOLFxyXG4gIFJJR0hUX0pPSU4sXHJcbiAgTEVGVF9PVVRFUl9KT0lOLFxyXG4gIFJJR0hUX09VVEVSX0pPSU4sXHJcbiAgRlVMTF9KT0lOXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNxbEpvaW4ge1xyXG4gIGpvaW5UeXBlOiBJSm9pblR5cGU7XHJcbiAgZGVwZW5kZW50QWxpYXM6IHN0cmluZztcclxuICByZWxhdGlvbk5hbWU6IHN0cmluZztcclxuICBhbGlhczogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3FsSm9pbiBpbXBsZW1lbnRzIElTcWxKb2luIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBqb2luVHlwZTogSUpvaW5UeXBlLFxyXG4gICAgcHVibGljIGRlcGVuZGVudEFsaWFzOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcmVsYXRpb25OYW1lOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgYWxpYXM6IHN0cmluZ1xyXG4gICkge31cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyYW1ldGVyIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlciBpbXBsZW1lbnRzIElQYXJhbWV0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nXHJcbiAgKSB7fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElGZXRjaERlZmluaXRpb24ge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIGRvbWFpbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTcWxGZXRjaERlZmluaXRpb24gZXh0ZW5kcyBJRmV0Y2hEZWZpbml0aW9uIHtcclxuICBjb2x1bW5zOiBzdHJpbmdbXTtcclxuICBjb25kaXRpb246IHN0cmluZztcclxuICBqb2luczogSVNxbEpvaW5bXTtcclxuICBvcmRlckJ5OiBzdHJpbmc7XHJcbiAgYWxpYXM6IHN0cmluZztcclxuICBwYXJhbWV0ZXJzOiBJUGFyYW1ldGVyW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGZXRjaERlZmluaXRpb24gaW1wbGVtZW50cyBJRmV0Y2hEZWZpbml0aW9uIHtcclxuICBwdWJsaWMga2V5OiBzdHJpbmc7XHJcbiAgcHVibGljIGRvbWFpbjogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNxbEZldGNoRGVmaW5pdGlvbiBleHRlbmRzIEZldGNoRGVmaW5pdGlvbiBpbXBsZW1lbnRzIElTcWxGZXRjaERlZmluaXRpb24ge1xyXG4gIHB1YmxpYyBjb2x1bW5zOiBzdHJpbmdbXTtcclxuICBwdWJsaWMgY29uZGl0aW9uOiBzdHJpbmc7XHJcbiAgcHVibGljIGpvaW5zOiBJU3FsSm9pbltdO1xyXG4gIHB1YmxpYyBvcmRlckJ5OiBzdHJpbmc7XHJcbiAgcHVibGljIGFsaWFzOiBzdHJpbmc7XHJcbiAgcHVibGljIHBhcmFtZXRlcnM6IElQYXJhbWV0ZXJbXTtcclxuICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG59XHJcbiJdfQ==