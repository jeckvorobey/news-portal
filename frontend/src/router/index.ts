import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeNews from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeNews,
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/News.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
