
import React from 'react';
import NavigationButton from './navigation_button.js';

const { Component, PropTypes } = React;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="navigationBar" style={styles.navbar}>
      <NavigationButton buttonText="Home" onClick={() => this.props.viewSetCallback('HOME')}/>
      <NavigationButton buttonText="About" onClick={() => this.props.viewSetCallback('ABOUT')}/>
      <NavigationButton buttonText="Videos" onClick={() => this.props.viewSetCallback('VIDEOS')}/>
    </div>;
  }
}

NavigationBar.PropTypes = {
  viewSetCallback: PropTypes.func.isRequired
};

const styles = {
  navbar: {
    width: '100%',
    alignItems: 'center'
  }
};

module.exports = NavigationBar;