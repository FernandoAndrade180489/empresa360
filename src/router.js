import { createRouter, createWebHistory } from "vue-router";

import Contratos from "@/components/vendas/Contratos.vue";
import Home from "@/views/Home.vue";
import Leads from "@/components/vendas/Leads.vue";
import Login from "@/views/Login.vue";
import Servicos from "@/components/servicos/Servicos.vue";
import Site from "@/views/Site.vue";
import Vendas from "@/components/vendas/Vendas.vue";

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
        children: [
          {
            path: "leads",
            component: Leads, //localhost:8080/home/vendas/leads
          },
          {
            path: "contratos",
            component: Contratos, //localhost:8080/home/vendas/contratos
          },
        ],
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
