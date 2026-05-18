import React from 'react';
import SEO from '../components/SEO';
import portada from '../assets/images/portada-maspro-construtech.jpg';
import { Link } from 'react-router-dom';

const Nosotros = () => {
  return (
    <div className="animate-fade-in">
      <SEO 
        title="Nosotros | Maspro Construtech"
        description="Conoce a Maspro Construtech. Nuestra visión, misión y proceso para consolidarnos como empresa líder en construcción y servicios generales en el Perú."
      />
      {/* Hero Section */}
      <section
        className="grid items-center justify-center w-full h-[500px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${portada})` }}
      >
        <div className="max-w-[1000px] px-4 mt-16">
          <h1 className="uppercase text-5xl md:text-7xl font-extrabold text-white text-center drop-shadow-md">
            ¿Quienes somos?
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <hr className="w-32 border-t border-neutral-400" />
        </div>
        
        <p className="max-w-4xl mx-auto text-center text-neutral-600 text-lg md:text-xl mb-24 leading-relaxed font-light">
          Somos una empresa peruana y nos enorgullece ofrecer una gama completa de servicios en el
          ámbito de la construcción y mantenimiento. Con años de experiencia en el sector, nos hemos
          ganado una reputación sólida por nuestra calidad, profesionalismo y enfoque centrado en el cliente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto mb-10">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-2xl mb-4 text-neutral-800">Nuestra Visión</h3>
            <p className="text-neutral-600 leading-relaxed font-light">
              Consolidarnos como una de las empresas lideres a nivel nacional que ofrece servicios generales en el ámbito de
              construcciones con mayor calidad y percepción del buen gusto y que con ello desemboque en una total satisfacción al cliente.
            </p>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-2xl mb-4 text-neutral-800">Nuestra Misión</h3>
            <p className="text-neutral-600 leading-relaxed font-light">
              Consolidarnos como una empresa líder en el rubro. Ejecutando obras y servicios que cumplan con todas las especificaciones
              y estándares de calidad. Buen producto, buen servicio y buena atención.
            </p>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-2xl mb-4 text-neutral-800">Nuestro Proceso</h3>
            <p className="text-neutral-600 leading-relaxed font-light">
              Nos comprometemos a brindarle una experiencia excepcional en cada proyecto que emprendemos. Nuestro proceso
              integral y transparente garantiza que su proyecto se ejecute de manera eficiente, satisfactoria y dentro de sus expectativas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-neutral-400 py-24 text-center mt-10">
        {/* Triangle pointing down */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
          border-l-[30px] border-l-transparent 
          border-r-[30px] border-r-transparent 
          border-t-[30px] border-t-white">
        </div>

        <div className="px-4">
          <h2 className="uppercase text-3xl md:text-6xl font-extrabold text-white mb-10 drop-shadow-md">
            ¡construye con los expertos!<br/>
            contacta con maspro hoy mismo
          </h2>
          <Link to="/contacto" className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full uppercase font-bold text-lg hover:bg-neutral-800 transition shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contacto
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
