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
exports.id = "pages/api/sendEmail";
exports.ids = ["pages/api/sendEmail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/sendEmail.js":
/*!********************************!*\
  !*** ./pages/api/sendEmail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n// pages/api/sendEmail.js\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { nombre , email , tipoProyecto , telefono , mensaje  } = req.body;\n        // Configurar el transporter de Nodemailer\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n            host: \"mail.letdev.com.ar\",\n            port: 587,\n            auth: {\n                user: \"info@letdev.com.ar\",\n                pass: \"desarrollo123\"\n            }\n        });\n        try {\n            // Enviar el correo\n            await transporter.sendMail({\n                from: `\"${nombre}\" <${email}>`,\n                to: \"info@letdev.com.ar\",\n                subject: `Nuevo mensaje de ${nombre} - ${tipoProyecto}`,\n                html: `<p><strong>Nombre Completo:</strong> ${nombre}</p>\r\n               <p><strong>Email:</strong> ${email}</p>\r\n               <p><strong>Teléfono:</strong> ${telefono}</p>\r\n               <p><strong>Tipo de Proyecto:</strong> ${tipoProyecto}</p>\r\n               <p><strong>Mensaje:</strong> ${mensaje}</p>`\n            });\n            return res.status(200).json({\n                success: true,\n                message: \"Correo enviado con \\xe9xito\"\n            });\n        } catch (error) {\n            console.error(error);\n            return res.status(500).json({\n                success: false,\n                message: \"Error al enviar el correo\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"M\\xe9todo no permitido\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZEVtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlCQUF5QjtBQUNXO0FBRXJCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3ZCLE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxNQUFLLEVBQUVDLGFBQVksRUFBRUMsU0FBUSxFQUFFQyxRQUFPLEVBQUUsR0FBR1AsSUFBSVEsSUFBSTtRQUVuRSwwQ0FBMEM7UUFDMUMsTUFBTUMsY0FBY1gsaUVBQTBCLENBQUM7WUFDM0NhLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNO2dCQUNGQyxNQUFNO2dCQUNOQyxNQUFNO1lBQ1Y7UUFDSjtRQUVBLElBQUk7WUFDQSxtQkFBbUI7WUFDbkIsTUFBTU4sWUFBWU8sUUFBUSxDQUFDO2dCQUN2QkMsTUFBTSxDQUFDLENBQUMsRUFBRWQsT0FBTyxHQUFHLEVBQUVDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QmMsSUFBSTtnQkFDSkMsU0FBUyxDQUFDLGlCQUFpQixFQUFFaEIsT0FBTyxHQUFHLEVBQUVFLGFBQWEsQ0FBQztnQkFDdkRlLE1BQU0sQ0FBQyxxQ0FBcUMsRUFBRWpCLE9BQU87MENBQzNCLEVBQUVDLE1BQU07NkNBQ0wsRUFBRUUsU0FBUztxREFDSCxFQUFFRCxhQUFhOzRDQUN4QixFQUFFRSxRQUFRLElBQUksQ0FBQztZQUMvQztZQUVBLE9BQU9OLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTLElBQUk7Z0JBQUVDLFNBQVM7WUFBMkI7UUFDckYsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7WUFDZCxPQUFPeEIsSUFBSW9CLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUMsU0FBUztZQUE0QjtRQUN2RjtJQUNKLE9BQU87UUFDSHZCLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLFNBQVM7UUFBc0I7SUFDMUQsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmluby1uZXh0anMvLi9wYWdlcy9hcGkvc2VuZEVtYWlsLmpzPzIwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3NlbmRFbWFpbC5qc1xyXG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCB7IG5vbWJyZSwgZW1haWwsIHRpcG9Qcm95ZWN0bywgdGVsZWZvbm8sIG1lbnNhamUgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgICAvLyBDb25maWd1cmFyIGVsIHRyYW5zcG9ydGVyIGRlIE5vZGVtYWlsZXJcclxuICAgICAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgICAgICAgICAgaG9zdDogJ21haWwubGV0ZGV2LmNvbS5hcicsXHJcbiAgICAgICAgICAgIHBvcnQ6IDU4NyxcclxuICAgICAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogJ2luZm9AbGV0ZGV2LmNvbS5hcicsIC8vIHR1IHVzdWFyaW8gZGUgZW1haWxcclxuICAgICAgICAgICAgICAgIHBhc3M6ICdkZXNhcnJvbGxvMTIzJywgLy8gY29udHJhc2XDsWEgZGUgdHUgZW1haWxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gRW52aWFyIGVsIGNvcnJlb1xyXG4gICAgICAgICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBgXCIke25vbWJyZX1cIiA8JHtlbWFpbH0+YCwgLy8gRWwgY29ycmVvIHkgbm9tYnJlIGRlbCByZW1pdGVudGVcclxuICAgICAgICAgICAgICAgIHRvOiAnaW5mb0BsZXRkZXYuY29tLmFyJywgLy8gQ29ycmVvIGRlc3RpbmF0YXJpbyAocHVlZGVzIGNhbWJpYXJsbyBhIHVubyBlc3BlY8OtZmljbylcclxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IGBOdWV2byBtZW5zYWplIGRlICR7bm9tYnJlfSAtICR7dGlwb1Byb3llY3RvfWAsIC8vIEFzdW50byBkZWwgY29ycmVvXHJcbiAgICAgICAgICAgICAgICBodG1sOiBgPHA+PHN0cm9uZz5Ob21icmUgQ29tcGxldG86PC9zdHJvbmc+ICR7bm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gJHtlbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+VGVsw6lmb25vOjwvc3Ryb25nPiAke3RlbGVmb25vfTwvcD5cclxuICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5UaXBvIGRlIFByb3llY3RvOjwvc3Ryb25nPiAke3RpcG9Qcm95ZWN0b308L3A+XHJcbiAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+TWVuc2FqZTo8L3N0cm9uZz4gJHttZW5zYWplfTwvcD5gLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdDb3JyZW8gZW52aWFkbyBjb24gw6l4aXRvJyB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdFcnJvciBhbCBlbnZpYXIgZWwgY29ycmVvJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ03DqXRvZG8gbm8gcGVybWl0aWRvJyB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJub21icmUiLCJlbWFpbCIsInRpcG9Qcm95ZWN0byIsInRlbGVmb25vIiwibWVuc2FqZSIsImJvZHkiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0IiwiYXV0aCIsInVzZXIiLCJwYXNzIiwic2VuZE1haWwiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendEmail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendEmail.js"));
module.exports = __webpack_exports__;

})();