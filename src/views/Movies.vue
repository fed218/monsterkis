<template>
  <div>
    <nav aria-label="breadcrumb" class="bg-info">
      <div class="container">
        <ol class="breadcrumb">
          <router-link to="/" class="breadcrumb-item">首頁</router-link>
          <li class="breadcrumb-item active">電影介紹</li>
        </ol>
      </div>
    </nav>
    <section class="container my-5 pb-3 border-bottom">
      <div class="form-inline mb-4">
        <div class="form-group ml-auto">
          <select class="form-control mr-2" v-model="filter" @change="goMovie(filter)">
            <option value disabled>------ 快速選單 ------</option>
            <option :value="item" v-for="item in titleArray" :key="item">{{item}}</option>
          </select>
        </div>
      </div>
      <h2 class="text-primary title-movies">現正熱映</h2>
      <div class="form-row mt-4">
        <div class="col-lg-3 col-sm-6" v-for="item in enabled" :key="item.id">
          <div class="card border-0 text-center">
            <div class="card-body">
              <a href="#" @click.prevent="goMovie(item.id)">
                <img :src="item.imageUrl" class="img-fluid img-shadow">
              </a>
              <ul class="list-group">
                <li class="list-group-item border-0 pl-0 mt-3">
                  <a href="#" @click.prevent="goMovie(item.id)">
                    <h5 class="card-title text-primary">{{item.title}}</h5>
                  </a>
                </li>
                <li class="list-group-item border-0 pl-0">
                  <span>上映日期:&nbsp;&nbsp;</span>
                  {{item.released}}
                </li>
                <li class="list-group-item border-0 pl-0">
                  <span>片長:&nbsp;&nbsp;</span>
                  {{item.length}} 分
                </li>
                <li class="list-group-item border-0 pl-0">
                  <span>分級:&nbsp;&nbsp;</span>
                  <img
                    src="@/assets/G_0.png"
                    style="weight: 35px; height: 35px;"
                    v-if="item.grading === '普遍級'"
                  >
                  <img
                    src="@/assets/G_6.png"
                    style="weight: 35px; height: 35px;"
                    v-if="item.grading === '保護級'"
                  >
                  <img
                    src="@/assets/G_12.png"
                    style="weight: 35px; height: 35px;"
                    v-if="item.grading === '輔12級'"
                  >
                  <img
                    src="@/assets/G_15.png"
                    style="weight: 35px; height: 35px;"
                    v-if="item.grading === '輔15級'"
                  >
                  <img
                    src="@/assets/G_18.png"
                    style="weight: 35px; height: 35px;"
                    v-if="item.grading === '輔18級'"
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container my-5">
      <h2 class="text-primary title-movies">即將上映</h2>
      <div class="row mt-4">
        <div class="col-lg-3 col-sm-6" v-for="item in notEnabled" :key="item.id">
          <div class="card border-0 text-center">
            <div class="card-body">
              <a href="#" @click.prevent="goMovie(item.id)">
                <img :src="item.imageUrl" class="img-fluid img-shadow">
              </a>
              <ul class="list-group">
                <li class="list-group-item border-0 pl-0 mt-3">
                  <a href="#" @click.prevent="goMovie(item.id)">
                    <h5 class="card-title text-primary">{{item.title}}</h5>
                  </a>
                </li>
                <li class="list-group-item border-0 pl-0">
                  <span>上映日期:&nbsp;&nbsp;</span>
                  {{item.released}}
                </li>
                <li class="list-group-item border-0 pl-0">
                  <span>片長:&nbsp;&nbsp;</span>
                  {{item.length}} 分
                </li>
                <li class="list-group-item border-0 pl-0">
                  <span>分級:&nbsp;&nbsp;</span>
                  <img
                    src="@/assets/G_0.png"
                    style="weight: 35px; height: 35px;"
                    v-if="item.grading === '普遍級'"
                  >
                  <img
                    src="@/assets/G_6.png"
                    style="weight: 35px; height: 35px;"
                    v-if="item.grading === '保護級'"
                  >
                  <img
                    src="@/assets/G_12.png"
                    style="weight: 35px; height: 35px;"
                    v-if="item.grading === '輔12級'"
                  >
                  <img
                    src="@/assets/G_15.png"
                    style="weight: 35px; height: 35px;"
                    v-if="item.grading === '輔15級'"
                  >
                  <img
                    src="@/assets/G_18.png"
                    style="weight: 35px; height: 35px;"
                    v-if="item.grading === '輔18級'"
                  >
                </li>
              </ul>
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
      products: [],
      enabled: [],
      notEnabled: [],
      titleArray: [],
      filter: '',
      movieId: '',
    };
  },
  methods: {
    getProducts() {
      this.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      const vm = this;
      this.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        const storage = response.data.products;

        storage.forEach((item) => {
          if (item.category === '電影') {
            vm.products.push(item);
          }
        });
        storage.forEach((item) => {
          if (item.category === '電影' && item.is_enabled === '1') {
            vm.enabled.push(item);
          }
        });
        storage.forEach((item) => {
          if (item.category === '電影' && item.is_enabled === '0') {
            vm.notEnabled.push(item);
          }
        });

        vm.products.forEach((item) => {
          vm.titleArray.push(item.title);
        });
      });
    },
    goMovie(id) {
      const vm = this;
      if (vm.filter) {
        const movie = vm.products.filter(item => item.title === vm.filter);
        vm.filter = '';
        vm.movieId = movie[0].id;
        vm.$router.push(`/movie/${vm.movieId}`);
      } else {
        vm.movieId = id;
        vm.$router.push(`/movie/${vm.movieId}`);
      }
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style>
@media (max-width: 575px) {
  .title-movies {
    text-align: center;
  }
}
</style>
