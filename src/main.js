import { createApp } from "vue";
import App from "./App.vue";

// Inicio das rotas
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

// fim das rotas

const Vue = createApp(App);
Vue.use(router);
Vue.mount("#app");
