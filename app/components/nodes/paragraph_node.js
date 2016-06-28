import Node from './node.js';

class ParagraphNode extends Node {
  constructor(options) {
    super(options);
  }

  getNodeTree() {
    let subTree = [];
    this.state.nodeTree.forEach((subnode) => {
      subTree.push(subnode.getNodeTree());
    });
    return {Paragraph: subTree};
  }
}

module.exports = ParagraphNode;