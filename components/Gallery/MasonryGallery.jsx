import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ModalImage from 'react-modal-image';

export default function MasonryGallery() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(10);

  const portfolioData = [
    {
      title: 'Harekr',
      subtitle: 'Ver',
      href: 'https://harekr.com.ar',
      src: '/images/harekr.jpg',
      srcLg: '/images/harekr.jpg',
      category: 'logos',
      height: 299,
    },
    {
      title: 'Cream Pierre',
      subtitle: 'Ver',
      href: '',
      src: '/images/cream.jpg',
      srcLg: '/images/cream.jpg',
      category: 'logos',
      height: 299,
    },
    {
      title: 'Ana Paula',
      subtitle: 'Ver',
      href: '',
      src: '/images/anapaula.jpg',
      srcLg: '/images/anapaula.jpg',
      category: 'logos',
      height: 299,
    },
    {
      title: 'Ana Paula 2',
      subtitle: 'Ver',
      href: '',
      src: '/images/anapaula2.jpg',
      srcLg: '/images/anapaula2.jpg',
      category: 'logos',
      height: 299,
    },
    {
      title: 'SD',
      subtitle: 'Ver',
      href: '',
      src: '/images/sd.jpg',
      srcLg: '/images/sd.jpg',
      category: 'logos',
      height: 299,
    },
    {
      title: 'Tarjetas',
      subtitle: 'Ver',
      href: '',
      src: '/images/tarjeta1.jpg',
      srcLg: '/images/tarjeta1.jpg',
      category: 'tarjeteria',
      height: 299,
    },
    {
      title: 'Tarjetas',
      subtitle: 'Ver',
      href: '',
      src: '/images/santi.jpg',
      srcLg: '/images/santi.jpg',
      category: 'tarjeteria',
      height: 299,
    },
    {
      title: 'Harekr',
      subtitle: 'Ver',
      href: '',
      src: '/images/harekrtar.jpg',
      srcLg: '/images/harekrtar.jpg',
      category: 'tarjeteria',
      height: 400,
    },
    {
      title: 'White',
      subtitle: 'Ver',
      href: '',
      src: '/images/white.jpg',
      srcLg: '/images/white.jpg',
      category: 'tarjeteria',
      height: 299,
    },
    {
      title: 'Branding',
      subtitle: 'Ver',
      href: '',
      src: '/images/branding.jpg',
      srcLg: '/images/branding.jpg',
      category: 'branding',
      height: 299,
    },
    {
      title: 'Web',
      subtitle: 'Ver',
      href: '',
      src: '/images/webfinal.jpg',
      srcLg: '/images/webfinal.jpg',
      category: 'web',
      height: 299,
    },
    {
      title: 'Creativo',
      subtitle: 'Ver',
      href: '',
      src: '/images/WEB-2.png',
      srcLg: '/images/WEB-2.png',
      category: 'creativo',
      height: 299,
    }
  ];
  const categoryMenu = [
    {
      title: 'Logos',
      category: 'logos',
    },
    {
      title: 'Tarjeteria',
      category: 'tarjeteria',
    }
  ];
  return (
    <>
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Algunas ideas" subtitle="Nuestro Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
      </Div>
      <Spacing lg="90" md="45" />
      <Div className="cs-masonry_4_col">
        {portfolioData.slice(0, itemShow).map((item, index) => (
          <Div
            className={`${active === 'all'
              ? ''
              : !(active === item.category)
                ? 'd-none'
                : ''
              }`}
            key={index}
          >
            <Div
              className="cs-portfolio cs-style1 cs-type2"
              style={{ height: `${item.height}px` }}
            >
              <Div className="cs-lightbox_item">
                <ModalImage
                  small={item.src}
                  large={item.srcLg}
                  alt={item.title}
                />
              </Div>
              <Div className="cs-portfolio_hover" />
              <span className="cs-plus" />
              <Div
                className="cs-portfolio_bg cs-bg"
                style={{ backgroundImage: `url("${item.src}")` }}
              />
              <Div className="cs-portfolio_info">
                <Div className="cs-portfolio_info_bg cs-accent_bg" />
                <h2 className="cs-portfolio_title">{item.title}</h2>
                <Div className="cs-portfolio_subtitle">{item.subtitle}</Div>
              </Div>
            </Div>
          </Div>
        ))}
      </Div>
      <Div className="container">
        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 4)}
              >
                <span>Ver mas</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
    </>
  );
}
