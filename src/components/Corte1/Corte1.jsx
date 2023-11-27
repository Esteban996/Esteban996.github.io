import React from 'react';
import './Corte1.css';
import imagencorte1 from "../../imagenes/probando.png";
import dataset from "../../imagenes/dataset.png";
import funciones from "../../imagenes/funciones.png";

const Corte1 = () => {
  return (
    <div className="Corte1">
      <h2>Corte 1</h2>
      <p>En el primer corte vimos los que es la programacion funcinal con python, estos son algunos ejercicios que hicimos: </p>
      <div className="imagen-container">
        <div className="imagen-item">
          <img src={imagencorte1} alt="Descripción de la imagen" className="imagen1" />
          <p>Inicialmente nos empezamos a familiarizar con el lenguaje de programación de Python</p>
        </div>

        <div className="imagen-item">
          <img src={dataset} alt="Descripción de la imagen" className="imagen2" />
          <p>Después creamos un dataset a partir de un archivo plano y lo cargamos</p>
        </div>

        <div className="imagen-item">
          <img src={funciones} alt="Descripción de la imagen" className="imagen3" />
          <p>También aprendimos a utilizar las funciones map, filter y reduce</p>
        </div>
      </div>
    </div>
  );
};

export default Corte1;

