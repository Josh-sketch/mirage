wp.blocks.registerBlockType("ourblocktheme/team", {
  title: "Team",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Team Block"
    );
  },
  save: function () {
    return null;
  },
});
