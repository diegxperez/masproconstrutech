import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url = 'https://masproconstrutech.com' }) => {
  const siteTitle = 'Maspro Construtech';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const defaultDescription = 'Maspro Construtech: Soluciones integrales en construcción, remodelación y mantenimiento. Calidad, profesionalismo y experiencia en cada proyecto.';
  const finalDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Etiqueta de título estándar */}
      <title>{fullTitle}</title>

      {/* Metaetiquetas estándar */}
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
    </Helmet>
  );
};

export default SEO;
