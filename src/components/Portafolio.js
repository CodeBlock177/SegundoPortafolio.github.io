import React from 'react';
import trabajos from '../data/trabajos';
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1>Mis Proyectos</h1>

      <ListadoTrabajos/>
    </div>
  )
}