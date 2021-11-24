import React from 'react';
import './cuerpo.css';

function cuerpo(_props){
    return(

        <main className = "cuerpo">
                    <div className = "nombre">
                        <p className = "parrafo"> <h1 className="titulo1">Precios</h1>
        <h3 className = "texto">Cree rápidamente una tabla de precios eficaz para sus clientes potenciales con este diseño. Está construido con componentes MUI predeterminados con poca personalización.</h3></p>
                    </div>
                    <div class="row">
        <div className="ejemplo">
        <div className="ejemplo1">
        <div className="datos">
                <span class="precio"> Gratis </span>
                <span class="precio1"> $0/mes </span>
                <span class="contenido"> 10 usuarios incluidos
                                        2 GB de almacenamiento
                                        Acceso al centro de ayuda
                                        Soporte de correo electrónico</span>
            </div>
            </div>
            </div>
            </div>

        <div className="ejemplo">
        <div className="ejemplo1">
        <div className="datos">
                <span class="precio"> Pro </span>
                <span class="precio1"> $15/mes </span>
                <span class="contenido"> 20 usuarios incluidos
                                        10 GB de almacenamiento
                                        Acceso al centro de ayuda
                                        Soporte prioritario por correo electrónico</span>
            </div>
            </div>
            </div>

        <div className="ejemplo">
        <div className="ejemplo1">
        <div className="datos">
                <span class="precio"> Empresa </span>
                <span class="precio1"> $30/mes </span>
                <span class="contenido"> 50 usuarios incluidos
                                         30 GB de almacenamiento
                                         Acceso al centro de ayuda
                                         Soporte telefónico y por correo electrónico</span>
            </div>
            </div>
            </div>                              
        </main>
    )
}
