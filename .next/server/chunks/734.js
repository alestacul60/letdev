"use strict";
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 9025:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
// EXTERNAL MODULE: ./components/Div/index.jsx
var components_Div = __webpack_require__(8534);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Post/index.jsx



function Post_Post({ url , src , alt , date , title  }) {
    return /*#__PURE__*/ _jsxs(Div, {
        className: "cs-post cs-style1",
        children: [
            /*#__PURE__*/ _jsxs(Link, {
                href: url,
                className: "cs-post_thumb",
                children: [
                    /*#__PURE__*/ _jsx("img", {
                        src: src,
                        alt: alt
                    }),
                    /*#__PURE__*/ _jsx(Div, {
                        className: "cs-post_overlay"
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Div, {
                className: "cs-post_info",
                children: [
                    /*#__PURE__*/ _jsx(Div, {
                        className: "cs-posted_by",
                        children: date
                    }),
                    /*#__PURE__*/ _jsx("h2", {
                        className: "cs-post_title",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "blog-details.html",
                            children: title
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Slider/PostSlider.jsx





function PostSlider() {
    const postData = [
        {
            url: "/blog/blog-details",
            src: "/images/post_1.jpeg",
            alt: "Post",
            date: "07 Mar 2022",
            title: "How to keep fear from ruining your art business with confident"
        },
        {
            url: "/blog/blog-details",
            src: "/images/post_2.jpeg",
            alt: "Post",
            date: "10 Feb 2022",
            title: "Artistic mind will be great for creation anything"
        },
        {
            url: "/blog/blog-details",
            src: "/images/post_3.jpeg",
            alt: "Post",
            date: "05 Mar 2022",
            title: "A.I will take over all job for human within next year"
        },
        {
            url: "/blog/blog-details",
            src: "/images/post_1.jpeg",
            alt: "Post",
            date: "07 Mar 2022",
            title: "How to keep fear from ruining your art business with confident"
        },
        {
            url: "/blog/blog-details",
            src: "/images/post_2.jpeg",
            alt: "Post",
            date: "10 Feb 2022",
            title: "Artistic mind will be great for creation anything"
        },
        {
            url: "/blog/blog-details",
            src: "/images/post_3.jpeg",
            alt: "Post",
            date: "05 Mar 2022",
            title: "A.I will take over all job for human within next year"
        }
    ];
    /** Slider Settings **/ const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ _jsx(Slider, {
        ...settings,
        className: "cs-gap-24",
        children: postData.map((item, index)=>/*#__PURE__*/ _jsx(Div, {
                children: /*#__PURE__*/ _jsx(Post, {
                    url: item.url,
                    src: item.src,
                    alt: item.alt,
                    date: item.date,
                    title: item.title
                })
            }, index))
    });
}


/***/ })

};
;