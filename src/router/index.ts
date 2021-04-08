import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../pages/Dashboard.vue"),
    children: [
      {
        path: 'house/:id',
        component: () => import("../pages/House.vue"),
      },
      {
        path: 'house',
        component: () => import("../pages/SecondHandHouse.vue"),
      },
      {
        path: "star",
        name: "Star",
        component: () => import("../pages/Star.vue"),
      },
      {
        path: "order",
        name: "Order",
        component: () => import("../pages/Order.vue"),
      },
      {
        path: "email",
        name: "Email",
        component: () => import("../pages/Email.vue"),
      },
    ]
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});