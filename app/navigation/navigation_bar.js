
import React from 'react';
import NavigationButton from './navigation_button.js';

const { Component } = React;

class NavigationBar extends Component {
  render() {
    return <div className="navigationBar" style={styles.navbar}>
      <NavigationButton width="100%" pageView="HOME" buttonText="Home"/>
    </div>;
  }
}

const styles = {
  navbar: {
    borderBottom: '2px black solid'
  }
};

module.exports = NavigationBar;