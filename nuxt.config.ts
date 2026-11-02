export default defineNuxtConfig({
  compatibilityDate: "2026-11-02",
  ssr: true,
  nitro: {
    preset: "static",
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "ru" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://gavan.by",
    },
  },
})
