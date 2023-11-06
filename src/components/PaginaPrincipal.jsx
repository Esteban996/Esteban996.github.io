import React from 'react';
import TarjetasNav from './TarjetasNavegacion/TarjetasNav';
import './PaginaPrincipal.css';

const PaginaPrincipal = () => {
  return (
    <div className="pagina-principal">
      <h1>Bienvenido a la página principal</h1>
      <p>En esta pagina veremos lo que hemos cursado de la asignatura Lenguajes de programacion 2023B</p>
      <TarjetasNav />
    </div>
  );
};

export default PaginaPrincipal;