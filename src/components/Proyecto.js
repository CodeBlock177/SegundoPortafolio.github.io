import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import trabajos from '../data/trabajos'

export const Proyecto = () => {

    const params = useParams();
    const [proyecto, setMiProyecto] = useState({});

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setMiProyecto(proyecto[0])
    }, []);

    return (
        <div className='page page-work'>
            <div className='mask'>
                <img src={"/img/" + proyecto.id + ".jpg"}></img>
            </div>
            <h1 className='heading'>{proyecto.nombre}</h1>
            <p>{proyecto.tecnologias}</p>


        </div>
    )
}
