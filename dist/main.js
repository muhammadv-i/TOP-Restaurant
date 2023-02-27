/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ add)\n/* harmony export */ });\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n\n\nlet content = (0,_content_js__WEBPACK_IMPORTED_MODULE_0__.createContent)(\n    ['h1', 'Contact us'], \n    ['p', 'Phone: 18004538135'], \n    ['p', 'Email: email@example.com'], \n    ['p', 'Address: 124142 Maine Rd., Maine Island']\n    );\n\nfunction add() {\n    content.forEach( element => _content_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(element));\n}\n\n\n//# sourceURL=webpack://codespaces-blank/./src/contact.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contentDiv\": () => (/* binding */ contentDiv),\n/* harmony export */   \"createContent\": () => (/* binding */ createContent),\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _welcome_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.js */ \"./src/welcome.js\");\n\n\nconst contentDiv = document.querySelector(\"#content\");\n\nfunction loadPage() {\n    (0,_welcome_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nfunction createContent(...elements) {\n    let content = elements.map( element => {\n        let el = document.createElement(`${element[0]}`);\n        el.innerText = element[1];\n\n        return el;\n    })\n\n    return content;\n}\n\n//# sourceURL=webpack://codespaces-blank/./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/* harmony import */ var _welcome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.js */ \"./src/welcome.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n(0,_content_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst tabs = document.createElement('div');\ntabs.id = 'tabs';\nlet current;\n\nconst content = document.querySelector('#content');\n\ndocument.body.insertBefore(tabs, content);\n\nfunction createTab(name) {\n    name = name.toLowerCase();\n    const tab = document.createElement('div');\n    tab.classList.add('tab');\n    tab.dataset.tab = name;\n    tab.innerText = name;\n\n    tabs.appendChild(tab);\n\n    return tab;\n}\n\ncurrent = createTab('Welcome!');\ncurrent.classList.add('active');\ncreateTab('Menu');\ncreateTab('Contact');\n\nfor (let i = 0; i < tabs.childElementCount; i++) {\n    let tab = tabs.children[i];\n    tab.addEventListener(\"click\", (e) => {\n        console.log(`current: `, current);\n        console.log(`target: `, e.target);\n        if (e.target !== current) {\n            current = e.target;\n            e.target.classList.add('active');\n            \n            content.innerHTML = '';\n            switch (e.target.dataset.tab) {\n                case 'welcome!':\n                    (0,_welcome_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n                    break;\n                case 'menu': \n                    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                    break;\n                case 'contact':\n                    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                    break;\n            }\n            \n            for (tab of tabs.children) {\n                if (tab !== current)\n                    tab.classList.remove('active')\n            }\n        }\n    });\n}\n\n//# sourceURL=webpack://codespaces-blank/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ add)\n/* harmony export */ });\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n\n\nfunction dish(name, parent) {\n    const dish = document.createElement('div');\n    const dname = document.createElement('h3');\n    dname.textContent = name;\n    const desc = document.createElement('p');\n    desc.textContent = 'The signature dish. Handmade and cooked to perfection by chef Slowik himself.';\n\n    dish.append(dname, desc);\n\n    parent.appendChild(dish);\n}\n\nfunction add() {\n    const div = document.createElement('div');\n    div.id = 'menu';\n    \n    dish('Lazaro Fettucini', div);\n    dish('Shrimp Regalia', div);\n    dish('Epic Fortnite Gamer Girl', div);\n\n    document.querySelector('#content').appendChild(div);\n}\n\n//# sourceURL=webpack://codespaces-blank/./src/menu.js?");

/***/ }),

/***/ "./src/welcome.js":
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ add)\n/* harmony export */ });\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n\n\nconst bg = document.createElement('img');\nbg.src = '../assets/grill.jpg';\n\nlet content = (0,_content_js__WEBPACK_IMPORTED_MODULE_0__.createContent)(\n    ['h1', `Our grills taste like chef Slowik's masterpiece. But without all the deaths.`],\n    ['p', `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos maxime qui aliquid natus impedit vero laborum, incidunt, amet, cumque ut illum officiis pariatur velit rerum dolore architecto. Dolorum, facere rerum.`],\n    ['p', `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque veniam quam labore corporis itaque expedita, autem est asperiores voluptates. Eos aperiam consequatur sed numquam tempora corrupti id molestiae, est nisi?`]\n    );\n\nfunction add() {\n    _content_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(bg);\n    content.forEach( element => _content_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(element));\n}\n\n//# sourceURL=webpack://codespaces-blank/./src/welcome.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;