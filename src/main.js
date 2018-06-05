// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

import Spinner from "./components/Spinner";
import SimplePage from "./components/SimplePage";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/first", component: Spinner },
  { path: "/second", component: Spinner },
  { path: "/third", component: SimplePage }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
