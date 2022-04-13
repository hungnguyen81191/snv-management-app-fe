import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { createAuth0, authGuard } from '@auth0/auth0-vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/department",
    component: () => import("../views/Department.vue"),
  },
  {
    path: "/calendar",
    component: () => import("../views/Calendar.vue"),
  },
  {
    path: "/contacts",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/notification",
    component: () => import("..//views/Notification.vue"),
  },
  { 
    path: "/category", 
    component: () => import("../views/Category.vue"),
  },
  {
    path: "/okr",
    component: () => import("../views/Okr.vue"),
    beforeEnter: authGuard
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
