import React, { useState } from 'react';
import SEO from '../components/SEO';
import portada from '../assets/images/portada-maspro-construtech.jpg';
import { Link } from 'react-router-dom';

// 1. Compuexpress
import comp1 from '../assets/images/compuexpress/s10.jpg';
import comp2 from '../assets/images/compuexpress/s11.jpg';
import comp3 from '../assets/images/compuexpress/s12.jpg';
import comp4 from '../assets/images/compuexpress/s14.jpg';
import comp5 from '../assets/images/compuexpress/s15.jpg';

// 2. Imagina
import imag1 from '../assets/images/imagina/10.jpg';
import imag2 from '../assets/images/imagina/11.jpg';
import imag3 from '../assets/images/imagina/12.jpg';
import imag4 from '../assets/images/imagina/13.jpg';
import imag5 from '../assets/images/imagina/14.jpg';

// 3. Compuexpress Locatarios
import cloc1 from '../assets/images/compuexpress-locatariosinteriores/18.jpg';
import cloc2 from '../assets/images/compuexpress-locatariosinteriores/19.jpg';
import cloc3 from '../assets/images/compuexpress-locatariosinteriores/20.jpg';
import cloc4 from '../assets/images/compuexpress-locatariosinteriores/21.jpg';
import cloc5 from '../assets/images/compuexpress-locatariosinteriores/22.jpg';

// 4. Lux Mantenimiento
import lux1 from '../assets/images/lux-mantenimientodeposito/x1.jpg';
import lux2 from '../assets/images/lux-mantenimientodeposito/x2.jpg';
import lux3 from '../assets/images/lux-mantenimientodeposito/x3.jpg';
import lux4 from '../assets/images/lux-mantenimientodeposito/x4.jpg';
import lux5 from '../assets/images/lux-mantenimientodeposito/x5.jpg';

// 5. Pionero Limpieza
import plim1 from '../assets/images/pionero-limpiezadefachada/L11-1.jpg';
import plim2 from '../assets/images/pionero-limpiezadefachada/L11-5.jpg';
import plim3 from '../assets/images/pionero-limpiezadefachada/l11-10.jpg';
import plim4 from '../assets/images/pionero-limpiezadefachada/l11-11.jpg';
import plim5 from '../assets/images/pionero-limpiezadefachada/l11-12.jpg';

// 6. Pionero Posventa
import ppos1 from '../assets/images/pionero-posventamantenimiento/11-1.jpg';
import ppos2 from '../assets/images/pionero-posventamantenimiento/11-2.jpg';
import ppos3 from '../assets/images/pionero-posventamantenimiento/11-3.jpg';
import ppos4 from '../assets/images/pionero-posventamantenimiento/11-4.jpg';
import ppos5 from '../assets/images/pionero-posventamantenimiento/11-5.jpg';

// 7. SUMAQ
import sumaq1 from '../assets/images/sumaq/2-1.jpg';
import sumaq2 from '../assets/images/sumaq/3-1.jpg';
import sumaq3 from '../assets/images/sumaq/4-1.jpg';
import sumaq4 from '../assets/images/sumaq/5-1.jpg';
import sumaq5 from '../assets/images/sumaq/6-1.jpg';

// 8. Inmobiliaria Zorrito
import zorr1 from '../assets/images/inmobiliaria-zorrito/p1.jpg';
import zorr2 from '../assets/images/inmobiliaria-zorrito/p2.jpg';
import zorr3 from '../assets/images/inmobiliaria-zorrito/p3.jpg';
import zorr4 from '../assets/images/inmobiliaria-zorrito/p5.jpg';
import zorr5 from '../assets/images/inmobiliaria-zorrito/p6.jpg';

// 9. SUMAQ Muros
import smur1 from '../assets/images/sumaq-murosycenefas/WhatsApp-Image-2024-05-16-at-17.48.14.jpeg';
import smur2 from '../assets/images/sumaq-murosycenefas/WhatsApp-Image-2024-05-16-at-17.48.14-1.jpeg';
import smur3 from '../assets/images/sumaq-murosycenefas/WhatsApp-Image-2024-05-16-at-17.48.14-2.jpeg';
import smur4 from '../assets/images/sumaq-murosycenefas/WhatsApp-Image-2024-05-16-at-17.48.15.jpeg';
import smur5 from '../assets/images/sumaq-murosycenefas/WhatsApp-Image-2024-05-16-at-17.48.15-1.jpeg';

