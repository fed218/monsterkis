import axios from 'axios';

export default {
  state: {
    loadingItem: '',
  },
  mutations: {
    LOADINGITEM(state, id) {
      state.loadingItem = id;
    },
  },
  actions: {
    addtoCart(context, { id, num }) {
      return new Promise((resolve) => {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        const cart = {
          product_id: id,
          qty: num,
        };
        context.commit('LOADINGITEM', id);
        axios.post(api, { data: cart }).then((response) => {
          context.commit('LOADINGITEM', '');
          const { message } = response.data;
          const status = 'danger';
          const timestamp = Math.floor(new Date() / 1000);
          context.commit('MESSAGE', { message, status, timestamp });
          setTimeout(() => {
            context.commit('TIMEREMOVE', timestamp);
          }, 1500);
          resolve();
        });
      });
    },
  },
};
