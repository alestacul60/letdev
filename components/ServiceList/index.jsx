import Link from 'next/link';
import React, { useState } from 'react';
import Div from '../Div';

export default function ServiceList() {
  const serviceData = [
    {
      title: 'Desarrollo Web',
      subtitle:
        'Creamos sitios web optimizados y personalizados para tu negocio, asegurando rendimiento y experiencia de usuario de primer nivel.',
      imgUrl: '/images/soft500x500.jpg',
      href: '/service/service-details',
    },
    {
      title: 'Diseño Gráfico',
      subtitle:
        'Diseñamos identidades visuales únicas que transmiten la esencia de tu marca de manera efectiva y atractiva.',
      imgUrl: '/images/grafico500x500.jpg',
      href: '/service/service-details',
    },
    {
      title: 'Marketing Digital',
      subtitle:
        'Implementamos estrategias de marketing digital para incrementar tu presencia online y atraer clientes potenciales.',
      imgUrl: '/images/marketin500x500.jpg',
      href: '/service/service-details',
    },
    {
      title: 'Desarrollo de Software y APIs',
      subtitle:
        'Desarrollamos soluciones de software personalizadas y APIs robustas para facilitar la integración de sistemas y mejorar la eficiencia.',
      imgUrl: '/images/coding.png',
      href: '/service/service-details',
    },
    {
      title: 'Diseño UX/UI',
      subtitle:
        'Creamos interfaces intuitivas y atractivas, priorizando la experiencia del usuario y el diseño funcional.',
      imgUrl: '/images/uxui500x500.jpg',
      href: '/service/service-details',
    },

  ];
  const [active, setActive] = useState(0);
  const handelActive = index => {
    setActive(index);
  };
  return (
    <Div className="cs-iconbox_3_list">
      {serviceData.map((item, index) => (
        <Div
          className={`cs-hover_tab ${active === index ? 'active' : ''}`}
          key={index}
          onMouseEnter={() => handelActive(index)}
        >
          <Link href={item.href} className="cs-iconbox cs-style3">
            <>
              <Div className="cs-image_layer cs-style1 cs-size_md">
                <Div className="cs-image_layer_in">
                  <img
                    src={item.imgUrl}
                    alt="Thumb"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <span className="cs-iconbox_icon cs-center">
                <svg
                  width={30}
                  height={29}
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <Div className="cs-iconbox_in">
                <h2 className="cs-iconbox_title">{item.title}</h2>
                <Div className="cs-iconbox_subtitle">{item.subtitle}</Div>
              </Div>
            </>
          </Link>
        </Div>
      ))}
    </Div>
  );
}
