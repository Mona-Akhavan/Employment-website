import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router/index.js";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AnimatedVue from "animated-vue";
import "animate.css/animate.css";

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import store from "./store/index.js";
import Vuex from "vuex";
Vue.use(Vuex);

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(AnimatedVue);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
