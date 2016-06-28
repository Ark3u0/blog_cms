
describe('getPageView', () => {
  const React = require('react');
  const Home = require('../../views/home.js');
  const About = require('../../views/about.js');
  const SubmitAVideo = require('../../views/submit_a_video.js');
  const Videos = require('../../views/videos.js');
  const getPageView = require("../get_page_view.js");

  it('should get the home page when HOME pageView name is provided', () => {
    expect(getPageView('HOME')).to.eql(<Home/>);
  });

  it('should get the about page when ABOUT pageView name is provided', () => {
    expect(getPageView('ABOUT')).to.eql(<About/>);
  });

  it('should not blowup when pageView does not exist', () => {
    expect(getPageView('INVALID_PAGE_VIEW')).to.eql(<div className="undefinedRoute"></div>);
  });
});