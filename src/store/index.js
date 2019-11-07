import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { TYPES } from './actions';
import reducers from './reducers';
import initial from './initialState';
import middleware from './middleware';

const loggerIgnoreList = [TYPES.SET_TITLE];

const logger = createLogger({
  predicate: (getState, action) => !loggerIgnoreList.includes(action.type)
});

const middlewares = [middleware, thunk, process.browser && logger];

export const initStore = (initialState = initial) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares.filter(item => !!item)))
  );
};
