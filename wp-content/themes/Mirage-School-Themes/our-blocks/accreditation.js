wp.blocks.registerBlockType("ourblocktheme/accreditation", {
  title: "Accreditation",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Accreditation Block"
    );
  },
  save: function () {
    return null;
  },
});
