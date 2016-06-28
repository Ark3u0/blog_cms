class Node {
  constructor(options) {
    this.nodeTree = options.nodeTree || [];
  }

  setNodeTree(nodes) {
    this.setState({nodeTree: nodes});
  }

  getNodeTree() {
    let subTree = [];
    this.state.nodeTree.forEach((subnode) => {
      subTree.push(subnode.getNodeTree());
    });
    return {Node: subTree};
  }
}

module.exports = Node;