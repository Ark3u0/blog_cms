jest.autoMockOff();

global.sinon = require('sinon');
global.chai = require('chai');
global.ReactTestUtils = require('react-addons-test-utils');
global.React = require('react');
global._ = require('lodash');

chai.use(require('sinon-chai'));
global.expect = chai.expect;

global.shallowRenderComponent = (component) => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(component);
  return shallowRenderer.getRenderOutput();
};

global.renderIntoDocument = ReactTestUtils.renderIntoDocument;

global.getShallowRendererForComponent = (component) => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(component);

  shallowRenderer.getState = () => {return shallowRenderer._instance._instance.state};
  shallowRenderer.setState = (input) => {return shallowRenderer._instance._instance.setState(input)};

  return shallowRenderer;
};

global.getComponentByProp = (component, qualifier, value) => {
  let element;

  for (element = Object.assign({}, component);
       (element instanceof Array) ||
       (typeof element !== 'undefined' && typeof element.props !== 'undefined');
       element = element.props.children) {

    if (element instanceof Array) {
      const childSearchResult = _.map(element, (child) => {
        return getComponentByProp(child, qualifier, value);
      });

      element = _.find(childSearchResult, (child) => {
        return typeof child !== 'undefined';
      });
    }

    if (element.props[qualifier] === value) {
      return element;
    }
  }
};

global.getComponentByType = (component, value) => {
  let qualifierValue, element;

  for (element = Object.assign({}, component);
       (element instanceof Array) ||
       (typeof element !== 'undefined' && typeof element.props !== 'undefined');
       element = element.props.children) {

    if (element instanceof Array) {
      const childSearchResult = _.map(element, (child) => {
        return getComponentByProp(child, qualifier, value);
      });

      element = _.find(childSearchResult, (child) => {
        return typeof child !== 'undefined';
      });
    }

    if (element.type === value) {
      return element;
    }
  }
};
