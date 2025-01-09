/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./our-blocks/achievementboard.js ***!
  \****************************************/
wp.blocks.registerBlockType("ourblocktheme/achievementboard", {
  title: "AchievementBoard",
  edit: function () {
    return wp.element.createElement("div", {
      className: "our-placeholder-block"
    }, "Mirage Achievement Board Block");
  },
  save: function () {
    return null;
  }
});
/******/ })()
;
//# sourceMappingURL=achievementboard.js.map