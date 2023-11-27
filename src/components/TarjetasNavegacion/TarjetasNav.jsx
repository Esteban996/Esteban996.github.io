import React from 'react';
import { Link } from 'react-router-dom';
import './TarjetasNav.css';

const TarjetasNav = () => {
    return (
      <div className="navigation-cards-container">
        <Link to="/corte1" className="card">
          <h3>Corte 1</h3>
          <p>Información sobre Corte 1</p>
        </Link>
        <Link to="/corte2" className="card">
          <h3>Corte 2</h3>
          <p>Información sobre Corte 2</p>
        </Link>
        <Link to="/corte3" className="card">
          <h3>Corte 3</h3>
          <p>Información sobre Corte 3</p>
        </Link>
      </div>
    );
  };
  
  export default TarjetasNav;
  
  
  
  
