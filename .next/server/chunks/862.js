"use strict";
exports.id = 862;
exports.ids = [862];
exports.modules = {

/***/ 862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8534);



function VideoModal({ videoSrc , bgUrl , variant  }) {
    const [iframeSrc, setIframeSrc] = useState("about:blank");
    const [toggle, setToggle] = useState(false);
    const handelClick = ()=>{
        const video = videoSrc.split("?v=")[1].trim();
        setIframeSrc(`https://www.youtube.com/embed/${video}`);
        setToggle(!toggle);
    };
    const handelClose = ()=>{
        setIframeSrc("about:blank");
        setToggle(!toggle);
    };
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Div, {
                className: `cs-video_block ${variant ? variant : "cs-style1"} cs-video_open cs-bg`,
                style: {
                    backgroundImage: `url(${bgUrl})`
                },
                onClick: handelClick,
                children: /*#__PURE__*/ _jsx("span", {
                    className: "cs-player_btn cs-accent_color",
                    children: /*#__PURE__*/ _jsx("span", {})
                })
            }),
            /*#__PURE__*/ _jsxs(Div, {
                className: toggle ? "cs-video_popup active" : "cs-video_popup",
                children: [
                    /*#__PURE__*/ _jsx(Div, {
                        className: "cs-video_popup_overlay"
                    }),
                    /*#__PURE__*/ _jsxs(Div, {
                        className: "cs-video_popup_content",
                        children: [
                            /*#__PURE__*/ _jsx(Div, {
                                className: "cs-video_popup_layer"
                            }),
                            /*#__PURE__*/ _jsxs(Div, {
                                className: "cs-video_popup_container",
                                children: [
                                    /*#__PURE__*/ _jsx(Div, {
                                        className: "cs-video_popup_align",
                                        children: /*#__PURE__*/ _jsx(Div, {
                                            className: "embed-responsive embed-responsive-16by9",
                                            children: /*#__PURE__*/ _jsx("iframe", {
                                                className: "embed-responsive-item",
                                                src: iframeSrc,
                                                title: "video modal"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(Div, {
                                        className: "cs-video_popup_close",
                                        onClick: handelClose
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;