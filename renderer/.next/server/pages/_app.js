/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.css */ \"./pages/global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/system */ \"@nextui-org/system\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nextui_org_system__WEBPACK_IMPORTED_MODULE_3__, _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__]);\n([_nextui_org_system__WEBPACK_IMPORTED_MODULE_3__, _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const sendRequest = ()=>{\n        global.ipcRenderer.send(\"capture\", url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        className: \"dark bg-background\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_system__WEBPACK_IMPORTED_MODULE_3__.NextUIProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Navbar, {\n                        isBordered: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.NavbarBrand, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                                    href: \"#\",\n                                    color: \"foreground\",\n                                    children: \"Demo Webscraper\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/calob/Projects/personal/demos/webscraper/renderer/pages/_app.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/calob/Projects/personal/demos/webscraper/renderer/pages/_app.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.NavbarContent, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                        value: url,\n                                        onValueChange: setUrl,\n                                        placeholder: \"URL of webpage\",\n                                        size: \"sm\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/calob/Projects/personal/demos/webscraper/renderer/pages/_app.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        size: \"lg\",\n                                        onClick: sendRequest,\n                                        children: \" Capture\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/calob/Projects/personal/demos/webscraper/renderer/pages/_app.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/calob/Projects/personal/demos/webscraper/renderer/pages/_app.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/calob/Projects/personal/demos/webscraper/renderer/pages/_app.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/calob/Projects/personal/demos/webscraper/renderer/pages/_app.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/calob/Projects/personal/demos/webscraper/renderer/pages/_app.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/calob/Projects/personal/demos/webscraper/renderer/pages/_app.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/calob/Projects/personal/demos/webscraper/renderer/pages/_app.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1FO0FBRzdDO0FBQzhCO0FBQ3dDO0FBVzdFLFNBQVNRLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQXNCO0lBQ3RFLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHWiwrQ0FBUUE7SUFDOUIsTUFBTWEsY0FBYztRQUNsQkMsT0FBT0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsV0FBV0w7SUFDckM7SUFFQSxxQkFDRSw4REFBQ007UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7c0JBQ0MsNEVBQUNsQiw4REFBY0E7O2tDQUNiLDhEQUFDSSxxREFBTUE7d0JBQUNlLFVBQVU7OzBDQUNoQiw4REFBQ2QsMERBQVdBOzBDQUNWLDRFQUFDRixtREFBSUE7b0NBQUNpQixNQUFLO29DQUFJQyxPQUFNOzhDQUFhOzs7Ozs7Ozs7OzswQ0FFcEMsOERBQUNmLDREQUFhQTs7a0RBQ1osOERBQUNKLG9EQUFLQTt3Q0FDSm9CLE9BQU9aO3dDQUNQYSxlQUFlWjt3Q0FDZmEsYUFBWTt3Q0FDWkMsTUFBSzs7Ozs7O2tEQUVQLDhEQUFDeEIscURBQU1BO3dDQUFDd0IsTUFBSzt3Q0FBS0MsU0FBU2Q7a0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHNUMsOERBQUNKO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB0eXBlIFJlYWN0RWxlbWVudCwgdHlwZSBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0ICcuL2dsb2JhbC5jc3MnO1xuaW1wb3J0IHsgTmV4dFVJUHJvdmlkZXIgfSBmcm9tICdAbmV4dHVpLW9yZy9zeXN0ZW0nO1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgTGluaywgTmF2YmFyLCBOYXZiYXJCcmFuZCwgTmF2YmFyQ29udGVudCB9IGZyb20gJ0BuZXh0dWktb3JnL3JlYWN0JztcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJ0BwaG9zcGhvci1pY29ucy9yZWFjdCc7XG4gXG5leHBvcnQgdHlwZSBOZXh0UGFnZVdpdGhMYXlvdXQ8UCA9IHt9LCBJUCA9IFA+ID0gTmV4dFBhZ2U8UCwgSVA+ICYge1xuICBnZXRMYXlvdXQ/OiAocGFnZTogUmVhY3RFbGVtZW50KSA9PiBSZWFjdE5vZGVcbn1cbiBcbnR5cGUgQXBwUHJvcHNXaXRoTGF5b3V0ID0gQXBwUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dFBhZ2VXaXRoTGF5b3V0XG59XG4gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wc1dpdGhMYXlvdXQpIHtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3Qgc2VuZFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgZ2xvYmFsLmlwY1JlbmRlcmVyLnNlbmQoJ2NhcHR1cmUnLCB1cmwpXG4gIH1cbiBcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBjbGFzc05hbWU9J2RhcmsgYmctYmFja2dyb3VuZCc+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE5leHRVSVByb3ZpZGVyPlxuICAgICAgICAgIDxOYXZiYXIgaXNCb3JkZXJlZD5cbiAgICAgICAgICAgIDxOYXZiYXJCcmFuZD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjb2xvcj0nZm9yZWdyb3VuZCc+RGVtbyBXZWJzY3JhcGVyPC9MaW5rPlxuICAgICAgICAgICAgPC9OYXZiYXJCcmFuZD5cbiAgICAgICAgICAgIDxOYXZiYXJDb250ZW50PlxuICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VybH1cbiAgICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXtzZXRVcmx9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1VSTCBvZiB3ZWJwYWdlJ1xuICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xnJyBvbkNsaWNrPXtzZW5kUmVxdWVzdH0+IENhcHR1cmU8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTmF2YmFyQ29udGVudD5cbiAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTmV4dFVJUHJvdmlkZXI+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk5leHRVSVByb3ZpZGVyIiwiQnV0dG9uIiwiSW5wdXQiLCJMaW5rIiwiTmF2YmFyIiwiTmF2YmFyQnJhbmQiLCJOYXZiYXJDb250ZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXJsIiwic2V0VXJsIiwic2VuZFJlcXVlc3QiLCJnbG9iYWwiLCJpcGNSZW5kZXJlciIsInNlbmQiLCJodG1sIiwiY2xhc3NOYW1lIiwiYm9keSIsImlzQm9yZGVyZWQiLCJocmVmIiwiY29sb3IiLCJ2YWx1ZSIsIm9uVmFsdWVDaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/global.css":
/*!**************************!*\
  !*** ./pages/global.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@nextui-org/react":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@nextui-org/react");;

/***/ }),

/***/ "@nextui-org/system":
/*!*************************************!*\
  !*** external "@nextui-org/system" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@nextui-org/system");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();