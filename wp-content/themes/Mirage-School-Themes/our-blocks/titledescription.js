wp.blocks.registerBlockType("ourblocktheme/titledescription", {
  title: "Title Description",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Title Description Block"
    );
  },
  save: function () {
    return null;
  },
});
