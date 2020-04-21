import {ActionColumn, ActionRoute, BendUiModel} from 'bend-core-ui';

export const bendUserUiModel: BendUiModel = {
  name: 'User',
  tableStructure: {
    createTitle: 'Create New User',
    updateTitle: 'Update an User',
    actionColumn: new ActionColumn(),
    actionRoute: new ActionRoute('/bmu-crud/user-profile')
  },
  fields: [],
};
