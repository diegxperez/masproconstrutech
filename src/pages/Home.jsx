import React from 'react';
import logo from '../assets/logos/logo-Maspro-letras-negras-1.png';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in font-poppins bg-radial from-white to-neutral-50">
      <div className="max-w-3xl w-full text-center space-y-12 -mt-10">
        {/* Logo con efecto suave */}
        <div className="flex justify-center transition-all duration-1000 ease-in-out hover:scale-105">
          <img 
            src={logo} 
            alt="Maspro Construtech Logo" 
            className="h-28 md:h-40 object-contain drop-shadow-sm"
          />
        </div>
        
        {/* Texto de Mantenimiento con UX Writing */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tight leading-tight">
            Estamos <span className="text-yellow-500">mejorando</span> <br/> nuestra experiencia digital
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-xl mx-auto font-light leading-relaxed">
            En <span className="font-semibold text-neutral-800">Maspro Construtech</span>, la calidad es nuestra prioridad. Estamos actualizando nuestro sitio para ofrecerte un servicio más eficiente y moderno.
          </p>
        </div>

        {/* Indicador de estado y mensaje de retorno */}
        <div className="pt-10 flex flex-col items-center space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 space-x-3 text-sm font-medium text-neutral-500 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
            <span>Volveremos muy pronto</span>
          </div>
          <p className="text-sm text-neutral-400 italic">Gracias por tu paciencia.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
