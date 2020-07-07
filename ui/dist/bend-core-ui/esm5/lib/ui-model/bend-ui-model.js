var BendUiModel = /** @class */ (function () {
    function BendUiModel() {
    }
    return BendUiModel;
}());
export { BendUiModel };
var TableStructure = /** @class */ (function () {
    function TableStructure() {
    }
    return TableStructure;
}());
export { TableStructure };
var ActionColumn = /** @class */ (function () {
    function ActionColumn() {
        this.title = 'ACTION';
        this.actionViewName = 'View';
        this.actionEditName = 'Edit';
        this.actionDeleteName = 'Delete';
        this.actionDisableIndex = 0;
    }
    return ActionColumn;
}());
export { ActionColumn };
var ActionRoute = /** @class */ (function () {
    function ActionRoute(viewRoute, editRoute, deleteRoute) {
        if (viewRoute === void 0) { viewRoute = '/bmu-crud/view'; }
        if (editRoute === void 0) { editRoute = '/bmu-crud/edit'; }
        if (deleteRoute === void 0) { deleteRoute = '/bmu-crud/delete'; }
        this.viewRoute = viewRoute;
        this.editRoute = editRoute;
        this.deleteRoute = deleteRoute;
    }
    return ActionRoute;
}());
export { ActionRoute };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC11aS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JlbmQtY29yZS11aS8iLCJzb3VyY2VzIjpbImxpYi91aS1tb2RlbC9iZW5kLXVpLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0lBQUE7SUFJQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7QUFFRDtJQUFBO0lBS0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7O0FBRUQ7SUFBQTtRQUNFLFVBQUssR0FBRyxRQUFRLENBQUM7UUFDakIsbUJBQWMsR0FBRyxNQUFNLENBQUM7UUFDeEIsbUJBQWMsR0FBRyxNQUFNLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQzVCLHVCQUFrQixHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7QUFFRDtJQUNFLHFCQUNTLFNBQW9DLEVBQ3BDLFNBQW9DLEVBQ3BDLFdBQXdDO1FBRnhDLDBCQUFBLEVBQUEsNEJBQW9DO1FBQ3BDLDBCQUFBLEVBQUEsNEJBQW9DO1FBQ3BDLDRCQUFBLEVBQUEsZ0NBQXdDO1FBRnhDLGNBQVMsR0FBVCxTQUFTLENBQTJCO1FBQ3BDLGNBQVMsR0FBVCxTQUFTLENBQTJCO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUE2QjtJQUVqRCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmVuZFVpRmllbGR9IGZyb20gJy4vYmVuZC11aS1maWVsZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmVuZFVpTW9kZWwge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBmaWVsZHM6IEJlbmRVaUZpZWxkW107XHJcbiAgdGFibGVTdHJ1Y3R1cmU6IFRhYmxlU3RydWN0dXJlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVTdHJ1Y3R1cmUge1xyXG4gIGNyZWF0ZVRpdGxlOiBzdHJpbmc7XHJcbiAgdXBkYXRlVGl0bGU6IHN0cmluZztcclxuICBhY3Rpb25Db2x1bW46IEFjdGlvbkNvbHVtbjtcclxuICBhY3Rpb25Sb3V0ZTogQWN0aW9uUm91dGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25Db2x1bW4ge1xyXG4gIHRpdGxlID0gJ0FDVElPTic7XHJcbiAgYWN0aW9uVmlld05hbWUgPSAnVmlldyc7XHJcbiAgYWN0aW9uRWRpdE5hbWUgPSAnRWRpdCc7XHJcbiAgYWN0aW9uRGVsZXRlTmFtZSA9ICdEZWxldGUnO1xyXG4gIGFjdGlvbkRpc2FibGVJbmRleCA9IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25Sb3V0ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdmlld1JvdXRlOiBzdHJpbmcgPSAnL2JtdS1jcnVkL3ZpZXcnLFxyXG4gICAgcHVibGljIGVkaXRSb3V0ZTogc3RyaW5nID0gJy9ibXUtY3J1ZC9lZGl0JyxcclxuICAgIHB1YmxpYyBkZWxldGVSb3V0ZTogc3RyaW5nID0gJy9ibXUtY3J1ZC9kZWxldGUnXHJcbiAgKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==