wp.blocks.registerBlockType("ourblocktheme/eachblog", {
  title: "Blog Post",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Blog Post Block"
    );
  },
  save: function () {
    return null;
  },
});
