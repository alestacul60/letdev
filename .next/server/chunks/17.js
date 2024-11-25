"use strict";
exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 7017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8534);




function Accordion() {
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handelToggle = (index)=>{
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    };
    const accordionData = [
        {
            question: "\xbfDise\xf1an sitios web con ilustraciones?",
            answer: "S\xed, creamos sitios web que incluyen ilustraciones personalizadas, adaptadas a las necesidades visuales de tu marca o proyecto."
        },
        {
            question: "\xbfC\xf3mo se entregan los detalles del proyecto y los pagos?",
            answer: "Puedes enviarnos los detalles del proyecto a trav\xe9s de nuestro formulario de contacto o correo electr\xf3nico. Los pagos se procesan de manera segura una vez acordados los t\xe9rminos del proyecto."
        },
        {
            question: "\xbfMe puedes decir c\xf3mo contactarlos para un proyecto?",
            answer: "Puedes contactarnos directamente a trav\xe9s de nuestra p\xe1gina web, por correo electr\xf3nico o llam\xe1ndonos a nuestro n\xfamero de contacto. Estaremos encantados de discutir tu proyecto."
        },
        {
            question: "\xbfRealizan logos, iconos personalizados, etc.?",
            answer: "S\xed, ofrecemos servicios de dise\xf1o de logotipos, iconos y otros elementos visuales personalizados, adaptados a tu identidad de marca."
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: "cs-accordians cs-style1",
        children: accordionData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: `cs-accordian ${selected === index ? "active" : ""}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        className: "cs-accordian_head",
                        onClick: ()=>handelToggle(index),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "cs-accordian_title",
                                children: item.question
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "cs-accordian_toggle cs-accent_color",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    width: 15,
                                    height: 8,
                                    viewBox: "0 0 15 8",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M0 0L7.5 7.5L15 0H0Z",
                                        fill: "currentColor"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        className: "cs-accordian_body",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "cs-accordian_body_in",
                            children: item.answer
                        })
                    })
                ]
            }, index))
    });
}


/***/ })

};
;