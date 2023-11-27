import React from 'react';
import './Corte3.css';
import actividad from "../../imagenes/actividad.png";
import hilos from "../../imagenes/hilos.png";

const corte3 = () => {
  return (
    <div className='Corte3'>
      <h2>Corte 3</h2>
      <p>En este ultimo la programación multiproceso usando java y una actividad preparatoria para el parcial:</p>
      <div className="imagen-container2">
        <div className="imagen-item2">
          <img src={hilos} alt="Descripción de la imagen" className="imagen7" />
          <p>En esta imagen vemos como utilizamos la concurrencia por cada hilo que creamos. </p>
        </div>

        <div className="imagen-item2">
          <img src={actividad} alt="Descripción de la imagen" className="imagen8" />
          <p>Por último en esta imagen vemos como se utiliza la sincronizacion de hilos en java en preparación para el último parcial. </p>
        </div>

      </div>
    </div>
  );
};

export default corte3;