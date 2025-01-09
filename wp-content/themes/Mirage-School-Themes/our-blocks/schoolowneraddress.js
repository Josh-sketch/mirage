// import { registerBlockType } from "@wordpress/blocks";

wp.blocks.registerBlockType("ourblocktheme/schoolowneraddress", {
  title: "School Owner Address",
  description:
    "This block is designed strictly for the about us page. The content can be editted from the about us page.",
  edit: function () {
    return wp.element.createElement(
      "div",
      {
        className: "our-placeholder-block",
      },
      "Mirage School Owner Address Block"
    );
  },
  save: function () {
    return null;
  },
});
