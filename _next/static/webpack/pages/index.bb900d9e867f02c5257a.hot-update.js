webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ \"./components/head.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _memes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../memes */ \"./memes.ts\");\n\n\nvar _jsxFileName = \"/Users/louiechristie/Documents/memes/pages/index.tsx\";\n\n\n\n\nvar __N_SSG = true;\nfunction Index(props) {\n  var _this = this;\n\n  var memes = props.memes;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_head__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Memes | louiechristie.com\",\n      description: \"'... (Internet, slang) Something, usually humorous, which is copied and circulated online with slight adaptations, including quizzes, basic pictures, video templates etc. - Wiktionary'\",\n      image: \"/images/lc-icon.svg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"memes-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"blockquote\", {\n        className: \"meme-definition\",\n        cite: \"https://en.wiktionary.org/wiki/meme\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: \"Meme\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, this), \" ... (Internet, slang) Something, usually humorous, which is copied and circulated online with slight adaptations, including quizzes, basic pictures, video templates etc.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"cite\", {\n          children: \"- Wiktionary, 2020\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"memes-list\",\n        children: memes.map(function (item) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            href: \"\".concat(\"\", \"/\").concat(item.url),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                className: \"box-shadow\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: item.image,\n                  alt: item.alt,\n                  width: item.width,\n                  height: item.height,\n                  loading: \"lazy\",\n                  style: {\n                    width: \"100%\",\n                    height: \"auto\" // objectFit: \"contain\",\n\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                  children: Object(_memes__WEBPACK_IMPORTED_MODULE_4__[\"getLongTitle\"])(item)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this)\n          }, item.url, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIm1lbWVzIiwibWFwIiwiaXRlbSIsInByb2Nlc3MiLCJ1cmwiLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0TG9uZ1RpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBZWUsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQTZCO0FBQUE7O0FBQUEsTUFDbENDLEtBRGtDLEdBQ3hCRCxLQUR3QixDQUNsQ0MsS0FEa0M7QUFHMUMsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUNFLFdBQUssRUFBQywyQkFEUjtBQUVFLGlCQUFXLEVBQUMsMExBRmQ7QUFHRSxXQUFLLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDhCQUNFO0FBQ0UsaUJBQVMsRUFBQyxpQkFEWjtBQUVFLFlBQUksRUFBQyxxQ0FGUDtBQUFBLGdDQUdFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFZRTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGtCQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsOEJBQ1QscUVBQUMsZ0RBQUQ7QUFFRSxnQkFBSSxZQUFLQyxFQUFMLGNBQWlDRCxJQUFJLENBQUNFLEdBQXRDLENBRk47QUFBQSxtQ0FHRTtBQUFBLHFDQUNFO0FBQUkseUJBQVMsRUFBQyxZQUFkO0FBQUEsd0NBQ0U7QUFDRSxxQkFBRyxFQUFFRixJQUFJLENBQUNHLEtBRFo7QUFFRSxxQkFBRyxFQUFFSCxJQUFJLENBQUNJLEdBRlo7QUFHRSx1QkFBSyxFQUFFSixJQUFJLENBQUNLLEtBSGQ7QUFJRSx3QkFBTSxFQUFFTCxJQUFJLENBQUNNLE1BSmY7QUFLRSx5QkFBTyxFQUFDLE1BTFY7QUFNRSx1QkFBSyxFQUFFO0FBQ0xELHlCQUFLLEVBQUUsTUFERjtBQUVMQywwQkFBTSxFQUFFLE1BRkgsQ0FHTDs7QUFISztBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFhRTtBQUFBLDRCQUFLQywyREFBWSxDQUFDUCxJQUFEO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGLGFBQ09BLElBQUksQ0FBQ0UsR0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTO0FBQUEsU0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQThDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUNGO0FBQUEsa0JBREY7QUFrREQ7S0FyRHVCTixLIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcblxuaW1wb3J0IG1lbWVzLCB7IE1lbWUsIGdldExvbmdUaXRsZSB9IGZyb20gXCIuLi9tZW1lc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBpdGVtczogTWVtZVtdID0gbWVtZXM7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lbWVzLFxuICAgIH0sXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtZW1lczogTWVtZVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBtZW1lcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRcbiAgICAgICAgdGl0bGU9XCJNZW1lcyB8IGxvdWllY2hyaXN0aWUuY29tXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCInLi4uIChJbnRlcm5ldCwgc2xhbmcpIFNvbWV0aGluZywgdXN1YWxseSBodW1vcm91cywgd2hpY2ggaXMgY29waWVkIGFuZCBjaXJjdWxhdGVkIG9ubGluZSB3aXRoIHNsaWdodCBhZGFwdGF0aW9ucywgaW5jbHVkaW5nIHF1aXp6ZXMsIGJhc2ljIHBpY3R1cmVzLCB2aWRlbyB0ZW1wbGF0ZXMgZXRjLiAtIFdpa3Rpb25hcnknXCJcbiAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL2xjLWljb24uc3ZnXCJcbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtZXMtY29udGFpbmVyXCI+XG4gICAgICAgIDxibG9ja3F1b3RlXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWVtZS1kZWZpbml0aW9uXCJcbiAgICAgICAgICBjaXRlPVwiaHR0cHM6Ly9lbi53aWt0aW9uYXJ5Lm9yZy93aWtpL21lbWVcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+TWVtZTwvc3Ryb25nPiAuLi4gKEludGVybmV0LCBzbGFuZykgU29tZXRoaW5nLCB1c3VhbGx5XG4gICAgICAgICAgICBodW1vcm91cywgd2hpY2ggaXMgY29waWVkIGFuZCBjaXJjdWxhdGVkIG9ubGluZSB3aXRoIHNsaWdodFxuICAgICAgICAgICAgYWRhcHRhdGlvbnMsIGluY2x1ZGluZyBxdWl6emVzLCBiYXNpYyBwaWN0dXJlcywgdmlkZW8gdGVtcGxhdGVzIGV0Yy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGNpdGU+LSBXaWt0aW9uYXJ5LCAyMDIwPC9jaXRlPlxuICAgICAgICA8L2Jsb2NrcXVvdGU+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbWVzLWxpc3RcIj5cbiAgICAgICAgICB7bWVtZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBrZXk9e2l0ZW0udXJsfVxuICAgICAgICAgICAgICBocmVmPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9LyR7aXRlbS51cmx9YH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJib3gtc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2l0ZW0ud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17aXRlbS5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAvLyBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxoMj57Z2V0TG9uZ1RpdGxlKGl0ZW0pfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})