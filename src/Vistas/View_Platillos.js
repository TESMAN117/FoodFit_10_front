import React from 'react';
import Categorias from '../Componentes/Platillos_Categorias';

function Platillos() {
  return (
    <div className="container-flix">
      <h2 className="display-3">Categoria de platillos</h2>
      <p className="lead">Food-Fit INC tiene una gran variedad de paltillos con los que sentiras a gusto.</p>
      <hr className="my-4" />
      <div className="lead">
        <div className="alert alert-dismissible alert-warning">
          <button type="button" className="close" data-dismiss="alert">&times;</button>
          <h4 className="alert-heading">Aviso!</h4>
          <p className="mb-0">Si se pudo implementar la API <a href="http://eduti.mx/api/platillo_cat/3" className="alert-link">Ver API</a>.</p>
        </div>
        <Categorias />
      </div>
    </div>
  );
}
export default Platillos;
