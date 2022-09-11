import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import addPackage from "../components/category/addPackage.vue";
import Category from "../components/category/Category.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/addCategory",
      name: "addCategory",
      component: addPackage,
    },
    {
      path: "/Category",
      name: "Category",
      component: Category,
    },
  ],
});

export default router;
