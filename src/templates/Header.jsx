import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logos/logo-Maspro-letras-negras.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/contacto', label: 'Contacto' },
  ];

  const linkClass = (path) =>
    `uppercase font-medium transition duration-300 ease-in-out ${
      location.pathname === path
        ? 'text-neutral-900 font-bold'
        : 'text-neutral-500 hover:text-neutral-900 hover:font-bold'
    }`;

  return (
    <header id="header" className="relative px-4 py-5 md:px-8">
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-3 items-center">
        {/* Nav Left */}
        <ul className="flex gap-x-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link className={linkClass(link.to)} to={link.to}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo Center */}
        <div className="flex justify-center">
          <Link to="/">
            <img className="w-36" src={logo} alt="logo-masproconstructech" />
          </Link>
        </div>

        {/* Contact Button Right */}
        <div className="flex justify-end">
          <Link
            to="/contacto"
            className="bg-black text-white px-5 py-2.5 rounded-full uppercase font-bold text-sm flex items-center gap-2 hover:bg-neutral-800 transition"
          >
            Contacto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="w-28" src={logo} alt="logo-masproconstructech" />
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-neutral-700 hover:text-neutral-900 focus:outline-none transition"
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 z-50 bg-white border-t border-neutral-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`${linkClass(link.to)} text-lg`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-black text-white px-6 py-3 rounded-full uppercase font-bold text-sm flex items-center justify-center gap-2 hover:bg-neutral-800 transition"
          >
            Contacto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

