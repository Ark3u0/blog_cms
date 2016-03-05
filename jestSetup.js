jest.dontMock('chai');
jest.dontMock('sinon');
jest.dontMock('sinon-chai');
jest.dontMock('lodash');

sinon = require('sinon');
chai = require('chai');
chai.use(require('sinon-chai'));
expect = chai.expect;

_ = require('lodash');

jest.autoMockOff();