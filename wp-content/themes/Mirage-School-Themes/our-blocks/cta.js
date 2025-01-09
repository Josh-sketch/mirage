wp.blocks.registerBlockType("ourblocktheme/cta", {
  title: "Call to Action",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Call to Action Block"
    );
  },
  save: function () {
    return null;
  },
});
