import axios from 'axios';

export default {
  state: {
    cart: [],
    cartLength: '',
  },
  mutations: {
    CART(state, storage) {
      state.cart = storage;
      state.cartLength = Number(storage.carts.length);
    },
  },
  actions: {
    getCarts(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      axios.get(api).then((response) => {
        const storage = response.data.data;
        storage.final_total = Math.round(storage.final_total);
        context.commit('CART', storage);
      });
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    cartLength(state) {
      return state.cartLength;
    },
  },
};
