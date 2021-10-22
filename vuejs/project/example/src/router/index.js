import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
 
  {
    path: "/card",
    name: "Card",
    component: () =>
      import( "../components/Card.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import( "../components/Contact.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () =>
      import( "../components/History.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
