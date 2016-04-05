import React from 'react';
import NavigationBar from '../navigation/navigation_bar.js';
import config from '../../../config.js';
import Logo from './logo.js';

const { Component, PropTypes } = React;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="header" style={style.header}>
      <div className="website-logo" style={style.logo}>
        <Logo logoLink={config.logoUrl} pageView="HOME"/>
      </div>
      <div className="navbar" style={style.navbar}>
        <NavigationBar viewSetCallback={this.props.viewSetCallback}/>
      </div>
    </div>);
  }
}

Header.PropTypes = {
  viewSetCallback: PropTypes.func.isRequired
};

const style = {
  header: {
    width: "100%",
    position: 'fixed',
    top: '0px',
    zIndex: '1',
    height: '10vw',
    backgroundColor: 'white',
    opacity: '0.9'
  },

  logo: {
    width: "30%",
    height: "inherit",
    float: "left"
  },

  navbar: {
    width: "70%",
    float: "right",
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  }
};

module.exports = Header;