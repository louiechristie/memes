webpackHotUpdate_N_E("pages/[slug]",{

/***/ "./pages/[slug].tsx":
/*!**************************!*\
  !*** ./pages/[slug].tsx ***!
  \**************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MemeDetail; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ \"./components/head.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_time_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/time-management */ \"./components/time-management.js\");\n/* harmony import */ var _components_remote_working__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/remote-working */ \"./components/remote-working.js\");\n\n\nvar _jsxFileName = \"/Users/louiechristie/Documents/memes/pages/[slug].tsx\";\n\n\n\n\n\nvar __N_SSG = true;\nfunction MemeDetail(props) {\n  var _this = this;\n\n  var errors = props.errors,\n      meme = props.meme;\n\n  if (errors) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      title: \"Error\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          style: {\n            color: \"red\"\n          },\n          children: \"Error:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this), \" \", errors]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this);\n  }\n\n  var url = meme.url,\n      title = meme.title,\n      image = meme.image,\n      width = meme.width,\n      height = meme.height,\n      alt = meme.alt,\n      caption = meme.caption,\n      cite = meme.cite,\n      youtube = meme.youtube,\n      footnotes = meme.footnotes,\n      customHTML = meme.customHTML;\n  var description;\n\n  if (youtube) {\n    var length = youtube.end - youtube.start;\n    var mins = Math.round(length / 60) || \"\";\n    var sec = length % 60;\n\n    var _longTitle = \"\".concat(title, \" | video [\").concat(mins ? mins + \" mins\" : sec + \" sec\", \"]\");\n  } else {\n    description = \"meme by louiechristie.com\";\n  }\n\n  if (caption) {\n    description = \"\".concat(caption, \" | \").concat(description);\n  }\n  /* https://github.com/vercel/next.js/issues/19527 */\n\n\n  if (customHTML && url === \"remote-working\") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_head__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: longTitle,\n      description: description,\n      image: image\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_remote_working__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n  if (customHTML && url === \"time-management\") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_head__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: title,\n      description: description,\n      image: image\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_time_management__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_head__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: title,\n      description: description,\n      image: image\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"meme-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"meme-title\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"meme-inner\",\n        children: [!youtube && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n          className: \"meme-fig\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: image,\n            alt: alt,\n            width: width || undefined,\n            height: height || undefined\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 15\n          }, this), caption && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figcaption\", {\n            className: \"meme-fig-caption\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"blockquote\", {\n              children: caption\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 13\n        }, this), youtube && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n          className: \"youtube\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"iframe-container\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n              src: \"https://www.youtube.com/embed/\".concat(youtube.v, \"?start=\").concat(youtube.start, \"&amp;end=\").concat(youtube.end, \"&amp;rel=0\"),\n              frameBorder: \"0\",\n              allowFullScreen: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 15\n          }, this), caption && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: cite ? \"quote\" : \"\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"blockquote\", {\n              children: caption\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 19\n            }, this), cite && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"cite\", {\n              children: [\" - \", cite, \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 28\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this), footnotes && footnotes.map(function (footnote, index) {\n      var number = index + 1;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"footnotes-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n          children: \"Footnotes\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n          className: \"footnotes\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"footnote\",\n            children: [footnote.text || null, \"\\xA0\", footnote.link && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: \"ref\",\n              href: footnote.link || undefined,\n              children: [\"[\", number, \"]\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 132,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 13\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = MemeDetail;\n\nvar _c;\n\n$RefreshReg$(_c, \"MemeDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLnRzeD83OGJkIl0sIm5hbWVzIjpbIk1lbWVEZXRhaWwiLCJwcm9wcyIsImVycm9ycyIsIm1lbWUiLCJjb2xvciIsInVybCIsInRpdGxlIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImNhcHRpb24iLCJjaXRlIiwieW91dHViZSIsImZvb3Rub3RlcyIsImN1c3RvbUhUTUwiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsImVuZCIsInN0YXJ0IiwibWlucyIsIk1hdGgiLCJyb3VuZCIsInNlYyIsImxvbmdUaXRsZSIsInVuZGVmaW5lZCIsInYiLCJtYXAiLCJmb290bm90ZSIsImluZGV4IiwibnVtYmVyIiwidGV4dCIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFPZSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUFrQztBQUFBOztBQUFBLE1BQ3ZDQyxNQUR1QyxHQUN0QkQsS0FEc0IsQ0FDdkNDLE1BRHVDO0FBQUEsTUFDL0JDLElBRCtCLEdBQ3RCRixLQURzQixDQUMvQkUsSUFEK0I7O0FBRy9DLE1BQUlELE1BQUosRUFBWTtBQUNWLHdCQUNFO0FBQUssV0FBSyxFQUFDLE9BQVg7QUFBQSw2QkFDRTtBQUFBLGdDQUNFO0FBQU0sZUFBSyxFQUFFO0FBQUVFLGlCQUFLLEVBQUU7QUFBVCxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLE9BQ2dERixNQURoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFPRDs7QUFYOEMsTUFjN0NHLEdBZDZDLEdBeUIzQ0YsSUF6QjJDLENBYzdDRSxHQWQ2QztBQUFBLE1BZTdDQyxLQWY2QyxHQXlCM0NILElBekIyQyxDQWU3Q0csS0FmNkM7QUFBQSxNQWdCN0NDLEtBaEI2QyxHQXlCM0NKLElBekIyQyxDQWdC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O0FBQUEsaUJBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMsV0FBZDtBQUFBLGlDQUNFO0FBQUkscUJBQVMsRUFBQyxVQUFkO0FBQUEsdUJBQ0dELFFBQVEsQ0FBQ0csSUFBVCxJQUFpQixJQURwQixVQUVHSCxRQUFRLENBQUNJLElBQVQsaUJBQ0M7QUFBRyx1QkFBUyxFQUFDLEtBQWI7QUFBbUIsa0JBQUksRUFBRUosUUFBUSxDQUFDSSxJQUFULElBQWlCUCxTQUExQztBQUFBLDhCQUNJSyxNQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsS0FqQkQsQ0E1Q0osZUErREUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9ERjtBQUFBLGtCQURGO0FBbUVEO0tBdEl1QjlCLFUiLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IG1lbWVzLCB7IE1lbWUsIEZvb3Rub3RlIH0gZnJvbSBcIi4uL21lbWVzXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFRpbWVNYW5hZ2VtZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3RpbWUtbWFuYWdlbWVudFwiO1xuaW1wb3J0IFJlbW90ZVdvcmtpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVtb3RlLXdvcmtpbmdcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbWVtZTogTWVtZTtcbiAgZXJyb3JzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbWVEZXRhaWwocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgZXJyb3JzLCBtZW1lIH0gPSBwcm9wcztcblxuICBpZiAoZXJyb3JzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgdGl0bGU9XCJFcnJvclwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5FcnJvcjo8L3NwYW4+IHtlcnJvcnN9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCB7XG4gICAgdXJsLFxuICAgIHRpdGxlLFxuICAgIGltYWdlLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBhbHQsXG4gICAgY2FwdGlvbixcbiAgICBjaXRlLFxuICAgIHlvdXR1YmUsXG4gICAgZm9vdG5vdGVzLFxuICAgIGN1c3RvbUhUTUwsXG4gIH0gPSBtZW1lO1xuXG4gIGxldCBkZXNjcmlwdGlvbjtcblxuICBpZiAoeW91dHViZSkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHlvdXR1YmUuZW5kIC0geW91dHViZS5zdGFydDtcbiAgICBjb25zdCBtaW5zID0gTWF0aC5yb3VuZChsZW5ndGggLyA2MCkgfHwgXCJcIjtcbiAgICBjb25zdCBzZWMgPSBsZW5ndGggJSA2MDtcbiAgICBjb25zdCBsb25nVGl0bGUgPSBgJHt0aXRsZX0gfCB2aWRlbyBbJHtcbiAgICAgIG1pbnMgPyBtaW5zICsgXCIgbWluc1wiIDogc2VjICsgXCIgc2VjXCJcbiAgICB9XWA7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb24gPSBcIm1lbWUgYnkgbG91aWVjaHJpc3RpZS5jb21cIjtcbiAgfVxuXG4gIGlmIChjYXB0aW9uKSB7XG4gICAgZGVzY3JpcHRpb24gPSBgJHtjYXB0aW9ufSB8ICR7ZGVzY3JpcHRpb259YDtcbiAgfVxuXG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9pc3N1ZXMvMTk1MjcgKi9cbiAgaWYgKGN1c3RvbUhUTUwgJiYgdXJsID09PSBcInJlbW90ZS13b3JraW5nXCIpXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkIHRpdGxlPXtsb25nVGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gaW1hZ2U9e2ltYWdlfSAvPlxuXG4gICAgICAgIDxSZW1vdGVXb3JraW5nIC8+XG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC8+XG4gICAgKTtcblxuICBpZiAoY3VzdG9tSFRNTCAmJiB1cmwgPT09IFwidGltZS1tYW5hZ2VtZW50XCIpXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkIHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBpbWFnZT17aW1hZ2V9IC8+XG5cbiAgICAgICAgPFRpbWVNYW5hZ2VtZW50IC8+XG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC8+XG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZCB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gaW1hZ2U9e2ltYWdlfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWUtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZW1lLXRpdGxlXCI+e3RpdGxlfTwvaDE+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW1lLWlubmVyXCI+XG4gICAgICAgICAgeyF5b3V0dWJlICYmIChcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwibWVtZS1maWdcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXthbHR9XG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRoIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtjYXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJtZW1lLWZpZy1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZT57Y2FwdGlvbn08L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHt5b3V0dWJlICYmIChcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwieW91dHViZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlmcmFtZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3lvdXR1YmUudn0/c3RhcnQ9JHt5b3V0dWJlLnN0YXJ0fSZhbXA7ZW5kPSR7eW91dHViZS5lbmR9JmFtcDtyZWw9MGB9XG4gICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7Y2FwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NpdGUgPyBcInF1b3RlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlPntjYXB0aW9ufTwvYmxvY2txdW90ZT5cbiAgICAgICAgICAgICAgICAgIHtjaXRlICYmIDxjaXRlPiAtIHtjaXRlfSA8L2NpdGU+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2Zvb3Rub3RlcyAmJlxuICAgICAgICBmb290bm90ZXMubWFwKChmb290bm90ZTogRm9vdG5vdGUsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBudW1iZXIgPSBpbmRleCArIDE7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvb3Rub3Rlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGg1PkZvb3Rub3RlczwvaDU+XG4gICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJmb290bm90ZXNcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZm9vdG5vdGVcIj5cbiAgICAgICAgICAgICAgICAgIHtmb290bm90ZS50ZXh0IHx8IG51bGx9Jm5ic3A7XG4gICAgICAgICAgICAgICAgICB7Zm9vdG5vdGUubGluayAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlZlwiIGhyZWY9e2Zvb3Rub3RlLmxpbmsgfHwgdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICAgICAgICBbe251bWJlcn1dXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAvLyBHZXQgdGhlIHBhdGhzIHdlIHdhbnQgdG8gcHJlLXJlbmRlciBiYXNlZCBvbiB1c2Vyc1xuICBjb25zdCBwYXRocyA9IG1lbWVzLm1hcCgobWVtZSkgPT4gKHtcbiAgICBwYXJhbXM6IHsgc2x1ZzogbWVtZS51cmwgfSxcbiAgfSkpO1xuXG4gIC8vIFdlJ2xsIHByZS1yZW5kZXIgb25seSB0aGVzZSBwYXRocyBhdCBidWlsZCB0aW1lLlxuICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWUgb24gc2VydmVyLXNpZGUuXG4vLyBJdCB3b24ndCBiZSBjYWxsZWQgb24gY2xpZW50LXNpZGUsIHNvIHlvdSBjYW4gZXZlbiBkb1xuLy8gZGlyZWN0IGRhdGFiYXNlIHF1ZXJpZXMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzbHVnID0gcGFyYW1zPy5zbHVnO1xuICAgIGNvbnN0IG1lbWUgPSBtZW1lcy5maW5kKChtZW1lKSA9PiBtZW1lLnVybCA9PT0gc2x1Zyk7XG4gICAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IGl0ZW0gfSwgdGhlIFN0YXRpY1Byb3BzRGV0YWlsIGNvbXBvbmVudFxuICAgIC8vIHdpbGwgcmVjZWl2ZSBgaXRlbWAgYXMgYSBwcm9wIGF0IGJ1aWxkIHRpbWVcbiAgICByZXR1cm4geyBwcm9wczogeyBtZW1lIH0gfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZXJyb3JzOiBlcnIubWVzc2FnZSwgbWVtZToge30gfSB9O1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[slug].tsx\n");

/***/ })

})