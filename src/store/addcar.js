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
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty: num,
      };
      context.commit('LOADINGITEM', id);
      axios.post(api, { data: cart }).then((response) => {
        context.commit('LOADINGITEM', '');

        const cartApi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        axios.get(cartApi).then((cartResponse) => {
          const storage = cartResponse.data.data;
          storage.final_total = Math.round(storage.final_total);
          context.commit('CART', storage);
        });

        const { message } = response.data;
        const status = 'danger';
        const timestamp = Math.floor(new Date() / 1000);
        context.commit('MESSAGE', { message, status, timestamp });
        setTimeout(() => {
          context.commit('TIMEREMOVE', timestamp);
        }, 1500);
      });
    },
  },
};
