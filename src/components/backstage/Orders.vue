<template>
  <div>
    <div class="main-orders">
      <table class="table mt-5">
        <thead>
          <tr>
            <th width="60">購買時間</th>
            <th width="100">Email</th>
            <th width="100">購買款項</th>
            <th width="60">應付金額</th>
            <th width="60">是否付款</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{item.create_at}}</td>
            <td>{{item.user.email}}</td>
            <td>
              <div v-for="product in item.products" :key="product.id">
                <span class="text-primary">{{product.product.title}}</span>
                ： {{product.qty}} {{product.product.unit}}
              </div>
            </td>
            <td class="text-right">$ {{item.total}}</td>
            <td>
              <span class="text-success" v-if="item.is_paid">付款</span>
              <span v-else>未付款</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Pagination
      v-if="pagination.current_page != 0"
      :page-datas="pagination"
      v-on:increment="incrementTotal"
    ></Pagination>
  </div>
</template>

<script>
import Pagination from '../Pagination.vue';

export default {
  data() {
    return {
      orders: [],
      pagination: {},
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getOrders() {
      this.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders`;
      const vm = this;
      this.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        console.log(response.data);
        const storage = response.data.orders;
        storage.forEach((item) => {
          item.total = Math.round(item.total);
        });
        storage.final_total = Math.round(storage.final_total);
        vm.orders = storage;

        vm.orders.forEach((item) => {
          const timestamp = item.create_at;
          const date = new Date(timestamp * 1000);
          if (date.getMonth() <= 8) {
            if (date.getDate() <= 9) {
              item.create_at = `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()}`;
            } else {
              item.create_at = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
            }
          } else if (date.getDate() <= 9) {
            item.create_at = `${date.getFullYear()}-${date.getMonth() + 1}-0${date.getDate()}`;
          } else {
            item.create_at = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
          }
          vm.pagination = response.data.pagination;
        });
      });
    },
    incrementTotal(page) {
      this.getOrders(page);
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style scoped>
.main-orders {
  min-height: calc(100vh - (48px + 64px + 35px + 16px));
}
</style>
