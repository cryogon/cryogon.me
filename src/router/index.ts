import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/osu",
      name: "osu",
      component: () => import("@/views/OsuView.vue"),
    },
    {
      path: "/3d",
      name: "3d",
      component: () => import("@/views/3DVer.vue"),
    },
  ],
});

export default router;
