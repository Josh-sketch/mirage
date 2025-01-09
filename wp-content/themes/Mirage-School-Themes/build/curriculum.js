/******/ (() => { // webpackBootstrap
/*!**********************************!*\
  !*** ./our-blocks/curriculum.js ***!
  \**********************************/
wp.blocks.registerBlockType("ourblocktheme/curriculum", {
  title: "Curriculum",
  edit: function () {
    return wp.element.createElement("div", {
      className: "our-placeholder-block"
    }, "Mirage Curriculum Block");
  },
  save: function () {
    return null;
  }
});
/******/ })()
;
//# sourceMappingURL=curriculum.js.map