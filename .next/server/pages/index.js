"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pusher-js */ \"pusher-js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_3__);\n/* components/Chat.js */ \n\n\n\nclass Chat extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    state = {\n        chats: []\n    };\n    componentDidMount() {\n        this.pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_3___default())(\"YOUR_APP_KEY\", {\n            cluster: \"YOUR_APP_CLUSTER\",\n            encrypted: true\n        });\n        this.channel = this.pusher.subscribe(\"chat-room\");\n        this.channel.bind(\"new-message\", ({ chat =null  })=>{\n            const { chats  } = this.state;\n            chat && chats.push(chat);\n            this.setState({\n                chats\n            });\n        });\n        this.pusher.connection.bind(\"connected\", ()=>{\n            axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"/messages\").then((response)=>{\n                const chats = response.data.messages;\n                this.setState({\n                    chats\n                });\n            });\n        });\n    }\n    componentWillUnmount() {\n        this.pusher.disconnect();\n    }\n    /* components/Chat.js */ handleKeyUp = (evt)=>{\n        const value = evt.target.value;\n        if (evt.keyCode === 13 && !evt.shiftKey) {\n            const { activeUser: user  } = this.props;\n            const chat = {\n                user,\n                message: value,\n                timestamp: +new Date\n            };\n            evt.target.value = \"\";\n            axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"/message\", chat);\n        }\n    };\n    render() {\n        return this.props.activeUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-bottom border-gray w-100 d-flex align-items-center bg-white\",\n                    style: {\n                        height: 90\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-dark mb-0 mx-4 px-2\",\n                        children: this.props.activeUser\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-top border-gray w-100 px-4 d-flex align-items-center bg-light\",\n                    style: {\n                        minHeight: 90\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"form-control px-3 py-2\",\n                        onKeyUp: this.handleKeyUp,\n                        placeholder: \"Enter a chat message\",\n                        style: {\n                            resize: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Chat.js\",\n            lineNumber: 55,\n            columnNumber: 38\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3Qjt3QkFBQ00sT0FBTyxFQUFFLElBQUksQ0FBQ3BCLFdBQVc7d0JBQUVxQixXQUFXLEVBQUMsc0JBQXNCO3dCQUFDTixLQUFLLEVBQUU7NEJBQUVPLE1BQU0sRUFBRSxNQUFNO3lCQUFFOzs7Ozs0QkFBYTs7Ozs7d0JBQzdJOzs7Ozs7Z0JBRUcsQ0FBRTtLQUNkO0NBSUY7QUFFRCxpRUFBZS9DLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWx0aW1lLWNoYXQtYXBwLy4vY29tcG9uZW50cy9DaGF0LmpzPzA1YWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogY29tcG9uZW50cy9DaGF0LmpzICovXHJcbiAgICBcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcclxuXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0ZSA9IHsgY2hhdHM6IFtdIH1cclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICBcclxuICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0tFWSwge1xyXG4gICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0NMVVNURVIsXHJcbiAgICAgIGVuY3J5cHRlZDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMucHVzaGVyLnN1YnNjcmliZSgnY2hhdC1yb29tJyk7XHJcbiAgICBcclxuICAgIHRoaXMuY2hhbm5lbC5iaW5kKCduZXctbWVzc2FnZScsICh7IGNoYXQgPSBudWxsIH0pID0+IHtcclxuICAgICAgY29uc3QgeyBjaGF0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgY2hhdCAmJiBjaGF0cy5wdXNoKGNoYXQpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hhdHMgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5iaW5kKCdjb25uZWN0ZWQnLCAoKSA9PiB7XHJcbiAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlcycpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2hhdHMgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2VzO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXRzIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG4gIFxyXG4vKiBjb21wb25lbnRzL0NoYXQuanMgKi9cclxuICAgICAgXHJcbmhhbmRsZUtleVVwID0gZXZ0ID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgIFxyXG4gICAgaWYgKGV2dC5rZXlDb2RlID09PSAxMyAmJiAhZXZ0LnNoaWZ0S2V5KSB7XHJcbiAgICAgIGNvbnN0IHsgYWN0aXZlVXNlcjogdXNlciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgY2hhdCA9IHsgdXNlciwgbWVzc2FnZTogdmFsdWUsIHRpbWVzdGFtcDogK25ldyBEYXRlIH07XHJcbiAgICAgIFxyXG4gICAgICBldnQudGFyZ2V0LnZhbHVlID0gJyc7XHJcbiAgICAgIGF4aW9zLnBvc3QoJy9tZXNzYWdlJywgY2hhdCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAodGhpcy5wcm9wcy5hY3RpdmVVc2VyICYmIDxGcmFnbWVudD5cclxuICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ib3R0b20gYm9yZGVyLWdyYXkgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBiZy13aGl0ZVwiIHN0eWxlPXt7IGhlaWdodDogOTAgfX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZGFyayBtYi0wIG14LTQgcHgtMlwiPnt0aGlzLnByb3BzLmFjdGl2ZVVzZXJ9PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLWdyYXkgdy0xMDAgcHgtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLWxpZ2h0XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiA5MCB9fT5cclxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHB4LTMgcHktMlwiIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9IHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBjaGF0IG1lc3NhZ2VcIiBzdHlsZT17eyByZXNpemU6ICdub25lJyB9fT48L3RleHRhcmVhPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L0ZyYWdtZW50PiApXHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiYXhpb3MiLCJQdXNoZXIiLCJDaGF0Iiwic3RhdGUiLCJjaGF0cyIsImNvbXBvbmVudERpZE1vdW50IiwicHVzaGVyIiwicHJvY2VzcyIsImVudiIsIlBVU0hFUl9BUFBfS0VZIiwiY2x1c3RlciIsIlBVU0hFUl9BUFBfQ0xVU1RFUiIsImVuY3J5cHRlZCIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwiY2hhdCIsInB1c2giLCJzZXRTdGF0ZSIsImNvbm5lY3Rpb24iLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2VzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkaXNjb25uZWN0IiwiaGFuZGxlS2V5VXAiLCJldnQiLCJ2YWx1ZSIsInRhcmdldCIsImtleUNvZGUiLCJzaGlmdEtleSIsImFjdGl2ZVVzZXIiLCJ1c2VyIiwicHJvcHMiLCJtZXNzYWdlIiwidGltZXN0YW1wIiwiRGF0ZSIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0IiwiaDIiLCJtaW5IZWlnaHQiLCJ0ZXh0YXJlYSIsIm9uS2V5VXAiLCJwbGFjZWhvbGRlciIsInJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Chat.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* components/Layout.js */ \n\n\nconst Layout = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Layout.js\",\n                        lineNumber: 9,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Layout.js\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\",\n                        integrity: \"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Layout.js\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: props.pageTitle || \"Realtime Chat\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Layout.js\",\n                        lineNumber: 12,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Layout.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined),\n            props.children\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\components\\\\Layout.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBQXdCLEdBRXhCO0FBQXdDO0FBQ1g7QUFFN0IsTUFBTUcsTUFBTSxHQUFHQyxDQUFBQSxLQUFLLGlCQUNsQiw4REFBQ0gsMkNBQVE7OzBCQUNQLDhEQUFDQyxrREFBSTs7a0NBQ0gsOERBQUNHLE1BQUk7d0JBQUNDLE9BQU8sRUFBQyxPQUFPOzs7OztpQ0FBRztrQ0FDeEIsOERBQUNELE1BQUk7d0JBQUNFLElBQUksRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMsdURBQXVEOzs7OztpQ0FBRztrQ0FDeEYsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxZQUFZO3dCQUFDQyxJQUFJLEVBQUMsdUVBQXVFO3dCQUFDQyxTQUFTLEVBQUMseUVBQXlFO3dCQUFDQyxXQUFXLEVBQUMsV0FBVzs7Ozs7aUNBQUc7a0NBQ2xOLDhEQUFDQyxPQUFLO2tDQUFFVixLQUFLLENBQUNXLFNBQVMsSUFBSSxlQUFlOzs7OztpQ0FBUzs7Ozs7O3lCQUM5QztZQUNOWCxLQUFLLENBQUNZLFFBQVE7Ozs7OztpQkFDTjtBQUdiLGlFQUFlYixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFsdGltZS1jaGF0LWFwcC8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogY29tcG9uZW50cy9MYXlvdXQuanMgKi9cclxuICAgIFxyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXHJcbiAgPEZyYWdtZW50PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgIDx0aXRsZT57cHJvcHMucGFnZVRpdGxlIHx8ICdSZWFsdGltZSBDaGF0J308L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gIDwvRnJhZ21lbnQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJIZWFkIiwiTGF5b3V0IiwicHJvcHMiLCJtZXRhIiwiY2hhclNldCIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJpbnRlZ3JpdHkiLCJjcm9zc09yaWdpbiIsInRpdGxlIiwicGFnZVRpdGxlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Chat */ \"./components/Chat.js\");\n/* pages/index.js */ \n\n\n\nclass IndexPage extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    state = {\n        user: null\n    };\n    handleKeyUp = (evt)=>{\n        if (evt.keyCode === 13) {\n            const user = evt.target.value;\n            this.setState({\n                user\n            });\n        }\n    };\n    render() {\n        const { user  } = this.state;\n        const nameInputStyles = {\n            background: \"transparent\",\n            color: \"#999\",\n            border: 0,\n            borderBottom: \"1px solid #666\",\n            borderRadius: 0,\n            fontSize: \"3rem\",\n            fontWeight: 500,\n            boxShadow: \"none !important\"\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            pageTitle: \"Realtime Chat\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container-fluid position-absolute h-100 bg-dark\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row position-absolute w-100 h-100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"px-5 mx-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"d-block w-100 h1 text-light\",\n                                        style: {\n                                            marginTop: -50\n                                        },\n                                        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    style: {\n                                                        color: \"#999\"\n                                                    },\n                                                    children: \"Hello!\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 27\n                                                }, this),\n                                                \" \",\n                                                user\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 26\n                                        }, this) : `What is your name?`\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, this),\n                                    !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"form-control mt-3 px-3 py-2\",\n                                        onKeyUp: this.handleKeyUp,\n                                        autoComplete: \"off\",\n                                        style: nameInputStyles\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 28\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0\",\n                            children: user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chat__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                activeUser: user\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndexPage, {}, void 0, false, {\n        fileName: \"D:\\\\Downloads\\\\Projects_2022\\\\realtime-chat-app\\\\pages\\\\index.js\",\n        lineNumber: 73,\n        columnNumber: 3\n    }, undefined));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0JBQWtCLEdBRWxCO0FBQXlDO0FBQ0M7QUFDSjtBQUd0QyxNQUFNSSxTQUFTLFNBQVNILDRDQUFTO0lBRS9CSSxLQUFLLEdBQUc7UUFBRUMsSUFBSSxFQUFFLElBQUk7S0FBRTtJQUV0QkMsV0FBVyxHQUFHQyxDQUFBQSxHQUFHLEdBQUk7UUFDbkIsSUFBSUEsR0FBRyxDQUFDQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ3RCLE1BQU1ILElBQUksR0FBSUUsR0FBRyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7WUFDOUIsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0JBQUVOLElBQUk7YUFBRSxDQUFDLENBQUM7U0FDekI7S0FDRjtJQUVETyxNQUFNLEdBQUc7UUFDUCxNQUFNLEVBQUVQLElBQUksR0FBRSxHQUFHLElBQUksQ0FBQ0QsS0FBSztRQUUzQixNQUFNUyxlQUFlLEdBQUc7WUFDdEJDLFVBQVUsRUFBRSxhQUFhO1lBQ3pCQyxLQUFLLEVBQUUsTUFBTTtZQUNiQyxNQUFNLEVBQUUsQ0FBQztZQUNUQyxZQUFZLEVBQUUsZ0JBQWdCO1lBQzlCQyxZQUFZLEVBQUUsQ0FBQztZQUNmQyxRQUFRLEVBQUUsTUFBTTtZQUNoQkMsVUFBVSxFQUFFLEdBQUc7WUFDZkMsU0FBUyxFQUFFLGlCQUFpQjtTQUM3QjtRQUVELHFCQUNFLDhEQUFDcEIsMERBQU07WUFBQ3FCLFNBQVMsRUFBQyxlQUFlO3NCQUUvQiw0RUFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFDLGlEQUFpRDswQkFFL0QsNEVBQUNDLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxtQ0FBbUM7O3NDQUVoRCw4REFBQ0UsU0FBTzs0QkFBQ0YsU0FBUyxFQUFDLGlGQUFpRjtzQ0FDbEcsNEVBQUNDLEtBQUc7Z0NBQUNELFNBQVMsRUFBQyxXQUFXOztrREFFeEIsOERBQUNHLE1BQUk7d0NBQUNILFNBQVMsRUFBQyw2QkFBNkI7d0NBQUNJLEtBQUssRUFBRTs0Q0FBQ0MsU0FBUyxFQUFFLENBQUMsRUFBRTt5Q0FBQztrREFFakV4QixJQUFJLGlCQUNDLDhEQUFDc0IsTUFBSTs7OERBQ0osOERBQUNBLE1BQUk7b0RBQUNDLEtBQUssRUFBRTt3REFBQ2IsS0FBSyxFQUFFLE1BQU07cURBQUM7OERBQUUsUUFBTTs7Ozs7d0RBQU87Z0RBQUEsR0FBQztnREFBQ1YsSUFBSTs7Ozs7O2dEQUM1QyxHQUNQLENBQUMsa0JBQWtCLENBQUM7Ozs7OzRDQUVyQjtvQ0FFTCxDQUFDQSxJQUFJLGtCQUFJLDhEQUFDeUIsT0FBSzt3Q0FBQ0MsSUFBSSxFQUFDLE1BQU07d0NBQUNQLFNBQVMsRUFBQyw2QkFBNkI7d0NBQUNRLE9BQU8sRUFBRSxJQUFJLENBQUMxQixXQUFXO3dDQUFFMkIsWUFBWSxFQUFDLEtBQUs7d0NBQUNMLEtBQUssRUFBRWYsZUFBZTs7Ozs7NENBQUk7Ozs7OztvQ0FFMUk7Ozs7O2dDQUNFO3NDQUVWLDhEQUFDYSxTQUFPOzRCQUFDRixTQUFTLEVBQUMseUdBQXlHO3NDQUMxSG5CLElBQUksa0JBQUksOERBQUNILHdEQUFJO2dDQUFDZ0MsVUFBVSxFQUFFN0IsSUFBSTs7Ozs7b0NBQUk7Ozs7O2dDQUMxQjs7Ozs7O3dCQUVOOzs7OztvQkFFRDs7Ozs7Z0JBRUEsQ0FDVDtLQUNIO0NBRUY7QUFFRCxpRUFBZSxrQkFDYiw4REFBQ0YsU0FBUzs7OztpQkFBRyxFQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhbHRpbWUtY2hhdC1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIHBhZ2VzL2luZGV4LmpzICovXHJcbiAgICBcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdCc7XHJcblxyXG5cclxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGUgPSB7IHVzZXI6IG51bGwgfVxyXG4gIFxyXG4gIGhhbmRsZUtleVVwID0gZXZ0ID0+IHtcclxuICAgIGlmIChldnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgY29uc3QgdXNlciA9ICBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlciB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgXHJcbiAgICBjb25zdCBuYW1lSW5wdXRTdHlsZXMgPSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGNvbG9yOiAnIzk5OScsXHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICM2NjYnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgIGZvbnRTaXplOiAnM3JlbScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgYm94U2hhZG93OiAnbm9uZSAhaW1wb3J0YW50J1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCBwYWdlVGl0bGU9XCJSZWFsdGltZSBDaGF0XCI+XHJcbiAgICAgIFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwb3NpdGlvbi1hYnNvbHV0ZSBoLTEwMCBiZy1kYXJrXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBoLTEwMFwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC1tZC04IGQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgYWxpZ24taXRlbXMtY2VudGVyIGFsaWduLWNvbnRlbnQtY2VudGVyIHB4LTVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgbXgtNVwiPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBoMSB0ZXh0LWxpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Ub3A6IC01MH19PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgPyAoPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjogJyM5OTknfX0+SGVsbG8hPC9zcGFuPiB7dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPilcclxuICAgICAgICAgICAgICAgICAgICAgIDogYFdoYXQgaXMgeW91ciBuYW1lP2BcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7ICF1c2VyICYmIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtdC0zIHB4LTMgcHktMlwiIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9IGF1dG9Db21wbGV0ZT1cIm9mZlwiIHN0eWxlPXtuYW1lSW5wdXRTdHlsZXN9IC8+IH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC13cmFwIGgtMTAwIGFsaWduLWl0ZW1zLXN0YXJ0IGFsaWduLWNvbnRlbnQtYmV0d2VlbiBiZy13aGl0ZSBweC0wXCI+XHJcbiAgICAgICAgICAgIHsgdXNlciAmJiA8Q2hhdCBhY3RpdmVVc2VyPXt1c2VyfSAvPiB9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICBcclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxJbmRleFBhZ2UgLz5cclxuKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDaGF0IiwiSW5kZXhQYWdlIiwic3RhdGUiLCJ1c2VyIiwiaGFuZGxlS2V5VXAiLCJldnQiLCJrZXlDb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInJlbmRlciIsIm5hbWVJbnB1dFN0eWxlcyIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJvcmRlckJvdHRvbSIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJveFNoYWRvdyIsInBhZ2VUaXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzZWN0aW9uIiwic3BhbiIsInN0eWxlIiwibWFyZ2luVG9wIiwiaW5wdXQiLCJ0eXBlIiwib25LZXlVcCIsImF1dG9Db21wbGV0ZSIsImFjdGl2ZVVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();