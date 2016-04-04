
import React from 'react';
import getPageView from '../navigation/get_page_view.js'

const { Component, PropTypes } = React;

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <a href={getPageView(this.props.pageView)} >
      <img src={this.props.logoLink} style={style.logo}/>
    </a>
  }
}

Logo.propTypes = {
  pageView: PropTypes.string.isRequired,
  logoLink: PropTypes.string.isRequired
};

const style = {
  logo: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'transparent',
    border: 'none',
    maxWidth: '80%',
    maxHeight: '80%',
    height: 'auto',
    width: 'auto'
  }
};

module.exports = Logo;