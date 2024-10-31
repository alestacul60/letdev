import React, { useEffect, useState } from 'react';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';
import Link from 'next/link';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''
          } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li className="menu-item-has-children">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="photography-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Diseño Grafico
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="creative-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio Creativo
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="digital-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Agencia Digital
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Marketing Digital
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="showcase-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Showcase
                            </Link>
                          </li>
                          {/*<li>
                            <Link
                              href="case-study-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Casos de estudio
                            </Link> 
                          </li>*/}
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link href="about" onClick={() => setMobileToggle(false)}>
                        Acerca de
                      </Link>
                    </li>
                    {/*<li className="menu-item-has-children">
                      <Link
                        href="/service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Servicios
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Detalle
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>*/}
                    <li className="menu-item-has-children">
                      <Link
                        href="/portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Portfolio
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Detalle
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Contacto
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contacto
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              Preguntas Frecuentes
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <img src="/images/footer_logo.svg" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Tenes un proyecto <br /> en mente?
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contactanos" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Registrate"
              subtitle="Nosotros nos ponemos en contacto"
              placeholder="ejemplo@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
