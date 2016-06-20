import _ from 'lodash';

module.exports = (component, initialComponentState, reduxStore, reducerMapping) => {
  component.state = Object.assign({}, reduxStore.getState()[reducerMapping], initialComponentState);

  const unsubscribe = reduxStore.subscribe(() => {
    if (!_.isEqual(reduxStore.getState()[reducerMapping], component.state)) {
      const newState = Object.assign({}, reduxStore.getState()[reducerMapping]);
      component.setState(newState);
    }
  });

  const defaultComponentWillUnmount = component.componentWillUnmount;

  component.componentWillUnmount = () => {
    defaultComponentWillUnmount();
    unsubscribe();
  };
};