import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './templates/Header';
import Footer from './templates/Footer';
import LandingPage from './pages/LandingPage';
import Nosotros from './pages/Nosotros';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <>
      <Header />
      <main id="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
