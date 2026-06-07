export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: "GARMENTO",

  image: "https://www.garmento.id/logogarmento.png",

  url: "https://www.garmento.id",

  telephone: "+6281329269977",

  email: "garmento.indonesia@gmail.com",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "Rep. Office PT Nusa Garment Indonesia Jl. Bintaro Tengah Blok J4 No.12",

    addressLocality: "Jakarta Selatan",

    addressRegion: "DKI Jakarta",

    addressCountry: "ID",
  },

  openingHours: "Mo-Sa 08:00-16:00",

  areaServed: [
    "DKI Jakarta",
    "Bandung Raya",
    "Semarang",
    "Daerah Istimewa Yogyakarta",
    "Surabaya",
    "Malang",
  ],
};