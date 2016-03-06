
import React from 'react';
import getUrlPath from './get_url_path.js'

const { Component, PropTypes } = React;

class NavigationButton extends Component {
  render() {
    return <a href={getUrlPath(this.props.pageView)}>
        <button>{this.props.buttonText}</button>
      </a>
  }
}

NavigationButton.propTypes = {
  pageView: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};

module.exports = NavigationButton;