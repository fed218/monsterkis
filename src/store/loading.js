export default {
  state: {
    isLoading: false,
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    updateLoading(context, payload) {
      context.commit('LOADING', payload);
    },
  },
};
