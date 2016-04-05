
import React from 'react';
import NavigationButton from './navigation_button.js';

const { Component, PropTypes } = React;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="navigationBar" style={styles.navbar}>
      <NavigationButton pageView="HOME" buttonText="Home" onClick={() => this.props.viewSetCallback('HOME')}/>
      <NavigationButton pageView="HOME" buttonText="About" onClick={() => this.props.viewSetCallback('ABOUT')}/>
      <NavigationButton pageView="HOME" buttonText="Videos" onClick={() => this.props.viewSetCallback('VIDEOS')}/>
      <NavigationButton pageView="HOME" buttonText="Submit a Video" onClick={() => this.props.viewSetCallback('SUBMIT_A_VIDEO')}/>
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