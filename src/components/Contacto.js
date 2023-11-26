import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:eduardowillms88@gmail.com' >
        <input type='text' placeholder='Nombre'></input>
        <input type='text' placeholder='apellido'></input>
        <input type='email' placeholder='email'></input>
        <textarea type='text' placeholder='Motivo de contacto'></textarea>
        <input type='submit' value='Enviar'></input>
      </form>
    </div>
  )
}
