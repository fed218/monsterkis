<template>
  <div>
    <section class="container my-4 text-center" v-if="order.is_paid === false">
      <h1 class="text-secondary">購物車</h1>
      <div class="form-row mt-4">
        <div class="col-md col-12">
          <div class="alert alert-light text-center alert-rounded" role="alert">1. 輸入訂單資料</div>
        </div>
        <div class="col-md col-12">
          <div
            class="alert alert-primary text-center text-primary alert-rounded"
            role="alert"
          >2. 金流付款</div>
        </div>
        <div class="col-md col-12">
          <div class="alert alert-light text-center alert-rounded" role="alert">3. 完成</div>
        </div>
      </div>
    </section>
    <section class="container my-4 text-center" v-if="order.is_paid === true">
      <h1 class="text-secondary">MK影城 感謝您的關顧</h1>
      <div class="form-row mt-4 justify-content-center">
        <div class="col-lg-6 col-11">
          <div class="alert alert-primary text-center alert-rounded" role="alert">3. 完成</div>
        </div>
      </div>
    </section>
    <section class="row justify-content-center my-5 mx-0">
      <form class="col-md-6 col-11" @submit.prevent="payOrder">
        <table class="table">
          <thead class="bg-primary text-light">
            <th>品名</th>
            <th>數量</th>
            <th class="text-right">金額</th>
          </thead>
          <tbody class="checkout-table">
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
              <td class="align-middle text-right">${{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right text-primary pt-4 h4">
                總計&nbsp;${{ order.total }}
              </td>
            </tr>
          </tfoot>
        </table>

        <table class="table mt-5">
          <thead class="bg-primary text-light">
            <th colspan="2">訂購人資料</th>
          </thead>
          <tbody class="checkout-table">
            <tr>
              <th>Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right" v-if="order.is_paid === false">
          <button class="btn btn-danger btn-shadow">確認付款</button>
        </div>
        <div class="text-right"  v-if="order.is_paid">
          <p class="mt-4">
            <router-link to="/">
              繼續購物 &nbsp;
              <i class="fas fa-angle-right"></i>
            </router-link>
          </p>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productId: '',
      order: {
        user: {},
      },
    };
  },
  methods: {
    getOrder() {
      this.$store.dispatch('updateLoading', true);
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      this.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);

        const storage = response.data.order;
        storage.total = Math.round(storage.total);
        vm.order = storage;
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      this.$http.post(api).then(() => {
        vm.getOrder();
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>

<style>
.checkout-table tr:nth-child(odd) {
  background-color: rgb(233, 236, 239);
}
@media (max-width: 569px) {
  .table {
    font-size: 0.875rem;
  }
}
</style>
