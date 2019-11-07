import ACTIONS from './types';

const actions = {};

actions.updateToken = token => ({
  type: ACTIONS.UPDATE_TOKEN,
  token
});

export default actions;
