import { combineReducers } from 'redux';

import userReducers from './user/reducers';
import appReducers from './app/reducers';

export default combineReducers({
  user: userReducers,
  app: appReducers
});
