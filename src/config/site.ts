export const siteConfig = {
  name: "Beltry",
  description: "DJ urbano en Barcelona. Reggaeton & Urban Mix.",
  url: "https://beltry.example", // TODO-REAL: Cambiar al dominio final
  social: {
    instagram: "https://instagram.com/beltry_dj",
    tiktok: "https://www.tiktok.com/@beltry_dj",
    youtube: "https://www.youtube.com/@beltry",
  },
  metrics: {
    tiktokFollowers: "158,3 mil",
    tiktokLikes: "2,6 millones",
    instagramFollowers: "5.315",
  },
  contact: {
    email: "infobeltry@gmail.com",
    whatsappUrl: "https://wa.me/34695012322",
    whatsappDisplay: "+34 695 01 23 22",
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
