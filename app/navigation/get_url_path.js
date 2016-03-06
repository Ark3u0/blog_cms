import config from '../config.js';

const html_indices = {
  'HOME': 'home.html',
  'CONTACT': 'contact.html'
};

module.exports = (pageViewName) => config.baseUrl + html_indices[pageViewName];