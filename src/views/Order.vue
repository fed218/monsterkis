<template>
  <div>
    <section class="container my-4 text-center" v-if="cartLength > 0">
      <h1 class="text-secondary">購物車</h1>
      <div class="form-row mt-4">
        <div class="col-sm col-12">
          <div
            class="alert alert-primary text-center text-primary alert-rounded"
            role="alert"
          >1. 輸入訂單資料</div>
        </div>
        <div class="col-sm col-12">
          <div class="alert alert-light text-center alert-rounded" role="alert">2. 金流付款</div>
        </div>
        <div class="col-sm col-12">
          <div class="alert alert-light text-center alert-rounded" role="alert">3. 完成</div>
        </div>
      </div>
    </section>
    <section class="container my-5" v-if="cartLength > 0">
      <div class="row justify-content-center mt-5">
        <div class="col-md-8 col-12">
          <div class="card">
            <div class="card-header d-flex" id="headingOne">
              <button
                class="btn btn-link mr-auto"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                @click="collapse = !collapse"
              >
                <span v-if="collapse">顯示購物車明細</span>
                <span v-if="!collapse">隱藏購物車明細</span>
              </button>
              <div v-if="collapse">
                <span class="h3" v-if="cart.total === cart.final_total">${{cart.total}}</span>
                <span class="h3" v-if="cart.total !== cart.final_total">${{cart.final_total}}</span>
              </div>
            </div>
          </div>
          <div id="collapseOne" class="collapse pt-4">
            <table class="table mb-0">
              <thead>
                <th>刪除</th>
                <th>品名</th>
                <th>數量</th>
                <th class="text-right">單價</th>
              </thead>
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click.prevent="removeCartItem(item.id)"
                      :disabled="status.loadingItem === item.id"
                    >
                      <i class="far fa-trash-alt" v-if="status.loadingItem !== item.id"></i>
                      <i class="fas fa-spinner fa-pulse" v-if="status.loadingItem == item.id"></i>
                    </button>
                  </td>
                  <td>
                    {{item.product.title}}
                    <div class="text-primary" v-if="item.coupon">
                      <small>已套用優惠券</small>
                    </div>
                  </td>
                  <td>{{item.qty}}{{item.product.unit}}</td>
                  <td class="text-right">${{item.total}}</td>
                </tr>
                <tr>
                  <td
                    colspan="4"
                    class="text-right pt-3"
                    v-if="cart.total == cart.final_total"
                    :class="{'text-primary': cart.total == cart.final_total,
                     'h5': cart.total == cart.final_total}">
                     總計&nbsp;${{cart.total}}
                  </td>
                  <td colspan="4" class="text-right pt-3" v-if="cart.total !== cart.final_total">
                    <del>總計&nbsp;${{cart.total}}</del>
                  </td>
                </tr>
                <tr v-if="cart.total !== cart.final_total">
                  <td
                    colspan="4"
                    class="text-right text-primary h5 border-top-0"
                  >折扣價&nbsp;&nbsp;&nbsp;${{ cart.final_total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="input-group mt-4 input-group-sm">
            <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon_code">
            <div class="input-group-append">
              <button class="btn btn-primary" type="button" @click="addCouponCode">套用優惠碼</button>
            </div>
          </div>
          <div class="mt-5 text-center">
            <h5 class="mb-3">訂購人資訊</h5>
            <form class="text-left" @submit.prevent="createOrder">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="username">* 姓名</label>
                  <input
                    type="text"
                    v-model="form.user.name"
                    class="form-control"
                    id="username"
                    name="username"
                    placeholder="請輸入姓名"
                    v-validate="'required'"
                    :class="{'is-invalid': errors.has('username')}"
                  >
                  <span class="text-danger" v-if="errors.has('username')">請輸入姓名</span>
                </div>
                <div class="form-group col-md-6">
                  <label for="tel">* 電話</label>
                  <input
                    type="tel"
                    v-model="form.user.tel"
                    class="form-control"
                    id="tel"
                    name="tel"
                    placeholder="請輸入電話"
                    v-validate="'required'"
                    :class="{'is-invalid': errors.has('tel')}"
                  >
                  <span class="text-danger" v-if="errors.has('tel')">請輸入電話</span>
                </div>
              </div>
              <div class="form-group">
                <label for="useremail">* Email</label>
                <input
                  type="email"
                  v-model="form.user.email"
                  class="form-control"
                  name="email"
                  id="useremail"
                  placeholder="請輸入 Email"
                  v-validate="'required|email'"
                  :class="{'is-invalid': errors.has('email')}"
                >
                <span class="text-danger" v-if="errors.has('email')">
                  {{ errors.first('email') }}
                </span>
              </div>
              <div class="form-group">
                <label for="address">* 地址</label>
                <input
                  type="text"
                  v-model="form.user.address"
                  class="form-control"
                  name="address"
                  id="address"
                  placeholder="請輸入地址"
                  v-validate="'required'"
                  :class="{'is-invalid': errors.has('address')}"
                >
                <span class="text-danger" v-if="errors.has('address')">請輸入地址</span>
              </div>
              <div class="form-group">
                <label for="comment">留言</label>
                <textarea
                  name="comment"
                  id="comment"
                  v-model="form.message"
                  class="form-control"
                  cols="30"
                  rows="10"
                  placeholder="請給予我們一些建議與參考"
                ></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <router-link to="/" href="#" class="btn btn-secondary mr-2 btn-shadow">
                  繼續選購
                </router-link>
                <button class="btn btn-primary mr-2 btn-shadow">下一步</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section
      class="container my-5 d-flex justify-content-center align-items-center main"
      v-if="cartLength === 0"
    >
      <p>
        <span class="h1 text-secondary">目前無選購商品，歡迎立即選購&nbsp;&nbsp;</span>
        <router-link to="/">
          回首頁&nbsp;
          <i class="fas fa-angle-right"></i>
        </router-link>
      </p>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      status: {
        loadingItem: '',
      },
      collapse: true,
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch('updateLoading', true);
      this.$store.dispatch('getCarts');
      this.$store.dispatch('updateLoading', false);
    },
    removeCartItem(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      const vm = this;
      vm.status.loadingItem = id;
      this.$http.delete(api).then(() => {
        vm.$store.dispatch('getCarts');
        vm.status.loadingItem = '';
        vm.getCart();
      });
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const vm = this;
      vm.$store.dispatch('updateLoading', true);
      this.$http.post(api, { data: { code: vm.coupon_code } }).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        console.log(response.data);
        if (response.data.success) {
          vm.$store.dispatch('getCarts');
          vm.coupon_code = '';
          const { message } = response.data;
          const status = 'danger';
          vm.$store.dispatch('messagePush', { message, status });
          this.$store.dispatch('getCarts');
        } else {
          const { message } = response.data;
          const status = 'danger';
          vm.$store.dispatch('messagePush', { message, status });
        }
      });
    },
    createOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const vm = this;
      const order = vm.form;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$http.post(api, { data: order }).then((response) => {
            if (response.data.success) {
              vm.$store.dispatch('getCarts');
              vm.$router.push(`checkout/${response.data.orderId}`);
            }
          });
        } else {
          console.log('欄位不完整');
        }
      });
    },
  },
  computed: {
    ...mapGetters(['cart', 'cartLength']),
  },
  created() {
    this.getCart();
  },
};
</script>

<style>
@media (max-width: 569px) {
  .table {
    font-size: 0.875rem;
  }
}
.main {
  min-height: calc(100vh - (40px + 75px + 84px + 96px));
}
</style>
