import React from 'react';
import TarjetasNav from './TarjetasNavegacion/TarjetasNav';
import './PaginaPrincipal.css';

const PaginaPrincipal = () => {
  return (
    <div className="pagina-principal">
      <h1>Bienvenido a la página principal</h1>
      <p>En esta pagina veremos lo que hemos cursado de la asignatura Lenguajes de programacion 2023B</p>
      <p> Profundizamos en la programación funcional, los patrones de diseño en Python y la programación multiproceso en Java.</p>
      <ul>
      <li>Programación funcional: La primera parte profundiza en la programación funcional, un paradigma que cambia la forma de pensar sobre el código.</li>
      <li> Patrones de diseño en Python: La segunda parte considera patrones de diseño en el contexto de Python.</li>
      <li>Programación multiproceso usando Java: Finalmente, probaremos la programación multiproceso usando Java.
          Estamos explorando formas de aprovechar la potencia informática paralela para mejorar el rendimiento de las aplicaciones.
          Además de aprender los conceptos básicos de  concurrencia y subprocesos</li>
      </ul>
      <TarjetasNav />
    </div>
  );
};

export default PaginaPrincipal;