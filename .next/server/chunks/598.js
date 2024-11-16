"use strict";
exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 8598:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TestimonialSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5566);
/* harmony import */ var _Testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4433);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8534);
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_3__, _Testimonial__WEBPACK_IMPORTED_MODULE_4__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_3__, _Testimonial__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function TestimonialSlider() {
    const [nav1, setNav1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [nav2, setNav2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const testimonialData = [
        {
            testimonialThumb: "/images/testimonial_1.jpeg",
            testimonialText: "I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",
            avatarName: "Ahon Monsery",
            avatarDesignation: "CEO AT TECH",
            ratings: "4"
        },
        {
            testimonialThumb: "/images/testimonial_2.jpeg",
            testimonialText: "I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",
            avatarName: "Ahon Monsery",
            avatarDesignation: "CEO AT TECH",
            ratings: "5"
        },
        {
            testimonialThumb: "/images/testimonial_3.jpeg",
            testimonialText: "I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",
            avatarName: "Ahon Monsery",
            avatarDesignation: "CEO AT TECH",
            ratings: "4.5"
        },
        {
            testimonialThumb: "/images/testimonial_1.jpeg",
            testimonialText: "I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",
            avatarName: "Ahon Monsery",
            avatarDesignation: "CEO AT TECH",
            ratings: "3.5"
        }
    ];
    const SlickArrowLeft = ({ currentSlide , slideCount , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...props,
            className: "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : ""),
            "aria-hidden": "true",
            "aria-disabled": currentSlide === 0 ? true : false,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                icon: "bi:arrow-left"
            })
        });
    const SlickArrowRight = ({ currentSlide , slideCount , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ...props,
            className: "slick-next slick-arrow" + (currentSlide === slideCount - 1 ? " slick-disabled" : ""),
            "aria-hidden": "true",
            "aria-disabled": currentSlide === slideCount - 1 ? true : false,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                icon: "bi:arrow-right"
            })
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            className: "cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spacing__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    lg: "130",
                    md: "80"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    className: "cs-shape_3 cs-to_up",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/shape_1.svg",
                        alt: "Shape"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: "cs-testimonial_slider",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "cs-testimonial_slider_left",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    asNavFor: nav1,
                                    ref: (slider2)=>setNav2(slider2),
                                    slidesToShow: 3,
                                    swipeToSlide: true,
                                    focusOnSelect: true,
                                    centerMode: true,
                                    centerPadding: "0px",
                                    arrows: false,
                                    children: testimonialData.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            className: "slider-nav_item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                className: "cs-rotate_img",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    className: "cs-rotate_img_in",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: item.testimonialThumb,
                                                        alt: "Thumb"
                                                    })
                                                })
                                            })
                                        }, index))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "cs-testimonial_slider_right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    asNavFor: nav2,
                                    ref: (slider1)=>setNav1(slider1),
                                    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SlickArrowLeft, {}),
                                    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SlickArrowRight, {}),
                                    className: "cs-arrow_style1",
                                    children: testimonialData.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Testimonial__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                testimonialText: item.testimonialText,
                                                avatarName: item.avatarName,
                                                avatarDesignation: item.avatarDesignation,
                                                ratings: item.ratings
                                            })
                                        }, index))
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spacing__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    lg: "130",
                    md: "80"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Testimonial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Testimonial({ testimonialText , avatarName , avatarDesignation , ratings  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: "cs-testimonial cs-style1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: "cs-testimonial_quote",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    icon: "fa:quote-left"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: "cs-testimonial_text",
                children: testimonialText
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: "cs-rating",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: "cs-rating_bg",
                        style: {
                            backgroundImage: "url(/images/rating.svg)"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: "cs-rating_percentage",
                        style: {
                            backgroundImage: "url(/images/rating.svg)",
                            width: `${ratings * 20}%`
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "cs-testimonial_avatar_name",
                children: avatarName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: "cs-testimonial_avatar_designation text-uppercase",
                children: avatarDesignation
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;