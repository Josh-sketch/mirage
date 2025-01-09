wp.blocks.registerBlockType("ourblocktheme/blogandevent", {
  title: "Blog and Event Display",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Blog and Event Block"
    );
  },
  save: function () {
    return null;
  },
});
