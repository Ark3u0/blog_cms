
describe('NavigationButton', () => {
  const getPageViewStub = sinon.stub();
  jest.setMock('../get_page_view.js', getPageViewStub);

  const NavigationButton = require("../navigation_button.js");
  const config = require('../../config.js');

  beforeEach(() => {
    getPageViewStub.reset().returns();
  });

  describe('propType inputs', () => {
    it('should set href to home page view when pageView is HOME', () => {
      getPageViewStub.returns("home page view");
      const navButton = shallowRenderComponent(<NavigationButton pageView='HOME' buttonText=""/>);
      expect(navButton.props.href).to.eq("home page view");
    });

    it('should set text on button when buttonText is passed in', () => {
      const navButton = shallowRenderComponent(<NavigationButton pageView='' buttonText="Click Me!"/>);
      const button = getComponentByType(navButton, 'button');
      expect(button.props.children).to.eq("Click Me!");
    });

    it('should set width of button when width is passed in', () => {
      const navButton = shallowRenderComponent(<NavigationButton pageView='' width="10%" buttonText=""/>);
      const button = getComponentByType(navButton, 'button');
      expect(button.props.style.width).to.eq("10%");
    });

    it('should default width of button to 10em when no width is passed in', () => {
      const navButton = shallowRenderComponent(<NavigationButton pageView='' buttonText=""/>);
      const button = getComponentByType(navButton, 'button');
      expect(button.props.style.width).to.eq("10em");
    });
  });
});