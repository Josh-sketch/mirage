wp.blocks.registerBlockType("ourblocktheme/transportation", {
  title: "Information",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Information Block"
    );
  },
  save: function () {
    return null;
  },
});
