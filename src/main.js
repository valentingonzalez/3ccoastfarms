import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import router from './router'


import 'bootstrap/dist/css/bootstrap.css';
import 'hamburgers/dist/hamburgers.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

Vue.use(BootstrapVue, VueCarousel);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
