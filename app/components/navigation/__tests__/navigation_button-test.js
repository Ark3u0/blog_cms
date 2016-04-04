
describe('NavigationButton', () => {
  const getPageViewStub = sinon.stub();
  jest.setMock('../get_page_view.js', getPageViewStub);

  const NavigationButton = require("../navigation_button.js");

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
  });

  describe('mouse hovering', () => {
    it('should set hover state to true from false when button has mouse over it', () => {
      const navButton = getShallowRendererForComponent(<NavigationButton pageView='testView' buttonText="Click Something"/>);
      const button = navButton.getRenderOutput().props.children;

      expect(navButton.getState().hover).to.eql(false);
      button.props.onMouseOver();
      expect(navButton.getState().hover).to.eql(true);
    });

    it('should set hover state to false from true when  mouse moves off button', () => {
      const navButton = getShallowRendererForComponent(<NavigationButton pageView='testView' buttonText="Click Something"/>);
      const button = navButton.getRenderOutput().props.children;
      navButton.setState({hover: true});

      button.props.onMouseOut();
      expect(navButton.getState().hover).to.eql(false);
    });
  });
});