import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import { createRouter, createWebHashHistory } from "vue-router";

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
  history: createWebHashHistory(),
  routes, //routes: routes,
});

export default router;
