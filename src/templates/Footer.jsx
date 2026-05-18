import React from 'react';
import { Link } from 'react-router-dom';
import logoBlanco from '../assets/logos/logo-Maspro-letras-blancas-1.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div>
          <img src={logoBlanco} alt="Maspro Construtech Logo" className="w-48 mb-6" />
          <h4 className="font-bold text-sm mb-1 uppercase">Horario de atención:</h4>
          <p className="text-sm text-neutral-300">lunes - sábado | 8:00 am - 5:00 pm</p>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-2 font-bold text-sm mt-2">
          <Link to="/" className="hover:text-yellow-500 transition-colors uppercase">Inicio</Link>
          <Link to="/nosotros" className="hover:text-yellow-500 transition-colors uppercase">Nosotros</Link>
          <Link to="/proyectos" className="hover:text-yellow-500 transition-colors uppercase">Proyectos</Link>
          <Link to="/contacto" className="hover:text-yellow-500 transition-colors uppercase">Contacto</Link>
        </div>

        {/* Right Column */}
        <div className="text-sm flex flex-col gap-4 mt-2">
          <div>
            <h4 className="font-bold mb-1 uppercase">Dirección</h4>
            <p className="text-neutral-300">Pj. Las Palmeras mza. Q1 Lote. 3b Pj. Santa Isabel de Villa - Chorrillos</p>
          </div>
          <div>
            <h4 className="font-bold mb-1 uppercase">Email</h4>
            <p className="text-neutral-300">presupuestos@masproconstrutech.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
