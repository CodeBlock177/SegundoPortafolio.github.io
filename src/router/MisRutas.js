import React, { Component } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Servicios } from '../components/Servicios'
import { Curriculum } from '../components/Curriculum'
import { Contacto } from '../components/Contacto'
import { HeaderNav } from '../components/layaut/HeaderNav'
import { Footer } from '../components/layaut/Footer'

export const MisRutas = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Header y navegacion */}

        <HeaderNav></HeaderNav>

        {/* contenido central */}
        <section className='content'>
          <Routes>
            <Route path='/' element={<Navigate to="/inicio"></Navigate>} ></Route>
            <Route path='/inicio' element={<Inicio />} ></Route>
            <Route path='/portafolio' element={<Portafolio />} ></Route>
            <Route path='/servicios' element={<Servicios />} ></Route>
            <Route path='/curriculum' element={<Curriculum />} ></Route>
            <Route path='/contacto' element={<Contacto />} ></Route>
            <Route path='*' element={
              <div className='page'>
                <h1 className='heading'>Error No existe la pagina</h1>
              </div>
            }></Route>
          </Routes>
        </section>


        {/* footer */}

        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}
