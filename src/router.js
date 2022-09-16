import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
// createWebHashHistory

const routes = [
  {
    path: "/home", //localhost:8080/home
    component: Home,
  },
  {
    path: "/Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, //routes: routes,
});

export default router;
