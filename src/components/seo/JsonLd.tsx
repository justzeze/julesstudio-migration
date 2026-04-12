export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jules Studio",
    alternateName: "JULESSTUDIO",
    url: "https://julesstudio.fr",
    logo: "https://julesstudio.fr/images/jslogo.svg",
    image: "https://julesstudio.fr/images/jslogo.svg",
    description:
      "Studio de web design et développement Webflow à Paris. Création de sites internet sur mesure, identité visuelle et stratégie digitale pour indépendants, startups et marques ambitieuses.",
    email: "hello@julesstudio.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8566,
      longitude: 2.3522,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Paris",
      },
      {
        "@type": "Country",
        name: "France",
      },
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Virement bancaire, Carte bancaire",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://instagram.com/julesstudio.fr",
      "https://youtube.com/@julesstudioyt",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Web Design & Webflow",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Site Vitrine Webflow",
            description:
              "Création de site vitrine professionnel sur mesure avec Webflow. Design premium, responsive, optimisé SEO.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "890",
            priceCurrency: "EUR",
            minPrice: "890",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Page Haute Conversion",
            description:
              "Landing page optimisée pour la conversion. Stratégie, copywriting, design et intégration Webflow.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "1690",
            priceCurrency: "EUR",
            minPrice: "1690",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Projet Complet Web Design",
            description:
              "Accompagnement complet : stratégie digitale, direction artistique, web design et développement Webflow.",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "2390",
            priceCurrency: "EUR",
            minPrice: "2390",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jules Studio",
    url: "https://julesstudio.fr",
    description:
      "Studio de web design et agence Webflow à Paris. Sites internet sur mesure pour entrepreneurs et marques ambitieuses.",
    inLanguage: "fr-FR",
    publisher: {
      "@type": "Organization",
      name: "Jules Studio",
      url: "https://julesstudio.fr",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Pour qui travaille Jules Studio ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Indépendants, freelances, créateurs, coachs, startups, marques à Paris et partout en France. Si vous avez une vision claire et l'ambition de vous démarquer, on est faits pour travailler ensemble.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte un site web chez Jules Studio ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Site vitrine à partir de 890 €. Landing page haute conversion à partir de 1 690 €. Projet complet (stratégie + design + Webflow) à partir de 2 390 €.",
        },
      },
      {
        "@type": "Question",
        name: "Comment se déroule un projet avec Jules Studio ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1. Immersion — On comprend votre marque, vos objectifs, votre audience. 2. Direction créative — On définit l'identité visuelle et la stratégie. 3. Design — On crée chaque page, chaque interaction. 4. Développement & lancement — On intègre, on teste, on livre.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
