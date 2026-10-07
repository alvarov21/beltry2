export const siteConfig = {
  name: "Beltry",
  description: "DJ urbano en Barcelona. Reggaeton & Urban Mix.",
  url: "https://beltry.example", // TODO-REAL: Cambiar al dominio final
  social: {
    instagram: "https://instagram.com/beltry_dj",
    tiktok: "https://www.tiktok.com/@beltry_dj",
    youtube: "https://www.youtube.com/@beltry_dj",
  },
  metrics: {
    tiktokFollowers: "158,3 mil",
    tiktokLikes: "2,6 millones",
    instagramFollowers: "5.315",
  },
  contact: {
    email: "booking@beltry.example", // TODO-REAL: Cambiar por correo real
    whatsappUrl: "https://wa.me/34000000000", // TODO-REAL: Cambiar por número real
    whatsappDisplay: "+34 000 000 000", // TODO-REAL: Cambiar por número real
  },
  releases: {
    latestMix: {
      title: "LA PENULTIMA Vol.1 | Mix Reggaeton 2026 | Beltry",
      youtubeId: "37bx0yFu7pU",
    },
    liveSet: {
      title: "BELTRY LIVE SET @Millennium | Reggaeton & Urban Mix 2026 | Beltry",
      youtubeId: "S-4mam--E3U",
    },
  },
  bookingEndpoint: process.env.NEXT_PUBLIC_BOOKING_ENDPOINT || "", // TODO-REAL: Endpoint de formulario
};
