import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Vendas from "@/components/vendas/Vendas.vue";
import Servicos from "@/components/servicos/Servicos.vue";
import Site from "@/views/Site.vue";
import { createRouter, createWebHistory } from "vue-router";
// createWebHashHistory

const routes = [
  {
    path: "/",
    component: Site,
  },
  {
    path: "/home", //localhost:8080/home
    component: Home,
    children: [
      {
        path: "vendas", //localhost:8080/home/vendas
        component: Vendas,
      },
      {
        path: "servicos", //localhost:8080/home/servicos
        component: Servicos,
      },
    ],
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
