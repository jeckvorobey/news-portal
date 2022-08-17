import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeNews from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeNews,
  },
  {
    path: "/news/:id",
    name: "news",
    component: () => import("@/views/NewsPage.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/AuthPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
