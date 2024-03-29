import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import Buefy from 'buefy';
import App from '@/App.vue';
import 'buefy/dist/buefy.css';

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);
Vue.use(Buefy);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
