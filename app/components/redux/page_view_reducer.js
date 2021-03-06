module.exports = (state = {currentView: 'HOME'}, action = {}) => {
  if (action.type === 'VIEW_HOME' && state.currentView !== 'HOME') {
    return Object.assign({}, state, {currentView: 'HOME'});
  }

  if (action.type === 'VIEW_ABOUT' && state.currentView !== 'ABOUT') {
    return Object.assign({}, state, {currentView: 'ABOUT'});
  }

  if (action.type === 'VIEW_MAKE_A_POST' && state.currentView !== 'MAKE_A_POST') {
    return Object.assign({}, state, {currentView: 'MAKE_A_POST'});
  }

  return state;
};