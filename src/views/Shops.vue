<template>
  <div>
    <nav aria-label="breadcrumb" class="bg-info">
      <div class="container">
        <ol class="breadcrumb">
          <router-link to="/" class="breadcrumb-item">首頁</router-link>
          <li class="breadcrumb-item active">影城餐飲</li>
        </ol>
      </div>
    </nav>
    <section class="container my-5 pt-3 border-bottom">
      <h2 class="text-primary text-center">獨家限量套餐</h2>
      <div class="row">
        <div class="col-md-6 my-5" v-for="item in unique" :key="item.id">
          <a href="#" @click.prevent="goProduct(item.id)">
            <img :src="item.imageUrl" class="img-fluid img-shadow">
          </a>
          <a href="#" @click.prevent="goProduct(item.id)">
            <h5 class="mt-4">{{item.title}}</h5>
          </a>
        </div>
      </div>
    </section>
    <section class="container my-5 pt-3">
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >套餐</button>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body px-4">
              <div class="row">
                <div class="col-lg-4 col-md-6 my-5" v-for="item in packages" :key="item.id">
                  <div class="card border-0 shadow-sm h-100">
                    <div
                      style="height: 150px; background-size: cover; background-position: center"
                      :style="{backgroundImage: `url(${item.imageUrl})`}"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title">{{item.title}}</h5>
                      <p class="card-text">{{item.content}}</p>
                      <div class="d-flex justify-content-between align-items-baseline">
                        <del class="h6 text-secondary">原價${{item.origin_price}}</del>
                        <div class="h5 text-danger">特價${{item.price}}</div>
                      </div>
                    </div>
                    <div class="card-footer px-2">
                      <div class="d-flex mt-3 align-items-baseline">
                        <form class="form-inline mr-auto">
                          <div class="form-group">
                            <select class="form-control" v-model="item.count">
                              <option
                                v-for="num in 10"
                                :value="num"
                                :key="num"
                              >選購 {{num}} {{item.unit}}</option>
                            </select>
                          </div>
                        </form>
                        <div class="text-muted">
                          <span>小計</span>
                          <strong> {{item.count * item.price}}</strong> 元
                        </div>
                      </div>
                      <div class="mt-4">
                        <button
                          type="button"
                          class="btn btn-danger btn-block btn-shadow"
                          @click.prevent="addtoCart(item.id, item.count)"
                          :disabled="loadingItem === item.id"
                        >
                          加到購物車&nbsp;&nbsp;
                          <i
                            class="fas fa-spinner fa-pulse"
                            v-if="loadingItem == item.id"
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >熟食</button>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div class="card-body px-4">
              <div class="row">
                <div class="col-lg-4 col-md-6 my-5" v-for="item in hotfood" :key="item.id">
                  <div class="card border-0 shadow-sm h-100">
                    <div
                      style="height: 150px; background-size: cover; background-position: center"
                      :style="{backgroundImage: `url(${item.imageUrl})`}"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title">{{item.title}}</h5>
                      <div class="d-flex justify-content-between align-items-baseline">
                        <del class="h6 text-secondary">原價${{item.origin_price}}</del>
                        <div class="h5 text-danger">特價${{item.price}}</div>
                      </div>
                    </div>
                    <div class="card-footer px-2">
                      <div class="d-flex mt-3 align-items-baseline">
                        <form class="form-inline mr-auto">
                          <div class="form-group">
                            <select class="form-control" v-model="item.count">
                              <option
                                v-for="num in 10"
                                :value="num"
                                :key="num"
                              >選購 {{num}} {{item.unit}}</option>
                            </select>
                          </div>
                        </form>
                        <div class="text-muted">
                          <span>小計</span>
                          <strong> {{item.count * item.price}}</strong> 元
                        </div>
                      </div>
                      <div class="mt-4">
                        <button
                          type="button"
                          class="btn btn-danger btn-block btn-shadow"
                          @click.prevent="addtoCart(item.id, item.count)"
                          :disabled="loadingItem === item.id"
                        >
                          加到購物車&nbsp;&nbsp;
                          <i
                            class="fas fa-spinner fa-pulse"
                            v-if="loadingItem == item.id"
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >飲料</button>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div class="card-body px-4">
              <div class="row">
                <div class="col-lg-4 col-md-6 my-5" v-for="item in drink" :key="item.id">
                  <div class="card border-0 shadow-sm h-100">
                    <div
                      style="height: 150px; background-size: cover; background-position: center"
                      :style="{backgroundImage: `url(${item.imageUrl})`}"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title">{{item.title}}</h5>
                      <div class="d-flex justify-content-between align-items-baseline">
                        <del class="h6 text-secondary">原價${{item.origin_price}}</del>
                        <div class="h5 text-danger">特價${{item.price}}</div>
                      </div>
                    </div>
                    <div class="card-footer px-2">
                      <div class="d-flex mt-3 align-items-baseline">
                        <form class="form-inline mr-auto">
                          <div class="form-group">
                            <select class="form-control" v-model="item.count">
                              <option
                                v-for="num in 10"
                                :value="num"
                                :key="num"
                              >選購 {{num}} {{item.unit}}</option>
                            </select>
                          </div>
                        </form>
                        <div class="text-muted">
                          <span>小計</span>
                          <strong> {{item.count * item.price}}</strong> 元
                        </div>
                      </div>
                      <div class="mt-4">
                        <button
                          type="button"
                          class="btn btn-danger btn-block btn-shadow"
                          @click.prevent="addtoCart(item.id, item.count)"
                          :disabled="loadingItem === item.id"
                        >
                          加到購物車&nbsp;&nbsp;
                          <i
                            class="fas fa-spinner fa-pulse"
                            v-if="loadingItem == item.id"
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unique: [],
      packages: [],
      hotfood: [],
      drink: [],
    };
  },
  methods: {
    getProducts() {
      this.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      const vm = this;
      this.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        console.log(response.data);

        const storage = response.data.products;

        storage.forEach((item) => {
          if (item.category === '獨家') {
            vm.unique.push(item);
          }
        });
        storage.forEach((item) => {
          if (item.category === '套餐') {
            vm.packages.push(item);
          }
        });
        storage.forEach((item) => {
          if (item.category === '熱食') {
            vm.hotfood.push(item);
          }
        });
        storage.forEach((item) => {
          if (item.category === '飲料') {
            vm.drink.push(item);
          }
        });
      });
    },
    addtoCart(id, num) {
      this.$store.dispatch('addtoCart', { id, num });
    },
    goProduct(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  computed: {
    loadingItem() {
      return this.$store.state.AddCar.loadingItem;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
