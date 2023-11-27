import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaPrincipal from './components/PaginaPrincipal';
import Corte1 from './components/Corte1/Corte1';
import Corte2 from './components/Corte2/Corte2';
import Corte3 from './components/Corte3/Corte3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/corte1" element={<Corte1 />} />
        <Route path="/corte2" element={<Corte2 />} />
        <Route path="/corte3" element={<Corte3 />} />
        <Route path="/paginaPrincipal" element={<PaginaPrincipal />} />
        <Route path="/" element={<PaginaPrincipal />} />
      </Routes>
    </Router>
  );
}

export default App;