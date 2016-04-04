
import React from 'react';
import NavigationButton from './navigation_button.js';

const { Component } = React;

class NavigationBar extends Component {
  render() {
    return <div className="navigationBar" style={styles.navbar}>
      <NavigationButton pageView="HOME" buttonText="Home"/>
      <NavigationButton pageView="HOME" buttonText="About"/>
      <NavigationButton pageView="HOME" buttonText="Videos"/>
      <NavigationButton pageView="HOME" buttonText="Submit a Video"/>
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