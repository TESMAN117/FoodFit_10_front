import React from 'react';
import Catagorias_Destacadas from '../Componentes/Inicio_Cat_Destacadas';
import Carrusel from '../Componentes/Inicio_Carrusel';

function Inicio() {


    return (
        
        <div className="container-flix">
            <br />
            <Carrusel />
            <br />
            <Catagorias_Destacadas />
            <br />
        </div>
    );
}
export default Inicio;
