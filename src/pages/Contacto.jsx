import React from 'react';
import SEO from '../components/SEO';
import portada from '../assets/images/portada-maspro-construtech.jpg';
import masproHome from '../assets/images/maspro-home.jpg';

const Contacto = () => {
  return (
    <div className="animate-fade-in">
      <SEO 
        title="Contáctanos | Maspro Construtech"
        description="¡Construye con los expertos! Contacta con Maspro Construtech para tu próximo proyecto. Ubícanos en Chorrillos o escríbenos a nuestro correo electrónico."
      />
      {/* Hero Section */}
      <section
        className="grid items-center justify-center w-full h-[300px] md:h-[400px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${portada})` }}
      >
        <div className="max-w-[1000px] px-4 mt-8 md:mt-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center drop-shadow-md">
            Contáctanos
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-neutral-500 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column (Text) */}
          <div>
            <h2 className="uppercase text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-16 leading-tight drop-shadow-sm">
              EL PRIMER PASO ES<br/>
              SUYO<br/>
              EL CAMINO LO<br/>
              RECORREMOS<br/>
              JUNTOS.
            </h2>
            
            <div className="flex flex-col gap-10 text-white">
              <div>
                <h3 className="font-bold text-xl mb-1">Correo Electrónico</h3>
                <p className="text-base text-neutral-100 font-light">presupuestos@masproconstrutech.com</p>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-1">Dirección</h3>
                <p className="text-base text-neutral-100 font-light uppercase">PJ. LAS PALMERAS MZA. Q1 LOTE. 3B</p>
                <p className="text-base text-neutral-100 font-light uppercase">P.J. SANTA ISABEL DE VILLA - CHORRILLOS</p>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-1">Horario De Atención</h3>
                <p className="text-base text-neutral-100 font-light uppercase">LUNES - SABADO</p>
                <p className="text-base text-neutral-100 font-light uppercase">8:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-16 text-white">
              <a href="#" className="hover:text-yellow-500 transition transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="hover:text-yellow-500 transition transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.598 0 0 .598 0 1.326v21.348C0 23.402.598 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.598 1.323-1.326V1.326C24 .598 23.402 0 22.675 0z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Column (Image) */}
          <div className="h-full flex items-center justify-center">
            <img 
              src={masproHome} 
              alt="Trabajadores Maspro Construtech" 
              className="w-full h-auto object-cover rounded-sm shadow-xl" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-neutral-400 py-24 text-center">
        {/* Triangle pointing down */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
          border-l-[30px] border-l-transparent 
          border-r-[30px] border-r-transparent 
          border-t-[30px] border-t-white">
        </div>

        <div className="px-4">
          <h2 className="uppercase text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md leading-tight">
            ¡construye con los expertos!<br/>
            contacta con maspro hoy mismo
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
