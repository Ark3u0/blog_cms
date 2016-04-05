
describe('NavigationButton', () => {
  const getPageViewStub = sinon.stub();
  jest.setMock('../get_page_view.js', getPageViewStub);

  const NavigationButton = require("../navigation_button.js");

  beforeEach(() => {
    getPageViewStub.reset().returns();
  });

  describe('propType inputs', () => {
    it('should set text on button when buttonText is passed in', () => {
      const navButton = shallowRenderComponent(<NavigationButton buttonText="Click Me!" onClick={() => {}}/>);
      const button = getComponentByType(navButton, 'button');
      expect(button.props.children).to.eq("Click Me!");
    });

    it('should set onClick method when passed in and method should be called on click', () => {
      const onClickStub = sinon.stub();
      const navButton = getShallowRendererForComponent(<NavigationButton buttonText='Click Me!' onClick={onClickStub}/>);
      const button = navButton.getRenderOutput();
      button.props.onClick();
      expect(onClickStub).to.be.called;
    });
  });

  describe('mouse hovering', () => {
    it('should set hover state to true from false when button has mouse over it', () => {
      const navButton = getShallowRendererForComponent(<NavigationButton buttonText="Click Something" onClick={() => {}}/>);
      const button = navButton.getRenderOutput();

      expect(navButton.getState().hover).to.eql(false);
      button.props.onMouseOver();
      expect(navButton.getState().hover).to.eql(true);
    });

    it('should set hover state to false from true when  mouse moves off button', () => {
      const navButton = getShallowRendererForComponent(<NavigationButton buttonText="Click Something" onClick={() => {}}/>);
      const button = navButton.getRenderOutput();
      navButton.setState({hover: true});

      button.props.onMouseOut();
      expect(navButton.getState().hover).to.eql(false);
    });
  });
});