"use strict";
exports.id = 576;
exports.ids = [576];
exports.modules = {

/***/ 1576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8534);



function FunFact2({ data , variant , bgUrl  }) {
    return /*#__PURE__*/ _jsxs(Div, {
        className: variant ? `cs-funfact_wrap_2 ${variant}` : "cs-funfact_wrap_2",
        children: [
            bgUrl && /*#__PURE__*/ _jsx("div", {
                className: "cs-funfact_shape",
                style: {
                    backgroundImage: `url(${bgUrl})`
                }
            }),
            /*#__PURE__*/ _jsx(Div, {
                className: "cs-funfacts",
                children: data.map((item, index)=>/*#__PURE__*/ _jsx(Div, {
                        children: /*#__PURE__*/ _jsxs(Div, {
                            className: "cs-funfact cs-style2",
                            children: [
                                /*#__PURE__*/ _jsxs(Div, {
                                    className: "cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "odometer"
                                        }),
                                        item.factNumber,
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "cs-plus",
                                            children: "+"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("h3", {
                                    className: "cs-funfact_title",
                                    children: item.title
                                })
                            ]
                        })
                    }, index))
            })
        ]
    });
}


/***/ })

};
;