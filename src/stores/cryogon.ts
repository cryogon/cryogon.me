// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { myProjectType } from "@/types";
import axios from "axios";
import { ref } from "vue";
const user = ref("24534724");
export const useCryogonStore = defineStore({
  id: "cryogon",
  state: () => ({
    projects: [
      {
        appLogo: "https://project-geo.netlify.app/img/logo.b94134a9.svg",
        appName: "Project-Geo",
        description: "Map where you can draw your path and use them later",
        githubLink: "https://github.com/cryogon/Project-Geo",
        liveSiteLink: "project-geo.netlify.app",
      },
      {
        appLogo: "logo.svg",
        appName: "Demohub",
        description: "Project I used to test UI design on",
        githubLink: "https://github.com/cryogon/demohub",
        liveSiteLink: "project-demohub.netify.app",
      },
      {
        appLogo:
          "https://logos-world.net/wp-content/uploads/2020/09/Spotify-Symbol.png",
        appName: "Spotify-Clone",
        description: "My first ever Javascript Project",
        githubLink: "https://github.com/cryogon/SpotifyClone",
        liveSiteLink: "",
      },
      {
        appLogo: "/pripo.png",
        appName: "Pripo",
        description:
          "A platform where you can post anything you want anonymously",
        githubLink: "https://github.com/cryogon/pripo",
        liveSiteLink: "pripo.netify.app",
      },
    ] as myProjectType[],
    userData: axios.get(
      `https://cryogon-server.vercel.app/api/user/${user.value}/osu`
    ),
    bestscores: axios.get(
      `https://cryogon-server.vercel.app/api/user/${user.value}/bestscores/osu?limit=100`
    ),
  }),
  getters: {},
  actions: {},
});
