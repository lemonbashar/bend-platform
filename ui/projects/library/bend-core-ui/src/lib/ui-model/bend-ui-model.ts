import {BendUiField} from './bend-ui-field';

export class BendUiModel {
  name: string;
  fields: BendUiField[];
  tableStructure: TableStructure;
}

export class TableStructure {
  createTitle: string;
  updateTitle: string;
  actionColumn: ActionColumn;
  actionRoute: ActionRoute;
}

export class ActionColumn {
  title = 'ACTION';
  actionViewName = 'View';
  actionEditName = 'Edit';
  actionDeleteName = 'Delete';
  actionDisableIndex = 0;
}

export class ActionRoute {
  constructor(
    public viewRoute: string = 'bmu-crud/view',
    public editRoute: string = 'bmu-crud/edit',
    public deleteRoute: string = 'bmu-crud/delete'
  ) {
  }
}
