import ACTIONS from './types';
import initialState from '../initialState';

const reducers = {};

reducers[ACTIONS.SET_TITLE] = (state, { title }) => {
  return {
    ...state,
    title
  };
};

reducers[ACTIONS.CHANGE_DIMENSIONS] = (state, { width, height }) => {
  return {
    ...state,
    width,
    height
  };
};

reducers[ACTIONS.CHANGE_NAVIGATION_STATE] = (state, { bool }) => {
  return {
    ...state,
    navIsActive: bool
  };
};

export default function(state = initialState.app, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
