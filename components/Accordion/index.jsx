import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: '¿Diseñan sitios web con ilustraciones?',
      answer: 'Sí, creamos sitios web que incluyen ilustraciones personalizadas, adaptadas a las necesidades visuales de tu marca o proyecto.'
    },
    {
      question: '¿Cómo se entregan los detalles del proyecto y los pagos?',
      answer: 'Puedes enviarnos los detalles del proyecto a través de nuestro formulario de contacto o correo electrónico. Los pagos se procesan de manera segura una vez acordados los términos del proyecto.'
    },
    {
      question: '¿Me puedes decir cómo contactarlos para un proyecto?',
      answer: 'Puedes contactarnos directamente a través de nuestra página web, por correo electrónico o llamándonos a nuestro número de contacto. Estaremos encantados de discutir tu proyecto.'
    },
    {
      question: '¿Realizan logos, iconos personalizados, etc.?',
      answer: 'Sí, ofrecemos servicios de diseño de logotipos, iconos y otros elementos visuales personalizados, adaptados a tu identidad de marca.'
    },

  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div className={`cs-accordian ${selected === index ? 'active' : ''}`} key={index}>
          <Div className="cs-accordian_head" onClick={() => handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  )
}
