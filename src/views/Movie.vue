<template>
  <div>
    <nav aria-label="breadcrumb" class="bg-info">
      <div class="container">
        <ol class="breadcrumb">
          <router-link to="/" class="breadcrumb-item">首頁</router-link>
          <router-link to="/movies" class="breadcrumb-item">電影介紹</router-link>
          <li class="breadcrumb-item active">{{product.title}}</li>
        </ol>
      </div>
    </nav>
    <section class="container my-5">
      <div class="row">
        <div class="col-lg-4">
          <div class="card border-0 text-center">
            <div class="card-body">
              <img :src="product.imageUrl" class="img-fluid">
              <ul class="list-group">
                <li class="list-group-item border-0 pl-0 mt-3">
                  <h5 class="card-title text-primary">{{product.title}}</h5>
                  <a
                    class="btn btn-primary btn-sm"
                    href="#"
                    @click="openModal"
                    v-if="product.is_enabled === '1'"
                  >快速訂票</a>
                </li>
                <li class="list-group-item border-0 pl-0">
                  <span>導演:&nbsp;&nbsp;</span>
                  {{product.director}}
                </li>
                <li class="list-group-item border-0 pl-0">
                  <span>演員:&nbsp;&nbsp;</span>
                  {{product.actor}}
                </li>
                <li class="list-group-item border-0 pl-0">
                  <span>上映日期:&nbsp;&nbsp;</span>
                  {{product.released}}
                </li>
                <li class="list-group-item border-0 pl-0">
                  <span>片長:&nbsp;&nbsp;</span>
                  {{product.length}} 分
                </li>
                <li class="list-group-item border-0 pl-0">
                  <span>分級:&nbsp;&nbsp;</span>
                  <img
                    src="@/assets/G_0.png"
                    style="weight: 35px; height: 35px;"
                    v-if="product.grading === '普遍級'"
                  >
                  <img
                    src="@/assets/G_6.png"
                    style="weight: 35px; height: 35px;"
                    v-if="product.grading === '保護級'"
                  >
                  <img
                    src="@/assets/G_12.png"
                    style="weight: 35px; height: 35px;"
                    v-if="product.grading === '輔12級'"
                  >
                  <img
                    src="@/assets/G_15.png"
                    style="weight: 35px; height: 35px;"
                    v-if="product.grading === '輔15級'"
                  >
                  <img
                    src="@/assets/G_18.png"
                    style="weight: 35px; height: 35px;"
                    v-if="product.grading === '輔18級'"
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="mt-3 pb-3 border-bottom">
            <h4 class="text-primary">電影簡介</h4>
            <p class="mt-4">{{product.content}}</p>
          </div>
          <div class="embed-responsive embed-responsive-16by9 mt-5">
            <iframe
              class="embed-responsive-item"
              :src="`https://www.youtube.com/embed/${product.youTube}`"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div
      class="modal fade"
      id="ticketModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title" id="exampleModalLabel">快速訂票</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <h4 class="font-weight-bold text-primary">片名： {{product.title}}</h4>
            </div>
            <div class="d-flex align-items-baseline">
              <form class="form-inline mr-5">
                <div class="form-group">
                  <select class="form-control" v-model="product.count">
                    <option v-for="num in 10" :value="num" :key="num">
                      選購 {{num}} {{product.unit}}
                    </option>
                  </select>
                </div>
              </form>
              <div class="text-muted">
                <span>小計</span>
                <strong> {{product.count * product.price}}</strong> 元
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="addtoCart(product.id, product.count)"
              :disabled="loadingItem === product.id"
            >
              確認
              <i class="fas fa-spinner fa-pulse" v-if="loadingItem == product.id"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      movieId: '',
      product: [],
    };
  },
  methods: {
    getProduct() {
      this.$store.dispatch('updateLoading', true);
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.movieId}`;
      this.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        console.log(response.data);
        vm.product = response.data.product;
      });
    },
    openModal() {
      $('#ticketModal').modal('show');
    },
    addtoCart(id, num) {
      this.$store.dispatch('addtoCart', { id, num });
    },
  },
  computed: {
    loadingItem() {
      return this.$store.state.AddCar.loadingItem;
    },
  },
  created() {
    this.movieId = this.$route.params.movieId;
    this.getProduct();
  },
};
</script>

<style scoped>
.btn:hover {
  box-shadow: 3px 3px 10px gray;
}
</style>
