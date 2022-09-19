import { createRouter, createWebHistory } from "vue-router";

// import Contratos from "@/components/vendas/Contratos.vue";
// import Dashboard from "@/components/dashboard/Dashboard.vue";
// import DashboardRodape from "@/components/dashboard/DashboardRodape.vue";
import Home from "@/views/Home.vue";
import Indicadores from "@/components/servicos/Indicadores.vue";
import Lead from "@/components/vendas/Lead.vue";
import Leads from "@/components/vendas/Leads.vue";
import Login from "@/views/Login.vue";
import Opcoes from "@/components/servicos/Opcoes.vue";
import PaginaNaoEncontrada from "@/views/PaginaNaoEncontrada.vue";
import Servico from "@/components/servicos/Servico.vue";
import Servicos from "@/components/servicos/Servicos.vue";
import Site from "@/views/Site.vue";
import Vendas from "@/components/vendas/Vendas.vue";
import VendasPadrao from "@/components/vendas/VendasPadrao.vue";

// lazy loading
const Contratos = () => import("@/components/vendas/Contratos.vue");
const Dashboard = () => import("@/components/dashboard/Dashboard.vue");
const DashboardRodape = () =>
  import("@/components/dashboard/DashboardRodape.vue");
// createWebHashHistory

const routes = [
  {
    path: "/",
    component: Site,
    meta: { requerAutorizacao: false },
  },
  {
    path: "/home", //localhost:8080/home
    meta: { requerAutorizacao: true },
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
            name: "vendas",
          },
          {
            path: "leads",
            component: Leads, //localhost:8080/home/vendas/leads
            name: "leads",
            // beforeEnter: (to, from) => {
            beforeEnter: () => {
              // verificar se o usuário tem e permissão de carregar a rota
              console.log("Guarda de rota beforeEnter");
            },
          },
          {
            path: "leads/:id/:outroParametro",
            props: true,
            // props: {
            //   id: 4,
            //   outroParametro: "pt-br",
            // },
            // props: (route) => {
            //   console.log("Rota Ativa", route);

            //   let teste = route.query.idioma
            //     ? route.query.idioma
            //     : route.params.outroParametro;

            //   // implementando uma lógica para definir as props que serão submetidas para o componente roteado
            //   return {
            //     id: parseInt(route.params.id) + 1,
            //     outroParametro: teste,
            //   };
            // },
            alias: [
              "/l/:id/:outroParametro",
              "/pessoa/:id/:outroParametro",
              "/:id/:outroParametro",
            ],
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
            props: {
              default: true,
              indicadores: true,
              opcoes: true,
            },
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
    meta: { requerAutorizacao: false, campo2: "teste", campo3: 50 },
  },
  {
    path: "/redirecionamento-1",
    redirect: "/home/servicos",
  },
  {
    path: "/redirecionamento-2",
    redirect: { name: "leads" },
  },
  {
    path: "/redirecionamento-3",
    redirect: "/home/vendas",
  },
  {
    path: "/redirecionamento-4",
    redirect: { name: "vendas" },
  },
  {
    path: "/redirecionamento-5",
    redirect: (to) => {
      // programar algo antes do redirecionamento ser efetivado
      console.log(to);

      // return '/home/vendas'
      return { name: "vendas" };
    },
  },
  // {
  //   path: "/:catchAll(.*)*", // Vue2 = *
  //   redirect: "/",
  // },
  {
    path: "/:catchAll(.*)*", // Vue2 = *
    component: PaginaNaoEncontrada,
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // return { left: 0, top: 150 }; // left = x; top = y
    console.log(savedPosition);

    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { el: to.hash };
      // fragmento = #secao_1 => id = secao_1
    }

    return { left: 0, top: 0 };
  },
  routes, //routes: routes,
});

// router.beforeEach((to) => {
router.beforeEach(() => {
  console.log("Guarda global beforeEach");
});

// router.afterEach((to, from) => {
router.afterEach(() => {
  console.log("Guarda global afterEach");
});

router.beforeResolve(() => {
  console.log("Guarda global beforeResolve");
});

export default router;
