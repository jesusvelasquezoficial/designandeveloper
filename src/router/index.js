import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contacto from "../views/Contacto.vue";
import Nosotros from "../views/Nosotros.vue";
import Desarrollo from "../views/servicios/Desarrollo.vue";
import Marketing from "../views/servicios/Marketing.vue";
import Diseño from "../views/servicios/Diseño.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/desarrollo",
    name: "Desarrollo",
    component: Desarrollo,
  },
  {
    path: "/marketing",
    name: "Marketing",
    component: Marketing,
  },
  {
    path: "/diseño",
    name: "Diseño",
    component: Diseño,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: Nosotros,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;