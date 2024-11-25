"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 2507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/sendEmail.js
// pages/api/sendEmail.js

async function handler(req, res) {
    if (req.method === "POST") {
        const { nombre , email , tipoProyecto , telefono , mensaje  } = req.body;
        // Configurar el transporter de Nodemailer
        const transporter = external_nodemailer_default().createTransport({
            host: "mail.letdev.com.ar",
            port: 587,
            auth: {
                user: "info@letdev.com.ar",
                pass: "desarrollo123"
            }
        });
        try {
            // Enviar el correo
            await transporter.sendMail({
                from: `"${nombre}" <${email}>`,
                to: "info@letdev.com.ar",
                subject: `Nuevo mensaje de ${nombre} - ${tipoProyecto}`,
                html: `<p><strong>Nombre Completo:</strong> ${nombre}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Teléfono:</strong> ${telefono}</p>
               <p><strong>Tipo de Proyecto:</strong> ${tipoProyecto}</p>
               <p><strong>Mensaje:</strong> ${mensaje}</p>`
            });
            return res.status(200).json({
                success: true,
                message: "Correo enviado con \xe9xito"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Error al enviar el correo"
            });
        }
    } else {
        res.status(405).json({
            message: "M\xe9todo no permitido"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2507));
module.exports = __webpack_exports__;

})();