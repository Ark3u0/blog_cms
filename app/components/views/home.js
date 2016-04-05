
import React from 'react';
import EmbedVideo from '../youtube/embed_video.js';

const { Component } = React;

class Home extends Component {
  render() {
    return <EmbedVideo/>;
  }
}

module.exports = Home;