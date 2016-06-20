
import React from 'react';
import NavigationButton from './navigation_button.js';
import reduxStore from '../redux/redux_store.js';

const { Component } = React;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="navigationBar" style={styles.navbar}>
      <NavigationButton buttonText="Home" onClick={() => reduxStore.dispatch({type: 'VIEW_HOME'})}/>
      <NavigationButton buttonText="About" onClick={() => reduxStore.dispatch({type: 'VIEW_ABOUT'})}/>
    </div>;
  }
}

const styles = {
  navbar: {
    width: '100%',
    alignItems: 'center'
  }
};

module.exports = NavigationBar;