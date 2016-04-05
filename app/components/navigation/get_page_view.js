const Home = require('../views/home.js');
const About = require('../views/about.js');
const Videos = require('../views/videos.js');
const SubmitAVideo = require('../views/submit_a_video.js');
const React = require('react');

const routes = {
  'HOME': <Home/>,
  'ABOUT': <About/>,
  'VIDEOS': <Videos/>,
  'SUBMIT_A_VIDEO': <SubmitAVideo/>
};

module.exports = (pageViewName) => {
  return routes[pageViewName] || <div className="undefinedRoute"></div>;
};