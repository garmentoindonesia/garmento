export function createServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",

    serviceType: name,

    name,

    description,

    url,

    provider: {
      "@type": "Organization",
      name: "GARMENTO",
      url: "https://www.garmento.id",
    },
  };
}