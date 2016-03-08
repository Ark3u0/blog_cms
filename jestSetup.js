jest.autoMockOff();

global.sinon = require('sinon');
global.chai = require('chai');
global.ReactTestUtils = require('react-addons-test-utils');
global.React = require('react');

chai.use(require('sinon-chai'));
global.expect = chai.expect;

global.shallowRenderComponent = (component) => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(component);
  return shallowRenderer.getRenderOutput();
};

global.getShallowRendererForComponent = (component) => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  return shallowRenderer.render(component);
};

global.getComponentByProp = (component, qualifier, value) => {
  let qualifierValue, element;

  for (element = Object.assign({}, component);
       typeof element !== 'undefined' && typeof element.props !== 'undefined';
       element = element.props.children) {

    if (element.props[qualifier] === value) {
      return element;
    }
  }
};

global.getComponentByType = (component, value) => {
  let qualifierValue, element;

  for (element = Object.assign({}, component);
       typeof element !== 'undefined' && typeof element.props !== 'undefined';
       element = element.props.children) {

    if (element.type === value) {
      return element;
    }
  }
};
