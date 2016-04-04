
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import EmbedVideo from './components/youtube/embed_video.js';

const { Component } = React;

class Index extends Component {
  render() {
    return (
      <div className="index">
        <Header/>
        <div className="body" style={styles.body}>
          <EmbedVideo/>
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
    marginTop: '12vw'
  }
};

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);