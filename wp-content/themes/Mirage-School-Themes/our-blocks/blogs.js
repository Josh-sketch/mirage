wp.blocks.registerBlockType("ourblocktheme/blogs", {
  title: "All Blogs",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Blogs Lister"
    );
  },
  save: function () {
    return null;
  },
});
