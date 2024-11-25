"use strict";
exports.id = 609;
exports.ids = [609];
exports.modules = {

/***/ 7609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PricingTableList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5988);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8534);
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_2__]);
___WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function PricingTableList() {
    const [tab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("monthly");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: "position-relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "cs-tab_links cs-style1 cs-mp0 cs-primary_font",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: tab === "monthly" ? "active" : "",
                        onClick: ()=>setTab("monthly"),
                        children: "Monthly"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: tab === "yearly" ? "active" : "",
                        onClick: ()=>setTab("yearly"),
                        children: "Yearly"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: "col-lg-4",
                        children: [
                            tab === "monthly" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                title: "Standard",
                                price: "29",
                                currency: "$",
                                timeline: "monthly",
                                features: [
                                    "Static responsive website",
                                    "Video marketing",
                                    "Keywords research",
                                    "Facebook campaign",
                                    "eCommerce solution",
                                    "Google adword"
                                ],
                                btnText: "Purchase Now",
                                btnLink: "/"
                            }),
                            tab === "yearly" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                title: "Standard",
                                price: "59",
                                currency: "$",
                                timeline: "yearly",
                                features: [
                                    "Static responsive website",
                                    "Video marketing",
                                    "Keywords research",
                                    "Facebook campaign",
                                    "eCommerce solution",
                                    "Google adword"
                                ],
                                btnText: "Purchase Now",
                                btnLink: "/"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spacing__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                lg: "25",
                                md: "25"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: "col-lg-4",
                        children: [
                            tab === "monthly" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                title: "Professional",
                                price: "199",
                                currency: "$",
                                timeline: "monthly",
                                features: [
                                    "Static responsive website",
                                    "Video marketing",
                                    "Keywords research",
                                    "Facebook campaign",
                                    "eCommerce solution",
                                    "Google adword"
                                ],
                                btnText: "Purchase Now",
                                btnLink: "/"
                            }),
                            tab === "yearly" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                title: "Professional",
                                price: "399",
                                currency: "$",
                                timeline: "yearly",
                                features: [
                                    "Static responsive website",
                                    "Video marketing",
                                    "Keywords research",
                                    "Facebook campaign",
                                    "eCommerce solution",
                                    "Google adword"
                                ],
                                btnText: "Purchase Now",
                                btnLink: "/"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spacing__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                lg: "25",
                                md: "25"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: "col-lg-4",
                        children: [
                            tab === "monthly" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                title: "Ultimate",
                                price: "299",
                                currency: "$",
                                timeline: "monthly",
                                features: [
                                    "Static responsive website",
                                    "Video marketing",
                                    "Keywords research",
                                    "Facebook campaign",
                                    "eCommerce solution",
                                    "Google adword"
                                ],
                                btnText: "Purchase Now",
                                btnLink: "/"
                            }),
                            tab === "yearly" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                title: "Ultimate",
                                price: "599",
                                currency: "$",
                                timeline: "yearly",
                                features: [
                                    "Static responsive website",
                                    "Video marketing",
                                    "Keywords research",
                                    "Facebook campaign",
                                    "eCommerce solution",
                                    "Google adword"
                                ],
                                btnText: "Purchase Now",
                                btnLink: "/"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spacing__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                lg: "25",
                                md: "25"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PricingTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6077);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__, _Button__WEBPACK_IMPORTED_MODULE_3__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_2__, _Button__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function PricingTable({ title , price , currency , features , btnLink , btnText , timeline  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: "cs-pricing_table cs-style1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "cs-pricing_title",
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "cs-pricing_info",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "cs-price",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                className: "cs-white_color",
                                children: [
                                    currency,
                                    price,
                                    "/"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "cs-accent_color",
                                children: timeline
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "cs-price_text",
                        children: "Per subscriber per year"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "cs-pricing_feature cs-mp0",
                children: features.map((feature, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "cs-feature_icon cs-accent_color",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                    icon: "bi:arrow-right-circle"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: feature
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "cs-pricing_btn_wrap",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    btnLink: btnLink,
                    btnText: btnText
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;