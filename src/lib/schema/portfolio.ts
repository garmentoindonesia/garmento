import { portfolioData } from "@/data/portfolio";

export function createPortfolioSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "ItemList",

    name: "Portofolio GARMENTO",

    description:
      "Portofolio produksi kaos custom dan polo shirt untuk perusahaan, event, komunitas, dan instansi.",

    url: "https://www.garmento.id/portofolio",

    itemListElement: portfolioData.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      item: {
        "@type": "CreativeWork",

        name: item.title,

        image: `https://www.garmento.id${item.image}`,

        description: `${item.client} - ${item.qty} - ${item.teknik}`,

        creator: {
          "@type": "Organization",
          name: "GARMENTO",
        },
      },
    })),
  };
}