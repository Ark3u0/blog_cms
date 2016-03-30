
import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navigation/navigation_bar.js';
import BlogEntry from './components/home/blog_entry.js';

const { Component } = React;

class Index extends Component {
  render() {
    return (
      <div className="index">
        <div className="header" style={styles.header}>
          <NavigationBar/>
        </div>
        <div className="body" style={styles.body}>
          <BlogEntry/>
          <BlogEntry/>
          <BlogEntry/>
          <BlogEntry/>
          <BlogEntry/>
        </div>
      </div>
    );
  }
};

const styles = {
  header: {
    position: 'fixed',
    top: '0px',
    width: '100%',
    background: 'oldlace',
    zIndex: '1'
  },

  body: {
    position: 'relative',
    overflow: 'scroll',
    width: '60%',
    margin: 'auto',
    marginTop: '5em'
  }
};

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);