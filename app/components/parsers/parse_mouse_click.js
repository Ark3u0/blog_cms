const LEFT_CLICK = 0;
const MIDDLE_CLICK = 1;
const RIGHT_CLICK = 2;

module.exports = (event) => {
  switch (event.button) {
    case LEFT_CLICK:
      return "LEFT_CLICK";
    case MIDDLE_CLICK:
      return "MIDDLE_CLICK";
    case RIGHT_CLICK:
      return "RIGHT_CLICK";
    default:
      throw 'Mouse click value is not defined.';
  }
};
