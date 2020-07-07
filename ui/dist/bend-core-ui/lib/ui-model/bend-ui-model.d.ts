import { BendUiField } from './bend-ui-field';
export declare class BendUiModel {
    name: string;
    fields: BendUiField[];
    tableStructure: TableStructure;
}
export declare class TableStructure {
    createTitle: string;
    updateTitle: string;
    actionColumn: ActionColumn;
    actionRoute: ActionRoute;
}
export declare class ActionColumn {
    title: string;
    actionViewName: string;
    actionEditName: string;
    actionDeleteName: string;
    actionDisableIndex: number;
}
export declare class ActionRoute {
    viewRoute: string;
    editRoute: string;
    deleteRoute: string;
    constructor(viewRoute?: string, editRoute?: string, deleteRoute?: string);
}
