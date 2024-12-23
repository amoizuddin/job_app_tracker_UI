import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Vue Router
//vuetify docs
import "vuetify/styles"; // Vuetify styles
import { createVuetify } from "vuetify"; // Vuetify
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

import "@mdi/font/css/materialdesignicons.css"; // Material Design Icons

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
