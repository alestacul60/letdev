import Head from 'next/head';
import Card from '../components/Card';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LogoList from '../components/LogoList';
import MovingText from '../components/MovingText';
import SectionHeading from '../components/SectionHeading';
import PortfolioSlider from '../components/Slider/PortfolioSlider';
import PostSlider from '../components/Slider/PostSlider';
import TeamSlider from '../components/Slider/TeamSlider';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import TimelineSlider from '../components/Slider/TimelineSlider';
import Spacing from '../components/Spacing';
import VideoModal from '../components/VideoModal';

export default function Home() {
  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Instagram',
      links: '/',
    },
    {
      name: 'LinkedIn',
      links: '/',
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: '',
      factNumber: 'Prácticas',
    },
    {
      title: '',
      factNumber: 'Innovadoras',
    },
    {
      title: '',
      factNumber: 'Eficientes',
    },
    {
      title: '',
      factNumber: 'Personalizadas',
    },
  ];

  return (
    <>
      <Head>
        <title>LetDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero
          title="LetDev"
          subtitle="Impulsamos la transformacion digital de empresas mediante soluciones digitales practicas y personalizadas, promoviendo el crecimiento empresarial."
          btnText="Contactanos"
          btnLink="/contact"
          scrollDownId="#service"
          socialLinksHeading="Seguinos"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/hero_bg.jpg"
        />
        {/* End Hero Section */}

        {/* Start FunFact Section */}
        <div className="container">
          <FunFact
            variant="cs-type1"
            title="Somos especialistas"
            subtitle="en desarrollar soluciones que se adaptan a todas sus necesidades."
            data={funfaceData}
          />
        </div>
        {/* End FunFact Section */}

        {/* Start Service Section */}
        <Spacing lg="150" md="80" />
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Nuestros servicios"
                  subtitle="Que podemos hacer?"
                  btnText="Ver Todos nuestros servicios"
                  btnLink="/service"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Diseño UI/UX"
                      link="/service/service-details"
                      src="/images/uxui500x500.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Diseño Grafico"
                      link="/service/service-details"
                      src="/images/grafico500x500.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Marketing Digital"
                      link="/service/service-details"
                      src="/images/marketin500x500.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Desarrollo de Software"
                      link="/service/service-details"
                      src="/images/soft500x500.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Service Section */}

        {/* Start Portfolio Section */}
        <Spacing lg="150" md="50" />
        <Div>
          <Div className="container">
            <SectionHeading
              title="Explora nuestro portfolio"
              subtitle="Ultimos Proyectos"
              variant="cs-style1 text-center"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <PortfolioSlider />
        </Div>
        {/* End Portfolio Section */}

        {/* Start Awards Section */}
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_2">
          <Div className="cs-shape_2">
            <Div />
          </Div>

        </Div>
        {/* End Awards Section */}

        {/* Start Video Block Section */}
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            Nuestro proceso ágil nos permite adaptarnos y responder rápidamente al cambio.</h2>

          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=JzRUbdqa_hU&list=PLp2zTInxCVPSO4f1RxgVnUUTgnarc8f2e&index=9"
            bgUrl="/images/cap2.png"
          />
        </Div>
        {/* End Video Block Section */}

        {/* Start Team Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Nuestro <br/>equipo"
            subtitle="Equipo"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        <Spacing lg="150" md="80" />
        {/* End Team Section */}

        {/* Start Testimonial Section */}

        {/* End Testimonial Section */}

        {/* Start Blog Section */}
        {/* <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Publicaciones Recientes"
                  subtitle="Nuestro Blog"
                  btnText="Ver Blog"
                  btnLink="/blog"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div> */}
        {/* End Blog Section */}

        {/* Start MovingText Section */}
        <Spacing lg="125" md="70" />
        <MovingText text="La solucion que buscas en un solo lugar" />
        <Spacing lg="105" md="70" />
        {/* End MovingText Section */}

        {/* Start LogoList Section */}
        {/* <Div className="container">
          <LogoList />
        </Div>
        <Spacing lg="150" md="80" /> */}
        {/* End LogoList Section */}

        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Trabajemos <i>juntos</i> "
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