import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../MainPages/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../MainPages/LoginPage.vue"),
    },
  ],
});
export default router;
