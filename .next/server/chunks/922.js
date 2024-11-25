"use strict";
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8534);



function LogoList() {
    const partnerLogos = [
        {
            src: "/images/partner_1.svg",
            alt: "Partner"
        },
        {
            src: "/images/partner_2.svg",
            alt: "Partner"
        },
        {
            src: "/images/partner_3.svg",
            alt: "Partner"
        },
        {
            src: "/images/partner_4.svg",
            alt: "Partner"
        },
        {
            src: "/images/partner_5.svg",
            alt: "Partner"
        }
    ];
    return /*#__PURE__*/ _jsx(Div, {
        className: "cs-partner_logo_wrap",
        children: partnerLogos.map((partnerLogo, index)=>/*#__PURE__*/ _jsx("div", {
                className: "cs-partner_logo",
                children: /*#__PURE__*/ _jsx("img", {
                    src: partnerLogo.src,
                    alt: partnerLogo.alt
                })
            }, index))
    });
}


/***/ }),

/***/ 4732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VerticalLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8534);


function VerticalLinks({ title , data , variant  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: `cs-hero_social_wrap cs-primary_font cs-primary_color ${variant ? variant : ""}`,
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                className: "cs-hero_social_title",
                children: title
            }),
            data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "cs-hero_social_links",
                children: data.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: item.links,
                            children: item.name
                        })
                    }, index))
            })
        ]
    });
}


/***/ })

};
;