
describe('getUrlPath', () => {
  const getUrlPath = require("../get_url_path.js");
  const config = require('../../config.js');

  it('should get the home page when HOME pageView name is provided', () => {
    expect(getUrlPath('HOME')).to.eq(config.baseUrl + 'home.html');
  });

  it('should get the contact us page when CONTACT_US pageView name is provided', () => {
    expect(getUrlPath('CONTACT_US')).to.eq(config.baseUrl + 'contact.html');
  });

  it('should return the baseUrl when pageView does not exist', () => {
    expect(getUrlPath('INVALID_PAGE_VIEW')).to.eq(config.baseUrl);
  });
});