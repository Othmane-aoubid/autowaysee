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
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/CarServices",
      name: "CarServices",
      component: () => import("../views/CarServicesView.vue"),
    },
    {
      path: "/Repair",
      name: "Repair",
      component: () => import("../views/RepairView.vue"),
    },
    {
      path: "/Purchase",
      name: "Purchase",
      component: () => import("../views/Purchase.vue"),
    },
    {
      path: "/BookAppointement",
      name: "BookAppointement",
      component: () => import("../views/BookAppointement.vue"),
    },
    {
      path: "/Checkout/:cartData", // Add :cartData parameter
      name: "Checkout",
      component: () => import("../views/Checkout.vue"),
    },
  ],
});

export default router;
