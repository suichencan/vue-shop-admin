import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/pages/404.vue"
import Login from "@/pages/login.vue"
import Index from "@/pages/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component:Index

    },
    {
      path:"/login",
      component:Login
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound
    }
  ]
});

export default router;
