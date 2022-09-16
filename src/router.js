import { createRouter, createWebHistory } from "vue-router";

import Contratos from "@/components/vendas/Contratos.vue";
import Dashboard from "@/components/dashboard/Dashboard.vue";
import DashboardRodape from "@/components/dashboard/DashboardRodape.vue";
import Home from "@/views/Home.vue";
import Indicadores from "@/components/servicos/Indicadores.vue";
import Lead from "@/components/vendas/Lead.vue";
import Leads from "@/components/vendas/Leads.vue";
import Login from "@/views/Login.vue";
import Opcoes from "@/components/servicos/Opcoes.vue";
import Servico from "@/components/servicos/Servico.vue";
import Servicos from "@/components/servicos/Servicos.vue";
import Site from "@/views/Site.vue";
import Vendas from "@/components/vendas/Vendas.vue";
import VendasPadrao from "@/components/vendas/VendasPadrao.vue";

// createWebHashHistory

const routes = [
  {
    path: "/",
    component: Site,
  },
  {
    path: "/home", //localhost:8080/home
    alias: "/app",
    component: Home,
    children: [
      {
        path: "vendas", //localhost:8080/home/vendas
        component: Vendas,
        children: [
          {
            path: "", //localhost:8080/home/vendas - componente padrão
            component: VendasPadrao,
          },
          {
            path: "leads",
            component: Leads, //localhost:8080/home/vendas/leads
            name: "leads",
          },
          {
            path: "leads/:id",
            alias: ["/l/:id", "/pessoa/:id", "/:id"],
            component: Lead, //localhost:8080/home/vendas/leads/5
            name: "lead",
          },
          {
            path: "contratos",
            component: Contratos, //localhost:8080/home/vendas/contratos
            name: "contratos",
          },
        ],
      },
      {
        path: "servicos", //localhost:8080/home/servicos
        component: Servicos,
        name: "servicos",
        children: [
          {
            path: ":id", //localhost:8080/home/servicos/5
            alias: "/s/:id",
            components: {
              default: Servico,
              indicadores: Indicadores,
              opcoes: Opcoes,
            },
            name: "servico",
          },
        ],
      },
      {
        path: "dashboard", //localhost:8080/home/servicos
        components: {
          default: Dashboard,
          rodape: DashboardRodape,
        },
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
