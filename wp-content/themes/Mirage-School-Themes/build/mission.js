/******/ (() => { // webpackBootstrap
/*!*******************************!*\
  !*** ./our-blocks/mission.js ***!
  \*******************************/
wp.blocks.registerBlockType("ourblocktheme/mission", {
  title: "Mision",
  edit: function () {
    return wp.element.createElement("div", {
      className: "our-placeholder-block"
    }, "Mirage Mission Block");
  },
  save: function () {
    return null;
  }
});
/******/ })()
;
//# sourceMappingURL=mission.js.map