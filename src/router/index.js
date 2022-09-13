import { createRouter, createWebHistory } from "vue-router";
import addPackage from "../components/category/addPackage.vue";
import EditPackage from "../components/category/EditPackage.vue";
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
      path: "/addCategory",
      name: "addCategory",
      component: addPackage,
    },
    {
      path: "/editCategory/:id",
      name: "EditCategory",
      component: EditPackage,
    },
    {
      path: "/Category",
      name: "Category",
      component: Category,
    },
  ],
});

export default router;
