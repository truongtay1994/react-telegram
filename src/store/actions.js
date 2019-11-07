import userActions from './user/actions';
import appActions from './app/actions';

import userTypes from './user/types';
import appTypes from './app/types';

export default {
  ...userActions,
  ...appActions
};

export const TYPES = {
  ...userTypes,
  ...appTypes
};
