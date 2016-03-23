
import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navigation/navigation_bar.js';
import BlogEntry from './home/blog_entry.js';

const { Component } = React;

class ViewerIndex extends Component{
  render() {
    return (
      <div className="viewerIndex">
        <NavigationBar/>
        <BlogEntry/>
      </div>
    );
  }
};

ReactDOM.render(
  <ViewerIndex />,
  document.getElementById('content')
);