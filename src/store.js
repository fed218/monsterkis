import Vue from 'vue';
import Vuex from 'vuex';

import Alert from './store/alert';
import Loading from './store/loading';
import GetCar from './store/getcar';
import AddCar from './store/addcar';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, // 不要在發布環境下啟用嚴格模式！
  modules: {
    Alert,
    Loading,
    GetCar,
    AddCar,
  },
});
