import { siteConfig } from "@/lib/site";

/**
 * Organization structured data for richer search results. Rendered once in
 * the root layout.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nevsky Prospekt",
      addressLocality: siteConfig.contact.city,
      addressCountry: "RU",
      postalCode: "191186",
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.contact.city,
    },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.telegram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
