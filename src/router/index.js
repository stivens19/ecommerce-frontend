import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import CategoryProducts from "../views/CategoryProducts.vue";
import Cart from "../views/Cart.vue";
import Pay from "../views/Pay.vue";
import Espacio from "../views/Espacio.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mi-espacio",
    name: "Espacio",
    component: Espacio,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/foro",
    name: "Foro",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Foro.vue"),
  },
  {
    path: "/categorias/:id",
    name: "categoria",
    component: CategoryProducts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
/*
<router-link :to="{name:'categoria',params:{nombre:categoria.nombre}}"> */
