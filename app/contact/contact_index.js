
import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from '../navigation/navigation_bar.js';

const { Component } = React;

class ContactIndex extends Component{
  render() {
    return (
      <div className="contactIndex">
        <NavigationBar/>
      </div>
    );
  }
};

ReactDOM.render(
  <ContactIndex />,
  document.getElementById('content')
);