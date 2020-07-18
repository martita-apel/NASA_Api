import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
const Apod = () => import("../views/Apod");
const Rover = () => import("../views/Rover");

import firebase from "firebase";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/apod",
      name: "Apod",
      component: Apod,
      meta: {
        login: true,
      },
    },
    {
      path: "/rover",
      name: "Rover",
      component: Rover,
      meta: {
        login: true,
      },
    },
    {
      path: "*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next("/");
  } else {
    next();
  }
});

export default router;
