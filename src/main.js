import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bootsrapImport from "./imports/bootsrtap-import.js";


const app = createApp(App)

app.use(router);
app.use(store);
app.use(BootstrapVue);
bootsrapImport(Vue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
