
import React from 'react';

const { Component, PropTypes } = React;

class BlogNode extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blogNode">
       Hello
      </div>
    );
  }
};

module.exports = BlogNode;