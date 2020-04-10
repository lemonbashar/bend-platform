import {ActionColumn, BendUiModel} from 'bend-core-ui';

export const bendUserUiModel: BendUiModel = {
  name: 'User',
  tableStructure: {
    createTitle: 'Create New User',
    updateTitle: 'Update an User',
    actionColumn: new ActionColumn()
  },
  fields: [],
};
