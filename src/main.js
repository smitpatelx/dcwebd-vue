import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

let vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

export default vm;
