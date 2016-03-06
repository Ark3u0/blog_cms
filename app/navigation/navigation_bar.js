
import React from 'react';
import NavigationButton from './navigation_button.js';

const { Component } = React;

class NavigationBar extends Component {
  render() {
    return <div className="navigationBar" style={styles.navbar}>
      <NavigationButton width="50%" pageView="HOME" buttonText="Home"/>
      <NavigationButton width="50%" pageView="CONTACT_US" buttonText="Contact Us"/>
    </div>;
  }
}

const styles = {
  navbar: {
    borderBottom: '2px black solid'
  }
};

module.exports = NavigationBar;