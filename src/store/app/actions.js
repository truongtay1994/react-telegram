import ACTIONS from './types';

const actions = {};

actions.changeDimensions = (width, height) => ({
  type: ACTIONS.CHANGE_DIMENSIONS,
  width,
  height
});

actions.setTitle = title => ({
  type: ACTIONS.SET_TITLE,
  title
});

actions.changeNavigationState = bool => ({
  type: ACTIONS.CHANGE_NAVIGATION_STATE,
  bool
});

export default actions;
