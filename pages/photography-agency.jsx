import { Icon } from '@iconify/react';
import Head from 'next/head';
import Card from '../components/Card';
import Div from '../components/Div';
import FunFact2 from '../components/FunFact/FunFact2';
import MasonryGallery from '../components/Gallery/MasonryGallery';
import Hero2 from '../components/Hero/Hero2';
import Layout from '../components/Layout';
import PricingTableList from '../components/PricingTable/PricingTableList';
import SectionHeading from '../components/SectionHeading';
import PostSlider from '../components/Slider/PostSlider';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import Spacing from '../components/Spacing';

export default function PhotographyAgency() {
  const heroData = [
    {
      title: 'Wedding',
      imageUrl: './images/wedding.jpeg',
      href: '/service/service-details',
    },
    {
      title: 'Fashion',
      imageUrl: './images/fashion.jpeg',
      href: '/service/service-details',
    },
    {
      title: 'Commercial',
      imageUrl: './images/commercial.jpeg',
      href: '/service/service-details',
    },
    {
      title: 'Landscape',
      imageUrl: './images/landscape.jpeg',
      href: '/service/service-details',
    },
  ];
  const funfaceData = [
    {
      title: 'Products',
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
  return (
    <>
      <Head>
        <title>Home - Photography Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero2
          data={heroData}
          phoneNumber="+044 546664"
          email="info@letdev.com.ar"
        />
        {/* End Hero Section */}

        {/* Start About Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row align-items-center cs-column_reverse_lg">
            <Div className="col-lg-5">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/about_img_5.jpeg"
                  alt="About"
                  className="cs-w100 cs-radius_5"
                />
              </Div>
            </Div>
            <Div className="col-lg-6 offset-lg-1">
              <SectionHeading
                title="We are Perras based photography <br/>agency"
                subtitle="About Us"
                btnText="Learn More"
                btnLink="/about"
              />
              <Spacing lg="0" md="40" />
            </Div>
          </Div>
        </Div>
        {/* End About Section */}

        {/* Start Gallery Section */}
        <Spacing lg="145" md="80" />
        <MasonryGallery />
        {/* End Gallery Section */}

        {/* Start Pricing Section */}
        <Spacing lg="140" md="70" />
        <Div className="container">
          <SectionHeading
            title="Providing best <br/>pricing for client"
            subtitle="Pricing & Packaging"
          />
          <Spacing lg="85" md="40" />
          <PricingTableList />
        </Div>
        {/* End Pricing Section */}





        {/* Start Contact Section */}
        <Spacing lg="140" md="70" />
        <Div className="container">
          <SectionHeading
            title="Contacto"
            subtitle="Contactanos"
            variant="cs-style1 text-center"
          />
        </Div>
        <Div className="cs-gradient_bg_1">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-5 col-lg-6">
                <Spacing lg="100" md="80" />
                <form action="#" className="row">
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Nombre*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Email*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Tipo de Proyecto*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Telefono*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-12">
                    <label className="cs-primary_color">Contanos tu idea*</label>
                    <textarea
                      cols="30"
                      rows="7"
                      className="cs-form_field"
                    ></textarea>
                    <Spacing lg="25" md="25" />
                  </Div>
                  <Div className="col-sm-12">
                    <button className="cs-btn cs-style1">
                      <span>Enviar Mensaje</span>
                      <Icon icon="bi:arrow-right" />
                    </button>
                  </Div>
                </form>
                <Spacing lg="100" md="60" />
              </Div>
              <Div className="col-lg-6 offset-xl-1">
                <Div
                  className="cs-google_map cs-type1 cs-bg"
                  data-src="assets/img/map_img_1.jpeg"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-59.65610308071918!3d-29.154437418554846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA5JzE1LjkiUyA1OcKwMzknMjIuMiJX!5e0!3m2!1sen!2sbd!4v1698348408574!5m2!1sen!2sbd"
                    allowFullScreen
                    title="Google Map"
                  />
                </Div>
                <Spacing lg="0" md="80" />
              </Div>
            </Div>
          </Div>
        </Div>
        {/* Start Contact Section */}
      </Layout>
    </>
  );
}
