
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import getPageView from './components/navigation/get_page_view.js';
import reduxStore from './components/redux/redux_store.js';
import reduxComponentSubscriber from './components/redux/redux_component_subscriber.js';

const { Component } = React;

class Index extends Component {
  constructor(props) {
    super(props);
    reduxComponentSubscriber(this, {}, reduxStore, 'pageView');
  }

  render() {
    return (
      <div className="index">
        <Header/>
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