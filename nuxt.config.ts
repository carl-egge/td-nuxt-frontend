// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  
  // Add Plugins
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt',
    'nuxt-mapbox',
  ],

  // Meta Tags and Head
  app: {
    head: {
      title: 'Theaterdeck',
      meta: [
        {name: 'description', content: 'Dies ist die Website des Theaterdeck Hamburgs.'},
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap'},
      ],
    }
  },
    
  // Add Stylesheets
  css: [
    "~/assets/css/main.scss",
    "~/assets/css/tailwind.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Process Environment Variables
  runtimeConfig: {
    public: {
      pretixBaseUrl: process.env.PRETIX_BASE_URL,
      pretixEndpoint: process.env.PRETIX_API_ENDPOINT,
      pretixApiKey: process.env.PRETIX_API_KEY,
    }
  },

  // // Router Configuration
  routeRules: {
    '/': { prerender: true },
    '/*': { cors: true },
  },

  // vue: {  
  //   compilerOptions: {
  //     isCustomElement: (tag) => {
  //       return tag.startsWith('pretix-')
  //     }, //['pretix-widget'].includes(tag),
  //   },
  // },

  // Vuetify
  vuetify: {
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      //styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
      autoImport: true,
    }
  },

  // Mapbox
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYWxleGxhdm9pZSIsImEiOiJja3RhZmpqZmoxbGlzMndvOGtueDFxYTU3In0.nyGbO7RFkmwC_kYseOZ4Dw'
  }
})