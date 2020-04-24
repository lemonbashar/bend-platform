import {ActionColumn, ActionRoute, BendUiModel, RouteUtil} from 'bend-core-ui';
import {environment} from '../../../environments/environment';

const userRoutes = environment.routes.crud.user_crud;

export const bendUserUiModel: BendUiModel = {
  name: 'User',
  tableStructure: {
    createTitle: 'Create New User',
    updateTitle: 'Update an User',
    actionColumn: new ActionColumn(),
    // actionRoute: new ActionRoute('/bmu-crud/user-profile')
    actionRoute: new ActionRoute(RouteUtil.startFromThis(userRoutes.user_view))
  },
  fields: [],
};
