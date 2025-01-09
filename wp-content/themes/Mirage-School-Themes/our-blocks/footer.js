wp.blocks.registerBlockType("ourblocktheme/footer", {
  title: "Mirage Footer",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Footer Block"
    );
  },
  save: function () {
    return null;
  },
});
