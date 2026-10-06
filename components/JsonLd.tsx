const SITE_URL = "https://lincesistemas.com";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "LINCE Sistemas",
    alternateName: "LINCE",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    description:
      "Consultoría mexicana de software AI-nativo. Núcleo reusable + packs verticales para SMBs.",
    foundingLocation: {
      "@type": "Country",
      name: "México",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "MX",
      addressRegion: "Tamaulipas",
      addressLocality: "Ciudad Victoria",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "manuel@lincesistemas.com",
        contactType: "Sales",
        availableLanguage: ["Spanish"],
        areaServed: "MX",
      },
    ],
    sameAs: ["https://www.linkedin.com/in/manuel-flores-90653060/"],
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
    name: "LINCE Sistemas",
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
