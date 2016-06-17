
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import EmbedVideo from './components/youtube/embed_video.js';
import getPageView from './components/navigation/get_page_view.js';

const { Component } = React;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {currentView: 'HOME', loading: true};
  }

  setCurrentView(route) {
    this.setState({currentView: route});
  }

  render() {
    return (
      <div className="index">
        <Header viewSetCallback={(route) => this.setCurrentView(route)}/>
        <div className="body" style={styles.body}>
          {getPageView(this.state.currentView)}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({loading: false});
  }

  componentDidUpdate() {
    if (this.state.loading) {
      this.setState({loading: false});
      console.log('here 23');
    }
  }
}

const styles = {
  body: {
    position: 'relative',
    width: '60%',
    margin: 'auto',
    marginTop: '12vw',
    overflow: 'hidden'
  }
};

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);