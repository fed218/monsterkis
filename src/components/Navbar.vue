<template>
  <div>
    <section class="navbar-top">
      <div class="py-2 bg-primary">
        <div class="container text-right">
          <a href="#" class="mr-3 text-white" title="Facebook" @click.prevent="fansPage">
            <i class="fab fa-facebook-square fa-lg animated"></i>
          </a>
          <a href="#" class="mr-3 text-white" title="Instagram" @click.prevent="fansPage">
            <i class="fab fa-instagram fa-lg animated"></i>
          </a>
          <a href="#" class="mr-3 text-white" title="Twitter" @click.prevent="fansPage">
            <i class="fab fa-twitter-square fa-lg animated"></i>
          </a>
          <a href="#" class="mr-4 text-white btn-cart" title="購物車" @click="openModal">
            <i class="fas fa-shopping-cart animated"></i>
            <span
              class="badge badge-pill badge-danger animated"
              v-if="cartLength > 0"
            >{{cartLength}}</span>
          </a>
        </div>
      </div>
      <div class="bg-light">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">
              <img src="@/assets/logo.svg" height="50px">
            </router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <router-link
                  to="/introduce"
                  active-class="active"
                  class="nav-item nav-link mx-3"
                >影城介紹</router-link>
                <router-link to="/movies" active-class="active"
                 class="nav-item nav-link mx-3">電影介紹</router-link>
                <router-link to="/rank" active-class="active"
                 class="nav-item nav-link mx-3">哈燒排行榜</router-link>
                <router-link to="/time" active-class="active"
                 class="nav-item nav-link mx-3">時刻表查詢</router-link>
                <router-link to="/shops" active-class="active"
                 class="nav-item nav-link mx-3">影城餐飲</router-link>
                <router-link to="/price" active-class="active"
                 class="nav-item nav-link mx-3">票價說明</router-link>
                <router-link to="/newest" active-class="active"
                 class="nav-item nav-link mx-3">最新公告</router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div
      class="modal fade"
      id="shoppingcartrModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title" id="exampleModalLabel">購物車</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <section class="px-2 pt-3" v-if="cartLength > 0">
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
                       'h5': cart.total == cart.final_total}"
                    >總計&nbsp;${{cart.total}}</td>
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
            </section>
            <section class="container my-3 text-center" v-if="cartLength === 0">
              <p class="h3 text-secondary">目前無選購商品，歡迎立即選購</p>
            </section>
          </div>
          <div class="modal-footer" v-if="cartLength > 0">
            <a href="#" class="btn btn-primary btn-block btn-shadow"
             @click.prevent="goOrder">結帳去</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

import { mapGetters } from 'vuex';

$(document).ready(() => {
  $('.nav-item').click(() => {
    $('#navbarNavAltMarkup').removeClass('show');
  });
});

export default {
  data() {
    return {
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    animatedStart() {
      $.fn.extend({
        animateCss(animationName, callback) {
          const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          this.addClass(`animated ${animationName}`).one(animationEnd, () => {
            $(this).removeClass(`animated ${animationName}`);
            if (callback) {
              callback();
            }
          });
          return this;
        },
      });

      $(document).ready(() => {
        $('.animated').hover(function() {
          $(this).animateCss('heartBeat');
        });
      });
    },
    fansPage() {
      const message = '~ 粉絲專頁籌備中  敬請期待 ~';
      const status = 'danger';
      this.$store.dispatch('messagePush', { message, status });
    },
    openModal() {
      $('#shoppingcartrModal').modal('show');
    },
    removeCartItem(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      const vm = this;
      vm.status.loadingItem = id;
      this.$http.delete(api).then(() => {
        vm.$store.dispatch('getCarts');
        vm.status.loadingItem = '';
        vm.$store.dispatch('getCarts');
      });
    },
    goOrder() {
      $('#shoppingcartrModal').modal('hide');
      this.$router.push('/order');
    },
  },
  computed: {
    ...mapGetters(['cart', 'cartLength']),
  },
  created() {
    this.animatedStart();
    this.$store.dispatch('getCarts');
  },
};
</script>

<style>
@media (max-width: 767px) {
  .navbar-top {
    position: fixed;
    width: 100%;
    z-index: 999;
  }
}
</style>
