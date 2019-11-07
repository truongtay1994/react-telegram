import ACTIONS from './types';
import initialState from '../initialState';

const reducers = {};

reducers[ACTIONS.UPDATE_TOKEN] = (state, { token }) => {
  return {
    ...state,
    token
  };
};

export default function(state = initialState.user, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
