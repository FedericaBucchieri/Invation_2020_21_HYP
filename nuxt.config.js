export default {
  ssr: true,
  target: "server",
  env: {
    // BASE_URL: 'https://invation-hypermedia2021.herokuapp.com', // Production URL
    BASE_URL: "", // Development URL
    configurationId: "490c9792-c0ac-49f3-99c7-8b4ae51a25cc",
  },
  serverMiddleware: [
    {
      path: "/api",
      handler: "~/server/rest/api.js",
    },
  ],
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Invation",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Invation is a visionary company that proposes four thematic visions full of innovative product to have a look at the future",
      },
      {
        hid: "Invation",
        name: "Invation",
        content: "Invation is a visionary company",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/invation-icon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/globalStyle.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/mmcc.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://auth.nuxtjs.org/guide/setup#installation
    "@nuxtjs/auth-next",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Auth module configuration
  auth: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
