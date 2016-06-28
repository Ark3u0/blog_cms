
describe('parseMouseClick', () => {
  const parseMouseClick = require("../parse_mouse_click.js");

  it('should recognize button click of 0 as LEFT_CLICK', () => {
    expect(parseMouseClick({button: 0})).to.eql('LEFT_CLICK');
  });

  it('should recognize button click of 1 as MIDDLE_CLICK', () => {
    expect(parseMouseClick({button: 1})).to.eql('MIDDLE_CLICK');
  });

  it('should recognize button click of 0 as RIGHT_CLICK', () => {
    expect(parseMouseClick({button: 2})).to.eql('RIGHT_CLICK');
  });

  it('should throw exception if button click is not 0, 1, or 2', () => {
    let exceptionThrown = false;

    try {
      parseMouseClick({button: -1});
    } catch (ex) {
      exceptionThrown = true;
      expect(ex).to.eql('Mouse click value is not defined.');
    }

    if (!exceptionThrown) {
      throw 'parseMouseClick should throw exception';
    }
  });

  it('should throw exception if button click is undefined', () => {
    let exceptionThrown = false;

    try {
      parseMouseClick({});
    } catch (ex) {
      exceptionThrown = true;
      expect(ex).to.eql('Mouse click value is not defined.');
    }

    if (!exceptionThrown) {
      throw 'parseMouseClick should throw exception';
    }
  });
});