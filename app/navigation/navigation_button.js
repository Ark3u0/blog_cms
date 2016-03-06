
import React from 'react';
import getUrlPath from './get_url_path.js'

const { Component, PropTypes, StyleSheet } = React;

class NavigationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  mouseOver() {
    this.setState({hover: true});
    console.log(this.state.hover);
  }

  mouseOut() {
    this.setState({hover: false});
    console.log(this.state.hover);
  }

  render() {
    const activeStyle = this.state.hover ? Object.assign({}, style.button, style.hover) : Object.assign({}, style.button);
    return <a href={getUrlPath(this.props.pageView)}>
        <button onMouseOver={ () => this.mouseOver() }
                onMouseOut={ () => this.mouseOut() }
                style={activeStyle}>{this.props.buttonText}</button>
      </a>
  }
}

NavigationButton.propTypes = {
  pageView: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};

const style = {
  button: {
    'backgroundColor': 'transparent',
    'boxShadow': 'none',
    'color': 'black',
    'boxSizing': 'border-box',
    'WebkitFontSmoothing': 'antialiased',
    'fontFamily': "Open Sans, Helvetica, Arial, sans-serif",
    'fontSize': '1.3em',
    'fontWeight': 300,
    'width': '10em',
    'padding': '0.2em',
    'border': 'none',
    'borderRadius': 0
  },
  hover: {
    'transform': 'translate(0px, -2px)',
    'cursor': 'pointer'
  }
};

module.exports = NavigationButton;