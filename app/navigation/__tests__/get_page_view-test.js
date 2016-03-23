
describe('getPageView', () => {
  const getPageView = require("../get_page_view.js");

  it('should get the home page when HOME pageView name is provided', () => {
    expect(getPageView('HOME')).to.eq('viewer.html');
  });

  it('should not blowup when pageView does not exist', () => {
    expect(getPageView('INVALID_PAGE_VIEW')).to.eq('');
  });
});