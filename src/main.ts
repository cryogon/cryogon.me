import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faHome,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";
library.add(faSun, faMoon, faTwitter, faGithub, faHome, faClock);
const app = createApp(App);
app.component("fa-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
