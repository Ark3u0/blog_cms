
import React from 'react';
import ReactDOM from 'react-dom';
import config from '../../../config.js';
import youTubePlayer from 'youtube-player';

const { Component } = React;

const playerStateNames = {
  '-1': 'unstarted',
  0: 'ended',
  1: 'playing',
  2: 'paused',
  3: 'buffering',
  5: 'video cued'
};

class EmbedVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {player: {}, playerState: 'unstarted', iframeApiLoaded: false};
  }

  componentDidMount() {
    let player = youTubePlayer("player", {width: 840, height: 472, videoId: config.videoId});
    player.on('ready', () => {this.onPlayerReady()});
    player.on('stateChange', () => {this.onPlayerStateChange()});
    this.setState({player: player});
  }

  render() {
    return <div className="embedVideo" style={styles.embedVideo}>
      <div id="player" style={styles.player}></div>
    </div>;
  }

  onPlayerReady(event) {
    this.state.player.playVideo();
  }

  onPlayerStateChange(event) {
    let playerState = event ? JSON.parse(event.data) : JSON.parse(window.event.data);
    this.setState({playerState: playerStateNames[playerState.info]});
  }

  stopVideo() {
    this.state.player.stopVideo();
  }
}

const styles = {
  embedVideo: {
    overflow: 'hidden',
    position: 'relative',
    height: 0,
    paddingBottom: '56.25%',
    paddingTop: '30px'
  },

  player: {
    width: '80%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
};

module.exports = EmbedVideo;