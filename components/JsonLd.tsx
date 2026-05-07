const SITE_URL = "https://arete.mx";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Areté",
    legalName: "Areté Soluciones S.A. de C.V.",
    alternateName: "Areté Soluciones",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description:
      "Consultoría mexicana de software AI-nativo. Núcleo reusable + packs verticales para SMBs.",
    foundingLocation: {
      "@type": "Country",
      name: "México",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "MX",
      addressLocality: "Ciudad de México",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hola@arete.mx",
        contactType: "Sales",
        availableLanguage: ["Spanish"],
        areaServed: "MX",
      },
    ],
    sameAs: ["https://www.linkedin.com/company/arete-soluciones"],
    knowsAbout: [
      "AI-native software",
      "Compound AI",
      "Retrieval Augmented Generation",
      "Notarial automation",
      "Hospital pricing",
      "Restaurant business intelligence",
      "Community management software",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Areté",
    url: SITE_URL,
    inLanguage: "es-MX",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
