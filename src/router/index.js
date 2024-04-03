import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //LOGIN PERSON TYPE
    {
      path: "/",
      name: "LoginStudent",
      component: () => import("../MainPages/LoginStudent.vue"),
    },
    {
      path: "/instructor",
      name: "LoginInstructor",
      component: () => import("../MainPages/LoginInstructor.vue"),
    },
    {
      path: "/admin",
      name: "LoginAdmin",
      component: () => import("../MainPages/LoginAdmin.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../MainPages/Home.vue"),
    },

    {
      path: "/teamlead",
      name: "Home",
      component: () => import("../MainPages/TeamLead.vue"),
    },
  ],
});
export default router;
