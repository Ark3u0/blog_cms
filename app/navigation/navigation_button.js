
import React from 'react';
import getPageView from './get_page_view.js'

const { Component, PropTypes } = React;

class NavigationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  mouseOver() {
    this.setState({hover: true});
  }

  mouseOut() {
    this.setState({hover: false});
  }

  buildActiveStyle() {
    let activeStyle = this.state.hover ? Object.assign({}, style.button, style.hover) : Object.assign({}, style.button);
    activeStyle = this.props.width ? Object.assign({}, activeStyle, {width: this.props.width}) : activeStyle;
    return activeStyle;
  }

  render() {
    const activeStyle = this.buildActiveStyle();
    return <a href={getPageView(this.props.pageView)}>
        <button onMouseOver={ () => this.mouseOver() }
                onMouseOut={ () => this.mouseOut() }
                style={activeStyle}>{this.props.buttonText}</button>
      </a>
  }
}

NavigationButton.propTypes = {
  pageView: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  width: PropTypes.string
};

const style = {
  button: {
    'backgroundColor': 'transparent',
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
    'cursor': 'pointer',
    'color': 'blue',
    'textDecoration': 'underline'
  }
};

module.exports = NavigationButton;