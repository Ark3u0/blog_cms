const html_indices = {
  'HOME': 'home.html',
  'CONTACT_US': 'contact.html'
};

module.exports = (pageViewName) => {
  return html_indices[pageViewName] || '';
};