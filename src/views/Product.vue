<template>
  <div>
    <nav aria-label="breadcrumb" class="bg-info">
      <div class="container">
        <ol class="breadcrumb">
          <router-link to="/" class="breadcrumb-item">首頁</router-link>
          <router-link to="/shops" class="breadcrumb-item">影城餐飲</router-link>
          <li class="breadcrumb-item active">{{product.title}}</li>
        </ol>
      </div>
    </nav>
    <section class="container my-5 pb-5 border-bottom">
      <div class="row">
        <div class="col-lg-6 pt-3 mb-3">
          <img :src="product.imageUrl" class="img-fluid">
        </div>
        <div class="col-lg-5">
          <ul class="list-group">
            <li class="list-group-item border-0 pl-0">
              <h4 class="text-primary">{{product.title}}</h4>
            </li>
            <li class="list-group-item border-0 pl-0">
              <span>售價 :&nbsp;&nbsp;</span>
              {{product.price}}
            </li>
            <li class="list-group-item border-0 pl-0">
              <span>餐飲類別 :&nbsp;&nbsp;電影套餐</span>
            </li>
            <li class="list-group-item border-0 pl-0">
              <span>商品說明 :&nbsp;&nbsp;</span>
              {{product.content}}
            </li>
            <li class="list-group-item border-0 pl-0">
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
            </li>
            <li class="list-group-item border-0 pl-0">
              <button
                type="button"
                class="btn btn-danger btn-block btn-shadow"
                @click.prevent="addtoCart(product.id, product.count)"
                :disabled="loadingItem === product.id"
              >
                加到購物車&nbsp;&nbsp;
                <i
                  class="fas fa-spinner fa-pulse"
                  v-if="loadingItem == product.id"
                ></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container my-5">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          :src="`https://www.youtube.com/embed/${product.youTube}`"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productId: '',
      product: [],
    };
  },
  methods: {
    getProduct() {
      this.$store.dispatch('updateLoading', true);
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.productId}`;
      this.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        console.log(response.data);
        vm.product = response.data.product;
      });
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
    this.productId = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
