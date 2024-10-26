import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title: 'Sitio Minimalista',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap1.png'
    },
    {
      title: 'Restaurante',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap13.png'
    },
    {
      title: 'Menu',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap12.png'
    },
    {
      title: 'Portfolio',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap14.png'
    },
    {
      title: 'CV Online',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap15.png'
    },
    {
      title: 'Catalogo',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap16.png'
    },
    {
      title: 'Presentacion',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap17.png'
    },
    {
      title: 'Portfolio Fotografico',
      subtitle: 'Ver Detalle',
      href: '/portfolio/portfolio-details',
      src: '/images/cap18.png'
    }
  ]

  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
