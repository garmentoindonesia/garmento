export const localBusinessSchema = {
  "@context": "https://schema.org",

  "@type": "LocalBusiness",

  "@id": "https://www.garmento.id/#garmento",

  name: "GARMENTO",

  legalName: "PT Nusa Garment Indonesia",

  url: "https://www.garmento.id",

  image: "https://www.garmento.id/og-image.jpg",

  logo: "https://www.garmento.id/logogarmento.png",

  founder: {
    "@type": "Person",

    name: "Thofhan Zaka Anshori",
  },

  description:
    "Vendor kaos custom dan polo shirt untuk perusahaan, event, komunitas, dan instansi dengan kapasitas produksi skala besar.",

  keywords: [
    "produksi kaos custom",
    "vendor kaos custom",
    "produksi polo shirt",
    "konveksi kaos",
    "kaos event",
    "seragam perusahaan",
  ],
  
  telephone: "+6281329269977",

  email: "garmento.indonesia@gmail.com",

  priceRange: "Rp60.000 – Rp155.000 / pcs",

  currenciesAccepted: "IDR",

  paymentAccepted: [
    "Bank Transfer",
    "Cash",
  ],

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "Rep. Office PT Nusa Garment Indonesia, Jl. Bintaro Tengah Blok J4 No.12",

    addressLocality: "Jakarta Selatan",

    addressRegion: "DKI Jakarta",

    postalCode: "12330",

    addressCountry: "ID",
  },

  geo: {
    "@type": "GeoCoordinates",

    latitude: -6.271811231366158,

    longitude: 106.75307544856076,
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",

      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],

      opens: "08:00",

      closes: "16:30",
    },
  ],

  foundingLocation: {
    "@type": "Place",

    name: "Yogyakarta",
  },

  contactPoint: {
  "@type": "ContactPoint",

  telephone: "+6281329269977",

  contactType: "customer service",

  areaServed: "ID",

  availableLanguage: "id",
  },

  hasMap:
    "https://maps.app.goo.gl/TCbUWmqaG9rHAdoL7",

  sameAs: [
    "https://www.instagram.com/garmento.id_",
    "https://www.tiktok.com/@garmento.id_",
    "https://www.facebook.com/garmento.id",
  ],

  areaServed: [
  {
    "@type": "AdministrativeArea",
    name: "DKI Jakarta",
  },
  {
    "@type": "AdministrativeArea",
    name: "Bandung Raya",
  },
  {
    "@type": "AdministrativeArea",
    name: "Semarang",
  },
  {
    "@type": "AdministrativeArea",
    name: "Daerah Istimewa Yogyakarta",
  },
  {
    "@type": "AdministrativeArea",
    name: "Surabaya",
  },
  {
    "@type": "AdministrativeArea",
    name: "Malang",
  },
  ],

  serviceArea: {
  "@type": "Country",

  name: "Indonesia",
  },

  knowsAbout: [
    "Produksi Kaos Custom",
    "Produksi Polo Shirt",
    "Kaos Event",
    "Kaos Perusahaan",
    "Seragam Kerja",
    "Polo Shirt Bordir",
  ],

  makesOffer: [
    {
      "@type": "Offer",

      itemOffered: {
        "@type": "Service",

        name: "Produksi Kaos Custom",

        url:
          "https://www.garmento.id/layanan/produksi-kaos-custom",
      },
    },

    {
      "@type": "Offer",

      itemOffered: {
        "@type": "Service",

        name: "Produksi Polo Shirt",

        url:
          "https://www.garmento.id/layanan/produksi-polo-shirt",
      },
    },
  ],
};