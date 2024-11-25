"use strict";
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 7968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8534);
/* harmony import */ var _Widget_AuthorWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5547);
/* harmony import */ var _Widget_RecentPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7571);
/* harmony import */ var _Widget_SearchWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2881);
/* harmony import */ var _Widget_SideMenuWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6565);
/* harmony import */ var _Widget_TagWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5259);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Widget_SearchWidget__WEBPACK_IMPORTED_MODULE_5__, _Widget_SideMenuWidget__WEBPACK_IMPORTED_MODULE_6__]);
([_Widget_SearchWidget__WEBPACK_IMPORTED_MODULE_5__, _Widget_SideMenuWidget__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Sidebar() {
    const tagData = [
        {
            title: "Business",
            url: "/"
        },
        {
            title: "Agency",
            url: "/"
        },
        {
            title: "Artwork",
            url: "/"
        },
        {
            title: "Marketing",
            url: "/"
        },
        {
            title: "Information",
            url: "/"
        },
        {
            title: "Design",
            url: "/"
        },
        {
            title: "Wordpress",
            url: "/"
        }
    ];
    const archiveData = [
        {
            title: "Archives",
            url: "/"
        },
        {
            title: "15 Aug 2022",
            url: "/"
        },
        {
            title: "20 Sep 2021",
            url: "/"
        },
        {
            title: "11 Dec 2020",
            url: "/"
        },
        {
            title: "25 jun 2020",
            url: "/"
        }
    ];
    const categoryData = [
        {
            title: "Corporate",
            url: "/"
        },
        {
            title: "Company",
            url: "/"
        },
        {
            title: "Search Engine",
            url: "/"
        },
        {
            title: "Information",
            url: "/"
        },
        {
            title: "Painting",
            url: "/"
        }
    ];
    const recentPostData = [
        {
            title: "How to studio setup...",
            thumb: "/images/recent_post_1.jpeg",
            href: "/blog/blog-details",
            date: "15 Aug 2022"
        },
        {
            title: "Creative people mind...",
            thumb: "/images/recent_post_2.jpeg",
            href: "/blog/blog-details",
            date: "14 Aug 2022"
        },
        {
            title: "AI take over human...",
            thumb: "/images/recent_post_3.jpeg",
            href: "/blog/blog-details",
            date: "13 Aug 2022"
        },
        {
            title: "You should now add...",
            thumb: "/images/recent_post_4.jpeg",
            href: "/blog/blog-details",
            date: "12 Aug 2022"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "cs-sidebar_item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Widget_AuthorWidget__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    src: "/images/avatar_1.png",
                    name: "Kuber Jontra",
                    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "cs-sidebar_item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Widget_SearchWidget__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: "Search"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "cs-sidebar_item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Widget_SideMenuWidget__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    title: "Categories",
                    data: categoryData
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "cs-sidebar_item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Widget_RecentPost__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: "Archives",
                    data: recentPostData
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "cs-sidebar_item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Widget_SideMenuWidget__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    title: "Archives",
                    data: archiveData
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "cs-sidebar_item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Widget_TagWidget__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    title: "Tags",
                    data: tagData
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthorWidget)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8534);



function AuthorWidget({ src , name , description  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: "cs-author_card text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: src,
                alt: "Aauthor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: description
            })
        ]
    });
}


/***/ }),

/***/ 7571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RecentPost)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8534);



function RecentPost({ title , data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "cs-sidebar_widget_title",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "cs-recent_posts",
                children: data?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "cs-recent_post",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: item.href,
                                    className: "cs-recent_post_thumb",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        className: "cs-recent_post_thumb_in cs-bg",
                                        style: {
                                            backgroundImage: `url(${item.thumb})`
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    className: "cs-recent_post_info",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "cs-recent_post_title",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: item.href,
                                                children: item.title
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            className: "cs-recent_post_date cs-primary_40_color",
                                            children: item.date
                                        })
                                    ]
                                })
                            ]
                        })
                    }, index))
            })
        ]
    });
}


/***/ }),

/***/ 2881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchWidget)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function SearchWidget({ title  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "cs-sidebar_widget_title",
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "cs-sidebar_search",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "Search..."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "cs-sidebar_search_btn",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                            icon: "material-symbols:search-rounded"
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideMenuWidget)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function SideMenuWidget({ title , data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "cs-sidebar_widget_title",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "cs-side_menu_widget",
                children: data?.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                icon: "material-symbols:keyboard-double-arrow-right-rounded"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: item.url,
                                children: item.title
                            }, index)
                        ]
                    }, index))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TagWidget)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8534);



function TagWidget({ title , data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "cs-sidebar_widget_title",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Div__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "tagcloud",
                children: data?.map((tag, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: tag.url,
                        className: "tag-cloud-link",
                        children: tag.title
                    }, index))
            })
        ]
    });
}


/***/ })

};
;