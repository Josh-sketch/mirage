wp.blocks.registerBlockType("ourblocktheme/pagination", {
  title: "Pagination",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Pagination Block"
    );
  },
  save: function () {
    return null;
  },
});
