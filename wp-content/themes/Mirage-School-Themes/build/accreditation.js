/******/ (() => { // webpackBootstrap
/*!*************************************!*\
  !*** ./our-blocks/accreditation.js ***!
  \*************************************/
wp.blocks.registerBlockType("ourblocktheme/accreditation", {
  title: "Accreditation",
  edit: function () {
    return wp.element.createElement("div", {
      className: "our-placeholder-block"
    }, "Mirage Accreditation Block");
  },
  save: function () {
    return null;
  }
});
/******/ })()
;
//# sourceMappingURL=accreditation.js.map