import Vue from "vue/dist/vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import axios from "axios";
import VueAxios from "vue-axios";
// import App from "./Appp.vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
