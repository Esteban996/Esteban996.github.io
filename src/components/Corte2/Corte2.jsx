import React from 'react';
import './Corte2.css';
import adapter from "../../imagenes/patron adapter.png";
import singlenton from "../../imagenes/patron singlenton.png";
import strategy from "../../imagenes/patron strategy.png";

const corte2 = () => {
  return (
    <div className='Corte2'>
      <h2>Corte 2</h2>
      <p>En este corte vimos los patrones de diseño, algunos de los que vimos son los siguientes:</p>
      <div className="imagen-container1">
        <div className="imagen-item1">
          <img src={adapter} alt="Descripción de la imagen" className="imagen4" />
          <p>Tenemos el patrón adapter que es uno estructural. </p>
        </div>

        <div className="imagen-item1">
          <img src={strategy} alt="Descripción de la imagen" className="imagen5" />
          <p>Tenemos el patrón Strategy que es uno de comportamiento. </p>
        </div>

        <div className="imagen-item1">
          <img src={singlenton} alt="Descripción de la imagen" className="imagen6" />
          <p>También vimos el patrón Singlenton que es uno creacional. </p>
        </div>
      </div>
    </div>
  );
};

export default corte2;