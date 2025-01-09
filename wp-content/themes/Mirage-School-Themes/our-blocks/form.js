wp.blocks.registerBlockType("ourblocktheme/form", {
  title: "Mirage Form",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Form Block"
    );
  },
  save: function () {
    return null;
  },
});
