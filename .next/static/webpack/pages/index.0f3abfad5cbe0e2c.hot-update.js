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

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatMessage */ \"./components/ChatMessage.js\");\n/* components/Chat.js */ \n\n\n\n\n\n\n\n\n\n\nvar SAD_EMOJI = [\n    55357,\n    56864\n];\nvar HAPPY_EMOJI = [\n    55357,\n    56832\n];\nvar NEUTRAL_EMOJI = [\n    55357,\n    56848\n];\nvar Chat = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Chat, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Chat);\n    function Chat() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, Chat);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"state\", {\n            chats: []\n        });\n        /* components/Chat.js */ (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"handleKeyUp\", function(evt) {\n            var value = evt.target.value;\n            if (evt.keyCode === 13 && !evt.shiftKey) {\n                var _props = _this.props, user = _props.activeUser;\n                var chat = {\n                    user: user,\n                    message: value,\n                    timestamp: +new Date\n                };\n                evt.target.value = \"\";\n                axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"/message\", chat);\n            }\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(Chat, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                var _this = this;\n                this.pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_3___default())(\"YOUR_APP_KEY\", {\n                    cluster: \"YOUR_APP_CLUSTER\",\n                    encrypted: true\n                });\n                this.channel = this.pusher.subscribe(\"chat-room\");\n                this.channel.bind(\"new-message\", function(param) {\n                    var _chat = param.chat, chat = _chat === void 0 ? null : _chat;\n                    var chats = _this.state.chats;\n                    chat && chats.push(chat);\n                    _this.setState({\n                        chats: chats\n                    });\n                });\n                this.pusher.connection.bind(\"connected\", function() {\n                    axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"/messages\").then(function(response) {\n                        var chats = response.data.messages;\n                        _this.setState({\n                            chats: chats\n                        });\n                    });\n                });\n            }\n        },\n        {\n            key: \"componentWillUnmount\",\n            value: function componentWillUnmount() {\n                this.pusher.disconnect();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return this.props.activeUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border-bottom border-gray w-100 d-flex align-items-center bg-white\",\n                            style: {\n                                height: 90\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-dark mb-0 mx-4 px-2\",\n                                children: this.props.activeUser\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                                lineNumber: 63,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                            lineNumber: 62,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border-top border-gray w-100 px-4 d-flex align-items-center bg-light\",\n                            style: {\n                                minHeight: 90\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"form-control px-3 py-2\",\n                                onKeyUp: this.handleKeyUp,\n                                placeholder: \"Enter a chat message\",\n                                style: {\n                                    resize: \"none\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                                lineNumber: 67,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                            lineNumber: 66,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                    lineNumber: 60,\n                    columnNumber: 38\n                }, this);\n            }\n        }\n    ]);\n    return Chat;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsTUFBTSxHQUFHO2dCQUNQLE9BQVEsSUFBSSxDQUFDNUIsS0FBSyxDQUFDQyxVQUFVLGtCQUFJLDhEQUFDakIsMkNBQVE7O3NDQUV4Qyw4REFBQzZDLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxvRUFBb0U7NEJBQUNDLEtBQUssRUFBRTtnQ0FBRUMsTUFBTSxFQUFFLEVBQUU7NkJBQUU7c0NBQ3ZHLDRFQUFDQyxJQUFFO2dDQUFDSCxTQUFTLEVBQUMsMEJBQTBCOzBDQUFFLElBQUksQ0FBQzlCLEtBQUssQ0FBQ0MsVUFBVTs7Ozs7b0NBQU07Ozs7O2dDQUNqRTtzQ0FFTiw4REFBQzRCLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxzRUFBc0U7NEJBQUNDLEtBQUssRUFBRTtnQ0FBRUcsU0FBUyxFQUFFLEVBQUU7NkJBQUU7c0NBQzVHLDRFQUFDQyxVQUFRO2dDQUFDTCxTQUFTLEVBQUMsd0JBQXdCO2dDQUFDTSxPQUFPLEVBQUUsSUFBSSxDQUFDMUMsV0FBVztnQ0FBRTJDLFdBQVcsRUFBQyxzQkFBc0I7Z0NBQUNOLEtBQUssRUFBRTtvQ0FBRU8sTUFBTSxFQUFFLE1BQU07aUNBQUU7Ozs7O29DQUFhOzs7OztnQ0FDN0k7Ozs7Ozt3QkFFRyxDQUFFO2FBQ2Q7Ozs7Q0FJRixDQS9Ea0J2RCw0Q0FBUyxDQStEM0I7QUFFRCwrREFBZVEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdC5qcz8wNWFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbXBvbmVudHMvQ2hhdC5qcyAqL1xyXG4gICAgXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHVzaGVyIGZyb20gJ3B1c2hlci1qcyc7XHJcbmltcG9ydCBDaGF0TWVzc2FnZSBmcm9tICcuL0NoYXRNZXNzYWdlJztcclxuICAgIFxyXG4gICAgY29uc3QgU0FEX0VNT0pJID0gWzU1MzU3LCA1Njg2NF07XHJcbiAgICBjb25zdCBIQVBQWV9FTU9KSSA9IFs1NTM1NywgNTY4MzJdO1xyXG4gICAgY29uc3QgTkVVVFJBTF9FTU9KSSA9IFs1NTM1NywgNTY4NDhdO1xyXG5cclxuY2xhc3MgQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRlID0geyBjaGF0czogW10gfVxyXG4gIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIFxyXG4gICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfS0VZLCB7XHJcbiAgICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfQ0xVU1RFUixcclxuICAgICAgZW5jcnlwdGVkOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKCdjaGF0LXJvb20nKTtcclxuICAgIFxyXG4gICAgdGhpcy5jaGFubmVsLmJpbmQoJ25ldy1tZXNzYWdlJywgKHsgY2hhdCA9IG51bGwgfSkgPT4ge1xyXG4gICAgICBjb25zdCB7IGNoYXRzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjaGF0ICYmIGNoYXRzLnB1c2goY2hhdCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGF0cyB9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLnB1c2hlci5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RlZCcsICgpID0+IHtcclxuICAgICAgYXhpb3MucG9zdCgnL21lc3NhZ2VzJylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjaGF0cyA9IHJlc3BvbnNlLmRhdGEubWVzc2FnZXM7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hhdHMgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbiAgXHJcbi8qIGNvbXBvbmVudHMvQ2hhdC5qcyAqL1xyXG4gICAgICBcclxuaGFuZGxlS2V5VXAgPSBldnQgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgXHJcbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDEzICYmICFldnQuc2hpZnRLZXkpIHtcclxuICAgICAgY29uc3QgeyBhY3RpdmVVc2VyOiB1c2VyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBjaGF0ID0geyB1c2VyLCBtZXNzYWdlOiB2YWx1ZSwgdGltZXN0YW1wOiArbmV3IERhdGUgfTtcclxuICAgICAgXHJcbiAgICAgIGV2dC50YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgYXhpb3MucG9zdCgnL21lc3NhZ2UnLCBjaGF0KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLnByb3BzLmFjdGl2ZVVzZXIgJiYgPEZyYWdtZW50PlxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbSBib3JkZXItZ3JheSB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLXdoaXRlXCIgc3R5bGU9e3sgaGVpZ2h0OiA5MCB9fT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1kYXJrIG1iLTAgbXgtNCBweC0yXCI+e3RoaXMucHJvcHMuYWN0aXZlVXNlcn08L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItZ3JheSB3LTEwMCBweC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgYmctbGlnaHRcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IDkwIH19PlxyXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcHgtMyBweS0yXCIgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgbWVzc2FnZVwiIHN0eWxlPXt7IHJlc2l6ZTogJ25vbmUnIH19PjwvdGV4dGFyZWE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvRnJhZ21lbnQ+IClcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJheGlvcyIsIlB1c2hlciIsIkNoYXRNZXNzYWdlIiwiU0FEX0VNT0pJIiwiSEFQUFlfRU1PSkkiLCJORVVUUkFMX0VNT0pJIiwiQ2hhdCIsInN0YXRlIiwiY2hhdHMiLCJoYW5kbGVLZXlVcCIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwia2V5Q29kZSIsInNoaWZ0S2V5IiwicHJvcHMiLCJhY3RpdmVVc2VyIiwidXNlciIsImNoYXQiLCJtZXNzYWdlIiwidGltZXN0YW1wIiwiRGF0ZSIsInBvc3QiLCJjb21wb25lbnREaWRNb3VudCIsInB1c2hlciIsInByb2Nlc3MiLCJlbnYiLCJQVVNIRVJfQVBQX0tFWSIsImNsdXN0ZXIiLCJQVVNIRVJfQVBQX0NMVVNURVIiLCJlbmNyeXB0ZWQiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsInB1c2giLCJzZXRTdGF0ZSIsImNvbm5lY3Rpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRpc2Nvbm5lY3QiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsImgyIiwibWluSGVpZ2h0IiwidGV4dGFyZWEiLCJvbktleVVwIiwicGxhY2Vob2xkZXIiLCJyZXNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Chat.js\n"));

