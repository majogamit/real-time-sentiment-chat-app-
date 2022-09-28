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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatMessage */ \"./components/ChatMessage.js\");\n/* components/Chat.js */ \n\n\n\n\n\n\n\n\n\n\n\nvar SAD_EMOJI = [\n    55357,\n    56864\n];\nvar HAPPY_EMOJI = [\n    55357,\n    56832\n];\nvar NEUTRAL_EMOJI = [\n    55357,\n    56848\n];\nvar Chat = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Chat, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Chat);\n    function Chat() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, Chat);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"state\", {\n            chats: []\n        });\n        /* components/Chat.js */ (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"handleKeyUp\", function(evt) {\n            var value = evt.target.value;\n            if (evt.keyCode === 13 && !evt.shiftKey) {\n                var _props = _this.props, user = _props.activeUser;\n                var chat = {\n                    user: user,\n                    message: value,\n                    timestamp: +new Date\n                };\n                evt.target.value = \"\";\n                axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"/message\", chat);\n            }\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(Chat, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                var _this = this;\n                this.pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_3___default())(\"YOUR_APP_KEY\", {\n                    cluster: \"YOUR_APP_CLUSTER\",\n                    encrypted: true\n                });\n                this.channel = this.pusher.subscribe(\"chat-room\");\n                this.channel.bind(\"new-message\", function(param) {\n                    var _chat = param.chat, chat = _chat === void 0 ? null : _chat;\n                    var chats = _this.state.chats;\n                    chat && chats.push(chat);\n                    _this.setState({\n                        chats: chats\n                    });\n                });\n                this.pusher.connection.bind(\"connected\", function() {\n                    axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"/messages\").then(function(response) {\n                        var chats = response.data.messages;\n                        _this.setState({\n                            chats: chats\n                        });\n                    });\n                });\n            }\n        },\n        {\n            key: \"componentWillUnmount\",\n            value: function componentWillUnmount() {\n                this.pusher.disconnect();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return this.props.activeUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border-bottom border-gray w-100 d-flex align-items-center bg-white\",\n                            style: {\n                                height: 90\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-dark mb-0 mx-4 px-2\",\n                                children: this.props.activeUser\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                                lineNumber: 63,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                            lineNumber: 62,\n                            columnNumber: 7\n                        }, this),\n                        \"/* components/Chat.js */\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative\",\n                            style: {\n                                height: \"calc(100% - 180px)\",\n                                overflowY: \"scroll\"\n                            },\n                            children: this.state.chats.map(function(chat, index) {\n                                var _String;\n                                var previous = Math.max(0, index - 1);\n                                var previousChat = _this.state.chats[previous];\n                                var position = chat.user === _this.props.activeUser ? \"right\" : \"left\";\n                                var isFirst = previous === index;\n                                var inSequence = chat.user === previousChat.user;\n                                var hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1;\n                                var mood = chat.sentiment > 0 ? HAPPY_EMOJI : chat.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                    children: [\n                                        (isFirst || !inSequence || hasDelay) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-\".concat(position),\n                                            style: {\n                                                fontSize: \"0.9rem\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"d-block\",\n                                                    style: {\n                                                        fontSize: \"1.6rem\"\n                                                    },\n                                                    children: (_String = String).fromCodePoint.apply(_String, (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(mood))\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: chat.user || \"Anonymous\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            message: chat.message,\n                                            position: position\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 11\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                            lineNumber: 70,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border-top border-gray w-100 px-4 d-flex align-items-center bg-light\",\n                            style: {\n                                minHeight: 90\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"form-control px-3 py-2\",\n                                onKeyUp: this.handleKeyUp,\n                                placeholder: \"Enter a chat message\",\n                                style: {\n                                    resize: \"none\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                                lineNumber: 109,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                            lineNumber: 108,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                    lineNumber: 60,\n                    columnNumber: 38\n                }, this);\n            }\n        }\n    ]);\n    return Chat;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QjtnQ0FBQ3dCLE9BQU8sRUFBRSxJQUFJLENBQUM1RCxXQUFXO2dDQUFFNkQsV0FBVyxFQUFDLHNCQUFzQjtnQ0FBQ3hCLEtBQUssRUFBRTtvQ0FBRXlCLE1BQU0sRUFBRSxNQUFNO2lDQUFFOzs7OztvQ0FBYTs7Ozs7Z0NBQzdJOzs7Ozs7d0JBRUcsQ0FBRTthQUNkOzs7O0NBSUYsQ0F6R2tCekUsNENBQVMsQ0F5RzNCO0FBRUQsK0RBQWVRLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXQuanM/MDVhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjb21wb25lbnRzL0NoYXQuanMgKi9cclxuICAgIFxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFB1c2hlciBmcm9tICdwdXNoZXItanMnO1xyXG5pbXBvcnQgQ2hhdE1lc3NhZ2UgZnJvbSAnLi9DaGF0TWVzc2FnZSc7XHJcbiAgICBcclxuICAgIGNvbnN0IFNBRF9FTU9KSSA9IFs1NTM1NywgNTY4NjRdO1xyXG4gICAgY29uc3QgSEFQUFlfRU1PSkkgPSBbNTUzNTcsIDU2ODMyXTtcclxuICAgIGNvbnN0IE5FVVRSQUxfRU1PSkkgPSBbNTUzNTcsIDU2ODQ4XTtcclxuXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHsgY2hhdHM6IFtdIH1cclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICBcclxuICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0tFWSwge1xyXG4gICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0NMVVNURVIsXHJcbiAgICAgIGVuY3J5cHRlZDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMucHVzaGVyLnN1YnNjcmliZSgnY2hhdC1yb29tJyk7XHJcbiAgICBcclxuICAgIHRoaXMuY2hhbm5lbC5iaW5kKCduZXctbWVzc2FnZScsICh7IGNoYXQgPSBudWxsIH0pID0+IHtcclxuICAgICAgY29uc3QgeyBjaGF0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgY2hhdCAmJiBjaGF0cy5wdXNoKGNoYXQpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hhdHMgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5iaW5kKCdjb25uZWN0ZWQnLCAoKSA9PiB7XHJcbiAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlcycpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2hhdHMgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2VzO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXRzIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG4gIFxyXG4vKiBjb21wb25lbnRzL0NoYXQuanMgKi9cclxuICAgICAgXHJcbmhhbmRsZUtleVVwID0gZXZ0ID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgIFxyXG4gICAgaWYgKGV2dC5rZXlDb2RlID09PSAxMyAmJiAhZXZ0LnNoaWZ0S2V5KSB7XHJcbiAgICAgIGNvbnN0IHsgYWN0aXZlVXNlcjogdXNlciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgY2hhdCA9IHsgdXNlciwgbWVzc2FnZTogdmFsdWUsIHRpbWVzdGFtcDogK25ldyBEYXRlIH07XHJcbiAgICAgIFxyXG4gICAgICBldnQudGFyZ2V0LnZhbHVlID0gJyc7XHJcbiAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlJywgY2hhdCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAodGhpcy5wcm9wcy5hY3RpdmVVc2VyICYmIDxGcmFnbWVudD5cclxuICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ib3R0b20gYm9yZGVyLWdyYXkgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiZy13aGl0ZVwiIHN0eWxlPXt7IGhlaWdodDogOTAgfX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZGFyayBtYi0wIG14LTQgcHgtMlwiPnt0aGlzLnByb3BzLmFjdGl2ZVVzZXJ9PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAvKiBjb21wb25lbnRzL0NoYXQuanMgKi9cclxuICAgIFxyXG4gICAgey8qKiBDSEFUIEhFQURFUiBIRVJFICoqL31cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHBiLTQgdy0xMDAgZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1zdGFydCBhbGlnbi1jb250ZW50LXN0YXJ0IHBvc2l0aW9uLXJlbGF0aXZlXCIgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDAlIC0gMTgwcHgpJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgIFxyXG4gICAgICB7dGhpcy5zdGF0ZS5jaGF0cy5tYXAoKGNoYXQsIGluZGV4KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzID0gTWF0aC5tYXgoMCwgaW5kZXggLSAxKTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c0NoYXQgPSB0aGlzLnN0YXRlLmNoYXRzW3ByZXZpb3VzXTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNoYXQudXNlciA9PT0gdGhpcy5wcm9wcy5hY3RpdmVVc2VyID8gXCJyaWdodFwiIDogXCJsZWZ0XCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaXNGaXJzdCA9IHByZXZpb3VzID09PSBpbmRleDtcclxuICAgICAgICBjb25zdCBpblNlcXVlbmNlID0gY2hhdC51c2VyID09PSBwcmV2aW91c0NoYXQudXNlcjtcclxuICAgICAgICBjb25zdCBoYXNEZWxheSA9IE1hdGguY2VpbCgoY2hhdC50aW1lc3RhbXAgLSBwcmV2aW91c0NoYXQudGltZXN0YW1wKSAvICgxMDAwICogNjApKSA+IDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbW9vZCA9IGNoYXQuc2VudGltZW50ID4gMCA/IEhBUFBZX0VNT0pJIDogKGNoYXQuc2VudGltZW50ID09PSAwID8gTkVVVFJBTF9FTU9KSSA6IFNBRF9FTU9KSSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB7IChpc0ZpcnN0IHx8ICFpblNlcXVlbmNlIHx8IGhhc0RlbGF5KSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BkLWJsb2NrIHctMTAwIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1kYXJrIG10LTQgcGItMSBweC0xIHRleHQtJHtwb3NpdGlvbn1gfSBzdHlsZT17eyBmb250U2l6ZTogJzAuOXJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxLjZyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgICB7U3RyaW5nLmZyb21Db2RlUG9pbnQoLi4ubW9vZCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57Y2hhdC51c2VyIHx8ICdBbm9ueW1vdXMnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Q2hhdE1lc3NhZ2UgbWVzc2FnZT17Y2hhdC5tZXNzYWdlfSBwb3NpdGlvbj17cG9zaXRpb259IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICB9KX1cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgey8qKiBDSEFUIE1FU1NBR0UgQk9YIEhFUkUgKiovfVxyXG5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItZ3JheSB3LTEwMCBweC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgYmctbGlnaHRcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IDkwIH19PlxyXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcHgtMyBweS0yXCIgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgbWVzc2FnZVwiIHN0eWxlPXt7IHJlc2l6ZTogJ25vbmUnIH19PjwvdGV4dGFyZWE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvRnJhZ21lbnQ+IClcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJheGlvcyIsIlB1c2hlciIsIkNoYXRNZXNzYWdlIiwiU0FEX0VNT0pJIiwiSEFQUFlfRU1PSkkiLCJORVVUUkFMX0VNT0pJIiwiQ2hhdCIsInN0YXRlIiwiY2hhdHMiLCJoYW5kbGVLZXlVcCIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwia2V5Q29kZSIsInNoaWZ0S2V5IiwicHJvcHMiLCJhY3RpdmVVc2VyIiwidXNlciIsImNoYXQiLCJtZXNzYWdlIiwidGltZXN0YW1wIiwiRGF0ZSIsInBvc3QiLCJjb21wb25lbnREaWRNb3VudCIsInB1c2hlciIsInByb2Nlc3MiLCJlbnYiLCJQVVNIRVJfQVBQX0tFWSIsImNsdXN0ZXIiLCJQVVNIRVJfQVBQX0NMVVNURVIiLCJlbmNyeXB0ZWQiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsInB1c2giLCJzZXRTdGF0ZSIsImNvbm5lY3Rpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRpc2Nvbm5lY3QiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsImgyIiwib3ZlcmZsb3dZIiwibWFwIiwiaW5kZXgiLCJTdHJpbmciLCJwcmV2aW91cyIsIk1hdGgiLCJtYXgiLCJwcmV2aW91c0NoYXQiLCJwb3NpdGlvbiIsImlzRmlyc3QiLCJpblNlcXVlbmNlIiwiaGFzRGVsYXkiLCJjZWlsIiwibW9vZCIsInNlbnRpbWVudCIsImZvbnRTaXplIiwic3BhbiIsImZyb21Db2RlUG9pbnQiLCJtaW5IZWlnaHQiLCJ0ZXh0YXJlYSIsIm9uS2V5VXAiLCJwbGFjZWhvbGRlciIsInJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Chat.js\n"));

/***/ })

});