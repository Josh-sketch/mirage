wp.blocks.registerBlockType("ourblocktheme/values", {
  title: "Values",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Values Block Block"
    );
  },
  save: function () {
    return null;
  },
});