/***/ }),

/***/ "./components/ChatMessage.js":
/*!***********************************!*\
  !*** ./components/ChatMessage.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n\nvar ChatMessage = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ChatMessage, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChatMessage);\n    function ChatMessage() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, ChatMessage);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ChatMessage, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _props = this.props, _position = _props.position, position = _position === void 0 ? \"left\" : _position, message = _props.message;\n                var isRight = position.toLowerCase() === \"right\";\n                var align = isRight ? \"text-right\" : \"text-left\";\n                var justify = isRight ? \"justify-content-end\" : \"justify-content-start\";\n                var messageBoxStyles = {\n                    maxWidth: \"70%\",\n                    flexGrow: 0\n                };\n                var messageStyles = {\n                    fontWeight: 500,\n                    lineHeight: 1.4,\n                    whiteSpace: \"pre-wrap\"\n                };\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-100 my-1 d-flex \".concat(justify),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-light rounded border border-gray p-2\",\n                        style: messageBoxStyles,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"d-block text-secondary \".concat(align),\n                            style: messageStyles,\n                            children: message\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\ChatMessage.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\ChatMessage.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\ChatMessage.js\",\n                    lineNumber: 23,\n                    columnNumber: 16\n                }, this);\n            }\n        }\n    ]);\n    return ChatMessage;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatMessage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXRNZXNzYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztBQUF5QztBQUVyQyxlQUFpQixpQkE4QmxCOzs7O2FBOUJPRSxXQUFXOzs7Ozs7WUFFZkMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AsSUFBdUMsTUFBVSxHQUFWLElBQUksQ0FBQ0MsS0FBSyxjQUFWLE1BQVUsQ0FBekNDLFFBQVEsRUFBUkEsUUFBUSwwQkFBRyxNQUFNLGNBQUVDLE9BQU8sR0FBSyxNQUFVLENBQXRCQSxPQUFPO2dCQUNsQyxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csV0FBVyxFQUFFLEtBQUssT0FBTztnQkFFbEQsSUFBTUMsS0FBSyxHQUFHRixPQUFPLEdBQUcsWUFBWSxHQUFHLFdBQVc7Z0JBQ2xELElBQU1HLE9BQU8sR0FBR0gsT0FBTyxHQUFHLHFCQUFxQixHQUFHLHVCQUF1QjtnQkFFekUsSUFBTUksZ0JBQWdCLEdBQUc7b0JBQ3ZCQyxRQUFRLEVBQUUsS0FBSztvQkFDZkMsUUFBUSxFQUFFLENBQUM7aUJBQ1o7Z0JBRUQsSUFBTUMsYUFBYSxHQUFHO29CQUNwQkMsVUFBVSxFQUFFLEdBQUc7b0JBQ2ZDLFVBQVUsRUFBRSxHQUFHO29CQUNmQyxVQUFVLEVBQUUsVUFBVTtpQkFDdkI7Z0JBRUQscUJBQU8sOERBQUNDLEtBQUc7b0JBQUNDLFNBQVMsRUFBRSxvQkFBbUIsQ0FBVSxPQUFSVCxPQUFPLENBQUU7OEJBQ25ELDRFQUFDUSxLQUFHO3dCQUFDQyxTQUFTLEVBQUMseUNBQXlDO3dCQUFDQyxLQUFLLEVBQUVULGdCQUFnQjtrQ0FDOUUsNEVBQUNVLE1BQUk7NEJBQUNGLFNBQVMsRUFBRSx5QkFBd0IsQ0FBUSxPQUFOVixLQUFLLENBQUU7NEJBQUVXLEtBQUssRUFBRU4sYUFBYTtzQ0FDckVSLE9BQU87Ozs7O2dDQUNIOzs7Ozs0QkFDSDs7Ozs7d0JBQ0Y7YUFDUDs7OztDQUVGLENBN0J5QkwsNENBQVMsQ0E2QmxDO0FBRUQsK0RBQWVDLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRNZXNzYWdlLmpzPzc3ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuICAgIFxyXG4gICAgY2xhc3MgQ2hhdE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBvc2l0aW9uID0gJ2xlZnQnLCBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGlzUmlnaHQgPSBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFsaWduID0gaXNSaWdodCA/ICd0ZXh0LXJpZ2h0JyA6ICd0ZXh0LWxlZnQnO1xyXG4gICAgICAgIGNvbnN0IGp1c3RpZnkgPSBpc1JpZ2h0ID8gJ2p1c3RpZnktY29udGVudC1lbmQnIDogJ2p1c3RpZnktY29udGVudC1zdGFydCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUJveFN0eWxlcyA9IHtcclxuICAgICAgICAgIG1heFdpZHRoOiAnNzAlJyxcclxuICAgICAgICAgIGZsZXhHcm93OiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtZXNzYWdlU3R5bGVzID0ge1xyXG4gICAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgdy0xMDAgbXktMSBkLWZsZXggJHtqdXN0aWZ5fWB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saWdodCByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheSBwLTJcIiBzdHlsZT17bWVzc2FnZUJveFN0eWxlc30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGQtYmxvY2sgdGV4dC1zZWNvbmRhcnkgJHthbGlnbn1gfSBzdHlsZT17bWVzc2FnZVN0eWxlc30+XHJcbiAgICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBDaGF0TWVzc2FnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDaGF0TWVzc2FnZSIsInJlbmRlciIsInByb3BzIiwicG9zaXRpb24iLCJtZXNzYWdlIiwiaXNSaWdodCIsInRvTG93ZXJDYXNlIiwiYWxpZ24iLCJqdXN0aWZ5IiwibWVzc2FnZUJveFN0eWxlcyIsIm1heFdpZHRoIiwiZmxleEdyb3ciLCJtZXNzYWdlU3R5bGVzIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ3aGl0ZVNwYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatMessage.js\n"));

/***/ })

});