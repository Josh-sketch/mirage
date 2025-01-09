/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/questions.js":
/*!**********************************!*\
  !*** ./src/modules/questions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

console.log((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
class Questions {
  constructor() {
    this.events();
  }
  events() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".submit-comment").on("click", this.create);
  }

  //methods will go here
  create(event) {
    var acfFields = {
      name: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".name").val(),
      email: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".email").val(),
      phone_number: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".phone").val(),
      reason: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".reason").val(),
      questions: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".comment").val()
    };
    const newComment = {
      title: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".name").val(),
      status: "publish",
      acf: acfFields
    };
    event.preventDefault();
    console.log("Payload being sent:", newComment);
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: mirageSchoolThemeData.root_url + "/wp-json/wp/v2/questions/",
      type: "POST",
      data: JSON.stringify(newComment),
      contentType: "application/json",
      beforeSend: xhr => {
        xhr.setRequestHeader("X-WP-Nonce", mirageSchoolThemeData.nonce);
      },
      success: response => {
        console.log(acfFields);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".name, .email, .phone, .reason, .comment").val("");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".alert").addClass("active");
        console.log("Congrats");
        console.log(response);
      },
      error: response => {
        console.log("Failed");
        console.log(response);
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Questions);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_questions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/questions */ "./src/modules/questions.js");


//Instantiate a new object using our module/classes
const questions = new _modules_questions__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map