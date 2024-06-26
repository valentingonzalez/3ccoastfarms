import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import router from './router'


import 'bootstrap/dist/css/bootstrap.css';
import 'hamburgers/dist/hamburgers.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './style.css';

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
