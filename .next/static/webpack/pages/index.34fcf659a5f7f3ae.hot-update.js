"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/genre/horror.tsx":
/*!********************************!*\
  !*** ./pages/genre/horror.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Horror; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _IdContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IdContext */ \"./pages/IdContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Horror(param) {\n    var hollormovie = param.hollormovie;\n    var _this = this;\n    _s();\n    var IMG_PATH = \"https://image.tmdb.org/t/p/w1280\"; //映画の画像のパスに使う\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_IdContext__WEBPACK_IMPORTED_MODULE_2__.MyIdContext), movieid = ref.movieid, setMovieid = ref.setMovieid;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"bg-black\",\n        __source: {\n            fileName: \"/Users/eg/Desktop/MovieDBnext/pages/genre/horror.tsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"text-white mt-10\",\n                __source: {\n                    fileName: \"/Users/eg/Desktop/MovieDBnext/pages/genre/horror.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"ホラー\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                className: \"flex overflow-x-auto\",\n                __source: {\n                    fileName: \"/Users/eg/Desktop/MovieDBnext/pages/genre/horror.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: hollormovie.results.map(function(post, i) {\n                    var _this1 = _this;\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().poster__box),\n                        onClick: function() {\n                            setMovieid(post.id);\n                        },\n                        __source: {\n                            fileName: \"/Users/eg/Desktop/MovieDBnext/pages/genre/horror.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().poster__img),\n                                __source: {\n                                    fileName: \"/Users/eg/Desktop/MovieDBnext/pages/genre/horror.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 4\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/details/\".concat(post.id),\n                                    __source: {\n                                        fileName: \"/Users/eg/Desktop/MovieDBnext/pages/genre/horror.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 4\n                                    },\n                                    __self: _this,\n                                    children: function() {\n                                        if (post.backdrop_path === null) {\n                                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                                style: {\n                                                    width: \"220px\",\n                                                    height: \"120px\",\n                                                    color: \"white\"\n                                                },\n                                                __source: {\n                                                    fileName: \"/Users/eg/Desktop/MovieDBnext/pages/genre/horror.tsx\",\n                                                    lineNumber: 29,\n                                                    columnNumber: 12\n                                                },\n                                                __self: _this1,\n                                                children: \"not photo\"\n                                            }));\n                                        } else {\n                                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                src: IMG_PATH + post.backdrop_path,\n                                                style: {\n                                                    width: \"220px\",\n                                                    height: \"120px\"\n                                                },\n                                                onClick: function() {\n                                                    setMovieid(post.id);\n                                                },\n                                                __source: {\n                                                    fileName: \"/Users/eg/Desktop/MovieDBnext/pages/genre/horror.tsx\",\n                                                    lineNumber: 34,\n                                                    columnNumber: 11\n                                                },\n                                                __self: _this1\n                                            }));\n                                        }\n                                    }()\n                                })\n                            }, post.id),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/details/\".concat(post.id),\n                                __source: {\n                                    fileName: \"/Users/eg/Desktop/MovieDBnext/pages/genre/horror.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 6\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().poster__text),\n                                    __source: {\n                                        fileName: \"/Users/eg/Desktop/MovieDBnext/pages/genre/horror.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 6\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/Users/eg/Desktop/MovieDBnext/pages/genre/horror.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 8\n                                        },\n                                        __self: _this,\n                                        children: post.title\n                                    })\n                                })\n                            })\n                        ]\n                    }, i));\n                })\n            })\n        ]\n    }));\n};\n_s(Horror, \"eTuJHKVyajwnyzIFtNTBLT3VWL0=\");\n_c = Horror;\nvar _c;\n$RefreshReg$(_c, \"Horror\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nZW5yZS9ob3Jyb3IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNxQjtBQUNQO0FBQ29COztBQUUvQyxRQUFRLENBQUNLLE1BQU0sQ0FBQyxLQUFhLEVBQUUsQ0FBQztRQUFmQyxXQUFXLEdBQVosS0FBYSxDQUFaQSxXQUFXOzs7SUFDekMsR0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBa0Msa0NBQUUsQ0FBYSxFQUFzQjtJQUNsRSxHQUFqQixDQUEyQkgsR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNGLG1EQUFXLEdBQTlDTSxPQUFPLEdBQWlCSixHQUF1QixDQUEvQ0ksT0FBTyxFQUFFQyxVQUFVLEdBQUtMLEdBQXVCLENBQXRDSyxVQUFVO0lBRzNCLE1BQU0sdUVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7O2lGQUd0QkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWtCOzs7Ozs7OzBCQUFDLENBQUc7O2lGQUNwQ0MsQ0FBRTtnQkFBQ0QsU0FBUyxFQUFDLENBQXNCOzs7Ozs7OzBCQUNqQ0wsV0FBVyxDQUFDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQVMsRUFBQ0MsQ0FBSyxFQUFLLENBQUM7O29CQUM3QyxNQUFNLHVFQUNIQyxDQUFFO3dCQUFDTixTQUFTLEVBQUVWLDRFQUFrQjt3QkFFM0NrQixPQUFPLEVBQUUsUUFDWCxHQURpQixDQUFDOzRCQUNmVixVQUFVLENBQUNNLElBQUksQ0FBQ0ssRUFBRTt3QkFDcEIsQ0FBQzs7Ozs7Ozs7aUdBQ0VWLENBQUc7Z0NBQWVDLFNBQVMsRUFBRVYsNEVBQWtCOzs7Ozs7OytHQUMvQ0Qsa0RBQUk7b0NBQUNzQixJQUFJLEVBQUcsQ0FBUyxXQUFVLE9BQVJQLElBQUksQ0FBQ0ssRUFBRTs7Ozs7Ozs4Q0FDM0IsUUFDTCxHQURTLENBQUM7d0NBQ0wsRUFBRSxFQUFDTCxJQUFJLENBQUNRLGFBQWEsS0FBSyxJQUFJLEVBQUMsQ0FBQzs0Q0FDOUIsTUFBTSxzRUFDSEMsQ0FBQztnREFBQ0MsS0FBSyxFQUFFLENBQUM7b0RBQUNDLEtBQUssRUFBRSxDQUFPO29EQUFFQyxNQUFNLEVBQUUsQ0FBTztvREFBRUMsS0FBSyxFQUFDLENBQU87Z0RBQUMsQ0FBQzs7Ozs7OzswREFBRSxDQUNuRDs7d0NBRWYsQ0FBQyxNQUFJLENBQUM7NENBQ0osTUFBTSxzRUFDSkMsQ0FBRztnREFDSkMsR0FBRyxFQUFFdkIsUUFBUSxHQUFHUSxJQUFJLENBQUNRLGFBQWE7Z0RBQ2xDRSxLQUFLLEVBQUUsQ0FBQztvREFBQ0MsS0FBSyxFQUFFLENBQU87b0RBQUVDLE1BQU0sRUFBRSxDQUFPO2dEQUFDLENBQUM7Z0RBQzFDUixPQUFPLEVBQUUsUUFDbkIsR0FEeUIsQ0FBQztvREFDZFYsVUFBVSxDQUFDTSxJQUFJLENBQUNLLEVBQUU7Z0RBQ3BCLENBQUM7Ozs7Ozs7O3dDQUVKLENBQUM7b0NBQUEsQ0FBQzs7K0JBakJJTCxJQUFJLENBQUNLLEVBQUU7aUdBcUJkcEIsa0RBQUk7Z0NBQUNzQixJQUFJLEVBQUcsQ0FBUyxXQUFVLE9BQVJQLElBQUksQ0FBQ0ssRUFBRTs7Ozs7OzsrR0FDOUJWLENBQUc7b0NBQUNDLFNBQVMsRUFBRVYsNkVBQW1COzs7Ozs7O21IQUNoQ3VCLENBQUM7Ozs7Ozs7a0RBQUVULElBQUksQ0FBQ2lCLEtBQUs7Ozs7O3VCQTNCZGhCLENBQUM7Z0JBZ0NBLENBQUM7Ozs7QUFJVCxDQUFDO0dBbER1QlgsTUFBTTtLQUFOQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dlbnJlL2hvcnJvci50c3g/ZGZmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IE15SWRDb250ZXh0IH0gZnJvbSBcIi4uL0lkQ29udGV4dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9ycm9yKHtob2xsb3Jtb3ZpZX0pIHtcbiAgY29uc3QgSU1HX1BBVEggPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3cxMjgwXCI7IC8v5pig55S744Gu55S75YOP44Gu44OR44K544Gr5L2/44GGXG4gIGNvbnN0IHsgbW92aWVpZCwgc2V0TW92aWVpZCB9ID0gdXNlQ29udGV4dChNeUlkQ29udGV4dCk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2tcIj5cbiAgICAgIHsvKuihqOekuuOBmeOCi+aYoOeUu+ODneOCueOCv+ODvCovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbXQtMTBcIj7jg5vjg6njg7w8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICB7aG9sbG9ybW92aWUucmVzdWx0cy5tYXAoKHBvc3Q6IGFueSxpOmFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMucG9zdGVyX19ib3ggfVxuICBrZXk9e2l9IFxuICBvbkNsaWNrPXsoKSA9PiB7XG4gICBzZXRNb3ZpZWlkKHBvc3QuaWQpXG4gfX0+XG4gICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMucG9zdGVyX19pbWd9PlxuICAgPExpbmsgaHJlZj17YC9kZXRhaWxzLyR7cG9zdC5pZH1gfT5cbiAgICAgeygoKT0+e1xuICAgICAgIGlmKHBvc3QuYmFja2Ryb3BfcGF0aCA9PT0gbnVsbCl7XG4gICAgICAgICByZXR1cm4oXG4gICAgICAgICAgIDxwIHN0eWxlPXt7IHdpZHRoOiBcIjIyMHB4XCIsIGhlaWdodDogXCIxMjBweFwiICxjb2xvcjpcIndoaXRlXCIsfX0+XG4gICAgICAgICAgICAgbm90IHBob3RvPC9wPlxuICAgICAgICAgKVxuICAgICAgIH1lbHNle1xuICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e0lNR19QQVRIICsgcG9zdC5iYWNrZHJvcF9wYXRofVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIyMHB4XCIsIGhlaWdodDogXCIxMjBweFwiIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0TW92aWVpZChwb3N0LmlkKVxuICAgICAgICAgIH19XG4gICAgICAgID48L2ltZz4pXG4gICAgICAgfX0pKClcbiAgICAgfVxuICAgIDwvTGluaz5cbiAgICAgPC9kaXY+XG4gICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlscy8ke3Bvc3QuaWR9YH0+XG4gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdGVyX190ZXh0fT5cbiAgICAgICA8cD57cG9zdC50aXRsZX08L3A+XG4gICAgIDwvZGl2PlxuICAgICA8L0xpbms+XG4gICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJNeUlkQ29udGV4dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkhvcnJvciIsImhvbGxvcm1vdmllIiwiSU1HX1BBVEgiLCJtb3ZpZWlkIiwic2V0TW92aWVpZCIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwicmVzdWx0cyIsIm1hcCIsInBvc3QiLCJpIiwibGkiLCJwb3N0ZXJfX2JveCIsIm9uQ2xpY2siLCJpZCIsInBvc3Rlcl9faW1nIiwiaHJlZiIsImJhY2tkcm9wX3BhdGgiLCJwIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiaW1nIiwic3JjIiwicG9zdGVyX190ZXh0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/genre/horror.tsx\n");

/***/ })

});