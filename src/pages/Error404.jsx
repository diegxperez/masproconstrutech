import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <SEO 
        title="Página no encontrada | Maspro Construtech"
        description="Lo sentimos, la página que buscas no existe."
      />
      <h2 className="text-6xl font-black text-neutral-900 mb-4">404</h2>
      <p className="text-xl text-neutral-600 mb-8">Lo sentimos, la página que buscas no existe.</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default Error404;
