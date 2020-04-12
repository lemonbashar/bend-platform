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
}

export class ActionColumn {
  title = 'Action';
  actionViewName = 'View';
  actionEditName = 'Edit';
  actionDeleteName = 'Delete';
  actionDisableIndex = 0;
}
