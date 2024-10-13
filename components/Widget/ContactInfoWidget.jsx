import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon ? <span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span> : ''}
          +123445652
        </li>
        <li>
          {withIcon ? <span className='cs-accent_color'><Icon icon="mdi:envelope" /></span> : ''}
          info@letdev.com.ar
        </li>
        <li>
          {withIcon ? <span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span> : ''}
          No hay direccion <br />Avellaneda, Santa Fe
        </li>
      </ul>
    </>
  )
}
