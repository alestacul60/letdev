import { Icon } from '@iconify/react';
import Head from 'next/head';
import React, { useState } from 'react';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact2 from '../components/FunFact/FunFact2';
import Hero4 from '../components/Hero/Hero4';
import Layout from '../components/Layout';
import LogoList from '../components/LogoList';
import MovingText2 from '../components/MovingText/MovingText2';
import Portfolio from '../components/Portfolio';
import PostList from '../components/Post/PostList';
import SectionHeading from '../components/SectionHeading';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import TimelineSlider from '../components/Slider/TimelineSlider';
import Spacing from '../components/Spacing';
import VideoModal from '../components/VideoModal';

export default function DigitalAgency() {
  const [itemShow, setItemShow] = useState(6);
  const heroSocialLinks = [
    {
      name: 'Behance',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];
  const funfaceData = [
    {
      title: 'Digital products',
      factNumber: '550',
    },
    {
      title: 'Global happy clients',
      factNumber: '40K',
    },
    {
      title: 'Project completed',
      factNumber: '50k',
    },
    {
      title: 'Team members',
      factNumber: '250',
    },
  ];
  const serviceData1 = [
    {
      title: 'Diseño UI/UX',
      href: '/service/service-details',
    },
    {
      title: 'Marketing Digital',
      href: '/service/service-details',
    },
    {
      title: 'Diseño Grafico',
      href: '/service/service-details',
    },
  ];
  const serviceData2 = [
    {
      title: 'Desarrollo de API',
      href: '/service/service-details',
    },
    {
      title: 'Desarrollo de Software',
      href: '/service/service-details',
    },
    {
      title: 'Desarrollo Web',
      href: '/service/service-details',
    },
  ];
  const portfolioData = [
    {
      title: 'Sitio Minimalista',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap1.PNG',
      category: 'portfolio'
    },
    {
      title: 'Restaurante',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap13.PNG',
      category: 'portfolio'
    },
    {
      title: 'Menu',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap12.PNG',
      category: 'portfolio'
    },
    {
      title: 'Portfolio',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap14.PNG',
      category: 'portfolio'
    },
    {
      title: 'CV Online',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap15.PNG',
      category: 'portfolio'
    },
    {
      title: 'Catalogo',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap16.PNG',
      category: 'portfolio'
    },
    {
      title: 'Presentacion',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap17.PNG',
      category: 'portfolio'
    },
    {
      title: 'Portfolio Fotografico',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap18.PNG',
      category: 'portfolio'
    }
  ];
  return (
    <>
      <Head>
        <title>Home - Digital Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero4
          title="Somos la agencia <br /> digital <span>LetDev</span>"
          subtitle="Ofrecemos estrategias personalizadas que impulsan la visibilidad de tu marca y aumentan la interacción con tu audiencia.
          ¡Potencia tu crecimiento con nosotros!"
          scrollDownId="#service"
          socialLinksHeading="Seguinos"
          heroSocialLinks={heroSocialLinks}
          phoneNumber="+54 341 2104375"
          email="info@letdev.com.ar"
        />
        {/* End Hero Section */}



        {/* Start Services Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Que Ofrecemos?"
            subtitle="Nuestros Servicios"
            variant="cs-style1 text-center"
          />
          <Spacing lg="65" md="45" />
        </Div>
        {/* End Services Section */}

        {/* Start Moving Text Section */}
        <MovingText2 data={serviceData1} />
        <Spacing lg="20" md="10" />
        <MovingText2 reverseDirection data={serviceData2} />
        {/* End Moving Text Section */}


        {/* Start Projects Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Explora nuestro Portfolio"
            subtitle="Nuestros Proyectos"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            {portfolioData.slice(0, itemShow).map((item, index) => (
              <Div
                className={`${index === 0 || index === 3 || index === 4
                  ? 'col-lg-8'
                  : 'col-lg-4'
                  }`}
                key={index}
              >
                <Portfolio
                  title={item.title}
                  subtitle={item.subtitle}
                  href={item.href}
                  src={item.src}
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}
          </Div>

          <Div className="text-center">
            {portfolioData.length <= itemShow ? (
              ''
            ) : (
              <>
                <Spacing lg="65" md="40" />
                <span
                  className="cs-text_btn"
                  onClick={() => setItemShow(itemShow + 3)}
                >
                  <span>Ver Mas</span>
                  <Icon icon="bi:arrow-right" />
                </span>
                <Spacing lg="25" md="25" />
              </>
            )}
          </Div>
        </Div>
        {/* End Projects Section */}



        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Hagamos algo <br /> <i>genial</i> juntos"
            btnText="Solicita una reunion"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
