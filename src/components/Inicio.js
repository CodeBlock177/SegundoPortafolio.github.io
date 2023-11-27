import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, Soy <strong>Eduardo Williams</strong> desarollador web de Nicaragua,
        y ofresco mis servicios de <strong>programación y desarollo</strong> en todo
        tipo de proyectos web.
      </h1>

      <h2 className='title'>
        Te ayudo a crear tu sitio web o aplicacion web, tener mayor
        visibilidad y relevancia en internet. <Link to="/contacto">Contacta con migo</Link>
      </h2>

      <section className='lastWork'>
        <h2 className='heading'>Algunos de mis proyecto</h2>
        <p>estos son algunos de mis trabajos de desarollo web</p>

        <ListadoTrabajos limite="2"/>
      </section>
    </div>
  )
}
