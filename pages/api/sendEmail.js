// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nombre, email, tipoProyecto, telefono, mensaje } = req.body;

        // Configurar el transporter de Nodemailer
        const transporter = nodemailer.createTransport({
            host: 'mail.letdev.com.ar',
            port: 587,
            auth: {
                user: 'info@letdev.com.ar', // tu usuario de email
                pass: 'desarrollo123', // contraseña de tu email
            },
        });

        try {
            // Enviar el correo
            await transporter.sendMail({
                from: `"${nombre}" <${email}>`, // El correo y nombre del remitente
                to: 'info@letdev.com.ar', // Correo destinatario (puedes cambiarlo a uno específico)
                subject: `Nuevo mensaje de ${nombre} - ${tipoProyecto}`, // Asunto del correo
                html: `<p><strong>Nombre Completo:</strong> ${nombre}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Teléfono:</strong> ${telefono}</p>
               <p><strong>Tipo de Proyecto:</strong> ${tipoProyecto}</p>
               <p><strong>Mensaje:</strong> ${mensaje}</p>`,
            });

            return res.status(200).json({ success: true, message: 'Correo enviado con éxito' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Error al enviar el correo' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