const projectsData = [
  { title: 'Compuexpress', dark: false, images: [comp1, comp2, comp3, comp4, comp5] },
  { title: 'Imagina', dark: true, images: [imag1, imag2, imag3, imag4, imag5] },
  { title: 'Compuexpress - Locatarios interiores', dark: false, images: [cloc1, cloc2, cloc3, cloc4, cloc5] },
  { title: 'Lux - Mantenimiento deposito', dark: true, images: [lux1, lux2, lux3, lux4, lux5] },
  { title: 'Pionero - Limpieza de Fachada', dark: false, images: [plim1, plim2, plim3, plim4, plim5] },
  { title: 'Pionero - Posventa Mantenimiento', dark: true, images: [ppos1, ppos2, ppos3, ppos4, ppos5] },
  { title: 'SUMAQ', dark: false, images: [sumaq1, sumaq2, sumaq3, sumaq4, sumaq5] },
  { title: 'Inmobiliaria Zorrito', dark: true, images: [zorr1, zorr2, zorr3, zorr4, zorr5] },
  { title: 'SUMAQ - Muros y Cenefas', dark: false, images: [smur1, smur2, smur3, smur4] },
];

// Carousel component with working prev/next and dot navigation
const ProjectCarousel = ({ project }) => {
  const { images, title, dark } = project;
  const total = images.length;
  // On desktop: show 3 at a time. On mobile: show 1 at a time.
  // We track the starting index of the visible window.
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3; // desktop

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  // Get images for the current desktop view (3 visible, wrapping around)
  const desktopImages = [
    images[startIndex % total],
    images[(startIndex + 1) % total],
    images[(startIndex + 2) % total],
  ];

  // Mobile: just current single image
  const mobileImage = images[startIndex % total];

  const btnClass = dark
    ? 'text-neutral-200 hover:text-white bg-neutral-700 hover:bg-neutral-500'
    : 'text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200';

  const dotActive = dark ? 'bg-white' : 'bg-neutral-800';
  const dotInactive = dark ? 'bg-neutral-500' : 'bg-neutral-300';

  return (
    <div className="w-full max-w-5xl px-4">
      {/* Desktop: 3-column view */}
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={prev}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition ${btnClass}`}
          aria-label="Anterior"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="grid grid-cols-3 gap-4 flex-1">
          {desktopImages.map((img, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden shadow-md">
              <img
                src={img}
                alt={`${title} ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        <button
          onClick={next}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition ${btnClass}`}
          aria-label="Siguiente"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile: 1-image view */}
      <div className="flex md:hidden items-center gap-3">
        <button
          onClick={prev}
          className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition ${btnClass}`}
          aria-label="Anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 aspect-[4/3] overflow-hidden shadow-md">
          <img
            src={mobileImage}
            alt={`${title}`}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          onClick={next}
          className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition ${btnClass}`}
          aria-label="Siguiente"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === startIndex % total ? `${dotActive} w-4` : dotInactive
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Proyectos = () => {
  return (
    <div className="animate-fade-in bg-white">
      <SEO 
        title="Proyectos Realizados | Maspro Construtech"
        description="Explora nuestro portafolio de proyectos de construcción, limpieza de fachadas, mantenimiento y más. Conoce los clientes que confían en nosotros."
      />
      {/* Hero Section */}
      <section
        className="flex items-center justify-center w-full h-[280px] md:h-[400px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${portada})` }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white text-center drop-shadow-md px-4">
          Proyectos
        </h1>
      </section>

      {/* Projects List */}
      <div className="flex flex-col">
        {projectsData.map((project, index) => {
          const bg = project.dark ? 'bg-neutral-600' : (index % 2 === 0 ? 'bg-white' : 'bg-neutral-100');
          const text = project.dark ? 'text-white' : 'text-neutral-800';

          return (
            <section
              key={index}
              className={`w-full ${bg} ${text} flex flex-col items-center py-12 md:py-16 px-4`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">
                {project.title}
              </h2>
              <ProjectCarousel project={{ ...project, dark: project.dark }} />
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="bg-neutral-400 py-16 md:py-24 text-center px-4">
        <h2 className="uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 drop-shadow-md leading-tight">
          ¡construye con los expertos!<br />
          contacta con maspro hoy mismo
        </h2>
        <Link
          to="/contacto"
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full uppercase font-bold text-base md:text-lg hover:bg-neutral-800 transition shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contacto
        </Link>
      </section>
    </div>
  );
};

export default Proyectos;
