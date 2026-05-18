import React, { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import SEO from '../components/SEO';
import portada from '../assets/images/portada-maspro-construtech.jpg';
import masproHome from '../assets/images/maspro-home.jpg';
import sumaqLogo from '../assets/logos/logo-sumaq.jpg';
import dsiLogo from '../assets/logos/DSI.png';
import compuexpressLogo from '../assets/logos/logo-compuexpress.png';
import grupocaralLogo from '../assets/logos/logo-grupocaral.jpg';
import imaginaLogo from '../assets/logos/logo-imagina.jpg';
import lasmagnoliasLogo from '../assets/logos/logo-lasmagnolias.jpg';
import luxLogo from '../assets/logos/logo-lux.jpg';
import pioneroLogo from '../assets/logos/logo-pionero.png';

const LandingPage = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  const clientLogos = [
    dsiLogo,
    compuexpressLogo,
    grupocaralLogo,
    imaginaLogo,
    lasmagnoliasLogo,
    luxLogo,
    pioneroLogo,
    sumaqLogo
  ];

  return (
    <div className="animate-fade-in">
      <SEO 
        title="Maspro Construtech | Calidad y Experiencia en Construcción"
        description="Soluciones integrales en construcción, remodelación y mantenimiento. Diseñamos y ejecutamos proyectos de alta calidad con profesionalismo."
      />
      <section
        className="grid items-center justify-center w-full h-[500px] md:h-[600px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${portada})` }}
      >
        <div className="max-w-[1000px] px-6 text-center">
          <h2 className="text-base md:text-xl mb-2 text-yellow-600">
            Soluciones integrales en construcción, con la calidad y el profesionalismo que tu mereces
          </h2>
          <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl font-extrabold text-white text-center leading-tight">
            somos calidad y experiencia en construcción
          </h1>
        </div>
      </section>

      <section className="py-[120px] bg-linear-to-b from-neutral-300 to-white">
        <div className="flex flex-col md:flex-row gap-x-[120px] justify-center mb-[72px] px-4">
          <h2 className="font-semibold text-5xl mb-6 md:mb-0">Acerca de nosotros</h2>
          <p className="max-w-[520px]">
            Somos una empresa peruana y nos enorgullece ofrecer una gama completa de servicios en el
            ámbito de la construcción y mantenimiento. Con años de experiencia en el sector, nos hemos ganado una reputación
            solida por nuestra calidad, profesionalismo y enfoque centrado en el cliente.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-9 justify-center px-4">
          <div className="max-w-[320px]">
            <h3 className="font-semibold mb-2 text-xl">Nuestra Vision</h3>
            <p className="text-left">
              Consolidarnos como una de las empresas lideres a nivel nacional que ofrece servicios generales en el ámbito de
              construcciones con mayor calidad y percepción del buen gusto y que con ello desemboque en una total satisfacción
              al cliente.
            </p>
          </div>
          <div className="max-w-[320px]">
            <h3 className="font-semibold mb-2 text-xl">Nuestra Misión</h3>
            <p className="text-left">
              Consolidarnos como una empresa líder en el rubro. Ejecutando obras
              y servicios que cumplan con todas las especificaciones y estándares de calidad. Buen producto, buen servicio y
              buena atención
            </p>
          </div>
          <div className="max-w-[320px]">
            <h3 className="font-semibold mb-2 text-xl">Nuestro Proceso</h3>
            <p className="text-left">
              Nos comprometemos a brindarle una experiencia excepcional en cada proyecto que emprendemos.
              Nuestro proceso
              integral y transparente garantiza que su proyecto se ejecute de manera eficiente, satisfactoria y dentro de sus
              expectativas
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-600 py-[80px]">
        <p className="px-4 md:pl-[120px] text-3xl md:text-5xl text-white font-semibold mb-12">Nuestros<br />Servicios</p>
        <div className="flex flex-col lg:flex-row gap-x-32 w-full justify-center px-4">
          <div className="flex justify-center mb-10 lg:mb-0">
            <img src={masproHome} alt="" className="w-full max-w-[600px] h-auto lg:h-[800px] object-cover" />
          </div>
          <div className="w-full max-w-[700px]">
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="text-yellow-600" data-inactive-classes="text-gray-400">
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-white border-b border-gray-300 gap-3"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1"
                >
                  <span className="uppercase text-xl md:text-3xl text-left">diseño y construcción</span>
                  <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                <div className="py-5 border-b border-gray-400">
                  <p className="mb-2 text-white">Damos vida a tus ideas con la más alta calidad.</p>
                  <p className="text-white">
                    En Maspro Construtech, contamos con un equipo de arquitectos e
                    ingenieros altamente capacitados para diseñar y ejecutar proyectos de construcción de manera eficiente y
                    profesional. Utilizamos las últimas tecnologías y materiales de la más alta calidad para garantizar
                    resultados duraderos y satisfactorios. Con Maspro Construtech, puedes estar seguro de que tu proyecto
                    estará en manos de expertos.
                  </p>
                </div>
              </div>

              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-white border-b border-gray-300 gap-3"
                  data-accordion-target="#accordion-flush-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-2"
                >
                  <span className="uppercase text-xl md:text-3xl text-left">remodelación y implementación de departamentos, viviendas, oficinas y tiendas en centros comerciales</span>
                  <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                <div className="py-5 border-b border-gray-200">
                  <p className="mb-2 text-white">
                    En Maspro Construtech, somos expertos en la remodelación e implementación integral de departamentos,
                    viviendas, oficinas y tiendas en centros comerciales
                  </p>
                  <p className="mb-2 text-white">
                    Nuestro equipo de profesionales apasionados te acompañará
                    en cada paso del proceso, desde la concepción de ideas hasta la materialización de
                    tus sueños comerciales.
                  </p>
                </div>
              </div>

              <h2 id="accordion-flush-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-white border-b border-gray-300 gap-3"
                  data-accordion-target="#accordion-flush-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <span className="uppercase text-xl md:text-3xl text-left">asesoramiento y planteamiento con nuestros clientes</span>
                  <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                <div className="py-5 border-b border-gray-100">
                  <p className="mb-2 text-white">
                    En Maspro Construtech, creemos en la importancia de la
                    comunicación y la colaboración con nuestros clientes. Por eso, ofrecemos un servicio de asesoramiento
                    personalizado donde te acompañamos en cada paso del proceso, desde la definición de tus objetivos hasta la
                    selección de materiales y acabados. Nuestro objetivo es comprender tus necesidades y expectativas para
                    crear un proyecto que supere tus expectativas.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-white text-xl">
                En Maspro Construtech, nos apasiona brindar soluciones integrales para la
                construcción y el mantenimiento de tus proyectos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-[80px] px-4">
        <h1 className="text-4xl font-semibold text-center mb-8">Ellos confían en nosotros</h1>
        <div id="default-carousel" className="relative w-full max-w-5xl" data-carousel="slide">
          {/* Carousel wrapper */}
          <div className="relative overflow-hidden rounded-lg h-64 md:h-96">
            {/* Items */}
            {clientLogos.map((logo, index) => (
              <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={logo} className="absolute block max-w-[200px] md:max-w-xs -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Cliente ${index + 1}`} />
              </div>
            ))}
          </div>
          
          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {[...Array(8)].map((_, i) => (
              <button key={i} type="button" className="w-3 h-3 rounded-full" aria-current={i === 0 ? "true" : "false"} aria-label={`Slide ${i + 1}`} data-carousel-slide-to={i}></button>
            ))}
          </div>

          {/* Slider controls */}
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>

      <section>
        <h3 className="uppercase text-center text-3xl md:text-6xl font-semibold py-10 bg-gray-500 text-white px-4">
          ¡construye con los expertos!<br />
          contacta con maspro hoy mismo
        </h3>
      </section>
    </div>
  );
};

export default LandingPage;
