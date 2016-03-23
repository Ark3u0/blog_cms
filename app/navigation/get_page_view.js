const html_indices = {
  'HOME': 'viewer.html'
};

module.exports = (pageViewName) => {
  return html_indices[pageViewName] || '';
};