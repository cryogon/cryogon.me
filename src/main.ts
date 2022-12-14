import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faHome,
  faClock,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
library.add(
  faSun,
  faMoon,
  faTwitter,
  faGithub,
  faInstagram,
  faHome,
  faClock,
  faBars,
  faX
);
const app = createApp(App);
app.component("fa-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
