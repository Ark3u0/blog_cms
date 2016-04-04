
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';

const { Component } = React;

class Index extends Component {
  render() {
    return (
      <div className="index">
        <Header/>
        <div className="body" style={styles.body}>
          <a>BODY</a>
        </div>
      </div>
    );
  }
};

const styles = {
  body: {
    position: 'relative',
    overflow: 'scroll',
    width: '60%',
    margin: 'auto',
    marginTop: '10em'
  }
};

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);