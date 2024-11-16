"use strict";
exports.id = 146;
exports.ids = [146];
exports.modules = {

/***/ 7146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionHeading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6077);
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6130);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_2__, _Button__WEBPACK_IMPORTED_MODULE_3__]);
([html_react_parser__WEBPACK_IMPORTED_MODULE_2__, _Button__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function SectionHeading({ title , subtitle , btnLink , btnText , variant , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        className: variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "cs-section_subtitle",
                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(subtitle)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "cs-section_title",
                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(title)
            }),
            children,
            btnText && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spacing__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        lg: "45",
                        md: "20"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        btnLink: btnLink,
                        btnText: btnText
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;