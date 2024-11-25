import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function LetDevPOSlider() {
  const portfolioData = [
    {
      title: 'Punto de Venta',
      subtitle: 'Proximamente',
      href: '/portfolio/portfolio-details',
      src: '/images/letdev.PNG'
    },
    {
      title: 'Punto de Venta',
      subtitle: 'Proximamente',
      href: '/portfolio/portfolio-details',
      src: '/images/letdev2.PNG'
    },
    {
      title: 'Punto de Venta',
      subtitle: 'Proximamente',
      href: '/portfolio/portfolio-details',
      src: '/images/letdev3.PNG'
    },
    {
      title: 'Punto de Venta',
      subtitle: 'Proximamente',
      href: '/portfolio/portfolio-details',
      src: '/images/letdev4.PNG'
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
