
import React from 'react';
import NavigationButton from './navigation_button.js';

const { Component } = React;

class NavigationBar extends Component {
  render() {
    return <div className="navigationBar">
      <NavigationButton pageView="HOME" buttonText="Home"/>
      <NavigationButton pageView="CONTACT_US" buttonText="Contact Us"/>
    </div>;
  }
}

module.exports = NavigationBar;