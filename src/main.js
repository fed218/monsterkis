import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap';

import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'animate.css/animate.min.css';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import VeeValidate from 'vee-validate';

import VueI18n from 'vue-i18n';
import zhTW from 'vee-validate/dist/locale/zh_TW';

import currencyFilter from '@/filters/currency';
import timetampsFilter from '@/filters/timetamps';
import mathroundFilter from '@/filters/mathround';

axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);

Vue.use(VueAwesomeSwiper);

Vue.component('Loading', Loading);

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zhTW',
});

Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTW,
  },
});

Vue.filter('currency', currencyFilter);
Vue.filter('timetamps', timetampsFilter);
Vue.filter('mathround', mathroundFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
