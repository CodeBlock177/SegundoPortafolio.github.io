import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>

      <section className='services'>
        <article className='service'>
          <h2>Diseño web</h2>
          <p>hago que tu sitio web tenga estilos adaptados a tus gustos</p>
        </article>

        <article className='service'>
          <h2>Desarollo web</h2>
          <p>Creo todo tipo de web personalizandola a tus necesidades</p>
        </article>

        <article className='service'>
          <h2>posicionamiento web</h2>
          <p>Hago que tu web aparezca en google y la vea la gente</p>
        </article>
      </section>
    </div>
  )
}
