/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./mensaje1.js":
/*!*********************!*\
  !*** ./mensaje1.js ***!
  \*********************/
/***/ (() => {

eval("const mensaje = 'Hola mundo 1';\n\nsetTimeout(()=>{\n  console.log(mensaje);\n  console.log(\"Hola coders\");\n}, 1000)\n\n//# sourceURL=webpack://ejemplo_webpack/./mensaje1.js?");

/***/ }),

/***/ "./mensaje2.js":
/*!*********************!*\
  !*** ./mensaje2.js ***!
  \*********************/
/***/ (() => {

eval("const mensaje = 'Hola mundo 2';\n\nsetTimeout(()=>{\n  console.log(mensaje);\n}, 2000)\n\n//# sourceURL=webpack://ejemplo_webpack/./mensaje2.js?");

/***/ }),

/***/ "./mensaje3.js":
/*!*********************!*\
  !*** ./mensaje3.js ***!
  \*********************/
/***/ (() => {

eval("const mensaje = 'Hola mundo 3';\n\nsetTimeout(()=>{\n  console.log(mensaje);\n}, 3000)\n\n//# sourceURL=webpack://ejemplo_webpack/./mensaje3.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./mensaje1.js"]();
/******/ 	__webpack_modules__["./mensaje2.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./mensaje3.js"]();
/******/ 	
/******/ })()
;