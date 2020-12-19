import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bootsrapImport from "./imports/bootsrtap-import.js";

Vue.use(BootstrapVue);
bootsrapImport(Vue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
