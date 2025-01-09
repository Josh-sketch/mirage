wp.blocks.registerBlockType("ourblocktheme/header", {
  title: "Header",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage Header Block"
    );
  },
  save: function () {
    return null;
  },
  // editorStyle: "block-editor-styles", // Match the handle in PHP
});
