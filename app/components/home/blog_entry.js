
import React from 'react';
import jsonRequest from '../network/json_request.js';
import _ from 'lodash';

const { Component, PropTypes } = React;

class BlogEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    jsonRequest('./stubbed_data/json_data.json').then((result) => {
      this.setState({
        title: result.json.title,
        body: result.json.body,
        date: result.json.date
      });
    }).catch((result) => {
      console.log(result);
    });
  }

  parseBody() {
    return <a>{this.state.body}</a>
  }

  render() {
    return (
      <div className="blogEntry">
        <h2 className="title">
          {this.state.title}
        </h2>
        <div className="date">
          {this.state.date}
        </div>
        <div className="body">
          {this.parseBody()}
        </div>
      </div>);
  }
};

module.exports = BlogEntry;