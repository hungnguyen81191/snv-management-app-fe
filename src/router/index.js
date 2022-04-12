import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
    path: "/contact",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/notification",
    component: () => import("../views/Notification.vue"),
  },
  {
    path: "/user",
    component: () => import("../views/User.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
