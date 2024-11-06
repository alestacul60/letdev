import { Icon } from '@iconify/react';
import Head from 'next/head';
import React from 'react';
import Div from '../components/Div';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
import ContactInfoWidget from '../components/Widget/ContactInfoWidget';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [enviando, setEnviando] = useState(false); // Estado para el envío

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoProyecto: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Correo enviado con éxito', {
          position: "top-right",
          autoClose: 3000,
        });
        // Vaciar formulario en caso de éxito
        setFormData({
          nombre: '',
          email: '',
          tipoProyecto: '',
          telefono: '',
          mensaje: '',
        });

        setEnviando(false);

      } else {
        toast.error('Error al enviar el correo', {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Ocurrió un error al enviar el correo', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Contacto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ToastContainer />
        <PageHeading
          title="Contactanos"
          bgSrc="/images/contact_hero_bg.jpeg"
          pageLinkText="Contacto"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading
                title="Tenes un proyecto <br/>en mente?"
                subtitle="Hace click"
              />
              <Spacing lg="55" md="30" />
              <ContactInfoWidget withIcon />
              <Spacing lg="0" md="50" />
            </Div>
            <Div className="col-lg-6">
              <form onSubmit={handleSubmit} className="row">
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Nombre Completo*</label>
                  <input
                    type="text"
                    className="cs-form_field"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Email*</label>
                  <input
                    type="email"
                    className="cs-form_field"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Tipo de proyecto*</label>
                  <input
                    type="text"
                    className="cs-form_field"
                    name="tipoProyecto"
                    value={formData.tipoProyecto}
                    onChange={handleChange}
                    required
                  />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Teléfono*</label>
                  <input
                    type="text"
                    className="cs-form_field"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-12">
                  <label className="cs-primary_color">Contanos tu idea*</label>
                  <textarea
                    className="cs-form_field"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="7"
                    required
                  ></textarea>
                  <Spacing lg="25" md="25" />
                </Div>
                <Div className="col-sm-12">
                  <button type="submit" className="cs-btn cs-style1" disabled={enviando}>
                    <span>{enviando ? 'Enviando...' : 'Enviar Mensaje'}</span>
                    <Icon icon="bi:arrow-right" />
                  </button>

                </Div>
              </form>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="cs-google_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-59.65610308071918!3d-29.154437418554846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA5JzE1LjkiUyA1OcKwMzknMjIuMiJX!5e0!3m2!1sen!2sbd!4v1698348408574!5m2!1sen!2sbd"
            allowFullScreen
            title="Google Map"
          />
        </Div>
        <Spacing lg="50" md="40" />
      </Layout>
    </>
  );
}