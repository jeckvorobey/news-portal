import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeNews from "@/views/HomePage.vue";
import store from "@/store";

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
  {
    path: "/addnews",
    name: "addNews",
    meta: { auth: true },
    component: () => import("@/views/AddNewsPage.vue"),
  },
  {
    path: "/editnews/:id",
    name: "editNews",
    meta: { auth: true },
    component: () => import("@/views/EditNewsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;

  if (requireAuth && store.getters["userInfo/getIsAuthorized"]) {
    next();
  } else if (requireAuth && !store.getters["userInfo/getIsAuthorized"]) {
    next("/");
  } else {
    next();
  }
});

export default router;
