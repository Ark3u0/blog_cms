
describe('BlogEntry', () => {
  const BlogEntry = require("../blog_entry.js");

  describe('propType inputs', () => {
    it('should set title of blog entry to TITLE', () => {
      const blogEntry = shallowRenderComponent(<BlogEntry title='TITLE' date=""/>);
      const title = getComponentByProp(blogEntry, "className", "title");
      expect(title.props.children).to.eql("TITLE");
    });

    it('should set date of blog entry to DATE', () => {
      const blogEntry = shallowRenderComponent(<BlogEntry title='' date="DATE"/>);
      const date = getComponentByProp(blogEntry, "className", "date");
      expect(date.props.children).to.eql("DATE");
    });
  });
});