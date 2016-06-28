
import React from 'react';
import parseMouseClick from '../parsers/parse_mouse_click.js';
import parseNodeTree from '../parsers/parse_node_tree.js';

const { Component } = React;

class PostInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',  nodeTree: {}};
  }

  onChange(event) {
    let nodeTree = parseNodeTree(event.target.value);
    this.setState({value: value, nodeTree: nodeTree});
  }

  onMouseDown(event) {
    parseMouseClick()
  }

  render() {
    return <div>
    <div style={styles.formContainer}>
      <textarea style={styles.form}
         placeholder="Make a new post..."
         type="text"
         onChange={(event) => this.onChange(event)}
         onMouseDown={(event) => this.onMouseDown(event)}>
      </textarea>
    </div>
    <button>Submit</button>
    </div>;
  }
}

const styles = {
  formContainer: {
    overflow: 'hidden',
    position: 'relative',
    height: 0,
    paddingBottom: '56.25%',
    paddingTop: '30px'
  },
  form: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '90%',
    height: '90%',
    padding: '10px',
    outline: 'none',
    resize: 'none'
  }
};

module.exports = PostInputForm;

// Make text area as wide as page. Allow for posting of text
// allow for hyperlink generation
// allow for dragging and placing of text
// allow for pasting youtube videos/links
// allow for placement of images dynamically
// allow for referencing video from channel
// allow for referencing images from channel
// allow for styling (underline, bold, italics)

/*
 *
 * Could use a node-based structure, where different node types form a tree:
 * Form
 * - Paragraph
 * - Paragraph
 * - Image
 * - Paragraph
 * - Image
 * - Paragraph
 * etc.
 *
 * Then within a paragraph you could have more specific nodes
 * - Paragraph
 * -- Text
 * -- Text
 * -- Italics
 * --- Text
 * -- Text
 * -- Hyperlink
 * --- Text
 * --- LinkReference
 * -- Text
 * -- Text
 */