
import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from '../navigation/navigation_bar.js';

const { Component } = React;

class HomeIndex extends Component{
  render() {
    return (
      <div className="homeIndex">
        <NavigationBar/>
      </div>
    );
  }
};

ReactDOM.render(
  <HomeIndex />,
  document.getElementById('content')
);