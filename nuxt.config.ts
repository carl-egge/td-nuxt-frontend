// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  
  // Add Plugins
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt',
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
        // {rel: 'stylesheet', href: 'https://pretix.eu/demo/democon/widget/v1.css'},
      ],
      // script: [
      //   { src: '/js/pretixwidget.js', type: 'text/javascript', async: true },
      //   //{src: 'https://pretix.eu/widget/v1.en.js', async: true},
      // ],
    }
  },
    
  // Add Stylesheets
  css: [
    "~/assets/style/main.scss",
  ],

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
  }
})