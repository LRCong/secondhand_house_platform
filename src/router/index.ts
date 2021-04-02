import { createRouter, createWebHistory } from "vue-router";

const routes = [
    // {
    //     path: "/",
    //     name: "Home",
    //     component: () => import("../pages/Login.vue"),
    // },
      {
        path: "/",
        name: "Dashboard",
        component: () => import("../pages/Dashboard.vue"),
      },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});