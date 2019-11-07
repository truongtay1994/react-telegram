import { TYPES } from './actions';

const middlewares = {};

middlewares[TYPES.SET_TITLE] = (store, next, action) => {
  next(action);
};

export default store => next => action => {
  middlewares[action.type] ? middlewares[action.type](store, next, action) : next(action);
};
