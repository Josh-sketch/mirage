/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./our-blocks/carousel.js ***!
  \********************************/
wp.blocks.registerBlockType("ourblocktheme/carousel", {
  title: "History Carousel",
  edit: function () {
    return wp.element.createElement("div", {
      className: "our-placeholder-block"
    }, "Mirage History Carousel Block");
  },
  save: function () {
    return null;
  }
});
/******/ })()
;
//# sourceMappingURL=carousel.js.map