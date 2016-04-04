
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
};

const style = {
  button: {
    backgroundColor: 'transparent',
    color: 'black',
    fontFamily: "Open Sans, Helvetica, Arial, sans-serif",
    fontSize: '1.3em',
    fontSize: '1.5vw',
    fontWeight: 300,
    marginLeft: '5%',
    marginRight: '5%',
    padding: '0.2em',
    border: 'none',
    borderRadius: 0
  },
  hover: {
    cursor: 'pointer',
    color: 'blue'
  }
};

module.exports = NavigationButton;