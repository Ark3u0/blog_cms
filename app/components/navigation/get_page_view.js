const Home = require('../views/home.js');
const About = require('../views/about.js');
const MakeAPost = require('../views/make_a_post.js');
const React = require('react');

const routes = {
  'HOME': <Home/>,
  'ABOUT': <About/>,
  'MAKE_A_POST': <MakeAPost/>
};

module.exports = (pageViewName) => {
  return routes[pageViewName] || <div className="undefinedRoute"></div>;
};