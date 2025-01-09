/******/ (() => { // webpackBootstrap
/*!*******************************!*\
  !*** ./our-blocks/listers.js ***!
  \*******************************/
wp.blocks.registerBlockType("ourblocktheme/listers", {
  title: "Listers",
  edit: function () {
    return wp.element.createElement("div", {
      className: "our-placeholder-block"
    }, "Mirage Listers Block");
  },
  save: function () {
    return null;
  }
});
/******/ })()
;
//# sourceMappingURL=listers.js.map