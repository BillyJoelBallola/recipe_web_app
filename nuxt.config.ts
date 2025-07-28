// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  modules: ["@nuxt/icon", "@clerk/nuxt"],
  runtimeConfig: {
    public: {
      NUXT_FRONTEND_API: process.env.NUXT_FRONTEND_API,
    },
  },
  app: {
    head: {
      title: "Recipe Box",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});
