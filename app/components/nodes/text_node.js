import Node from './node.js';

class TextNode extends Node {
  constructor(options) {
    super(options);
    this.text = options.text || '';
  }

  getSimpleNodeTree() {
    return {Text: this.text};
  }
}

module.exports = TextNode;