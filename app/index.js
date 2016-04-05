
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import EmbedVideo from './components/youtube/embed_video.js';
import getPageView from './components/navigation/get_page_view.js';

const { Component } = React;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {currentView: 'HOME'};
  }

  setCurrentViewName(route) {
    this.setState({currentView: route});
  }

  render() {
    return (
      <div className="index">
        <Header viewSetCallback={(route) => this.setCurrentViewName(route)}/>
        <div className="body" style={styles.body}>
          {getPageView(this.state.currentView)}
        </div>
      </div>
    );
  }
}

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