import Portfolio from '../Portfolio';
import Div from '../Div';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';

export default function PortfolioSlider2() {
  const portfolioData = [
    {
      title: 'Sitio Minimalista',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap1.PNG'
    },
    {
      title: 'Restaurante',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap13.PNG'
    },
    {
      title: 'Menu',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap12.PNG'
    },
    {
      title: 'Portfolio',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap14.PNG'
    },
    {
      title: 'CV Online',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap15.PNG'
    },
    {
      title: 'Catalogo',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap16.PNG'
    },
    {
      title: 'Presentacion',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap17.PNG'
    },
    {
      title: 'Portfolio Fotografico',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap18.PNG'
    }
  ];

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-12 cs-arrow_style4">
      {portfolioData.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
            variant="cs-style1 cs-type2 cs-size3"
          />
        </Div>
      ))}
    </Slider>
  );
}
