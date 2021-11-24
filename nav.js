import React from 'react';
import './nav.css';


function nav(_props){
    return(
        <header>
        <div className="Contenedor">
            <h2 className = "nombre"> Nombre </h2>
        <nav>
            <a href="#" className = "" > Caracteristicas </a>
            <a href="#" className= ""> Empresa </a>
            <a href="#" className= ""> Apoyo </a>
            <a href="#" className="activo"> Acceso </a>
        </nav>
        </div>
        </header>
    )
}
