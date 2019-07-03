<template>
  <div>
    <nav aria-label="breadcrumb" class="bg-info">
      <div class="container">
        <ol class="breadcrumb">
          <router-link to="/" class="breadcrumb-item">首頁</router-link>
          <li class="breadcrumb-item active">時刻表查詢</li>
        </ol>
      </div>
    </nav>
    <section class="container my-5">
      <div class="form-inline mb-4">
        <div class="form-group ml-auto">
          <select class="form-control mr-2" v-model="filter">
            <option value disabled>------ 快速選單 ------</option>
            <option :value="item" v-for="item in titleArray" :key="item">{{item}}</option>
            <option value disabled>-----------------------</option>
            <option value="">All Movies</option>
          </select>
        </div>
      </div>
      <h2 class="text-primary title-time">時刻表查詢</h2>
      <div class="row mt-4" v-for="item in filterArray" :key="item.id">
        <div class="col-md-4">
          <div class="card border-0 text-center">
            <div class="card-body">
              <a href="#">
                <img :src="item.imageUrl" class="w-75 img-fluid img-shadow"
                 @click.prevent="goMovie(item.id)">
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
        <div class="col-md-8 mt-3 mb-5">
          <div class="pl-3 py-2 mb-3 bg-primary text-light">1廳 :&nbsp;&nbsp;{{item.title}}</div>
          <ul class="nav nav-tabs mb-3" id="tabs-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-item nav-link active"
                id="tabs-home-tab"
                data-toggle="tab"
                :href="`#today${item.id}`"
              >{{today}}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="tabs-profile-tab"
                data-toggle="tab"
                :href="`#tomorrow${item.id}`"
              >{{tomorrow}}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="tabs-profile-tab"
                data-toggle="tab"
                :href="`#date3${item.id}`"
              >{{date3}}</a>
            </li>
          </ul>
          <div class="tab-content mb-5" id="tabs-tabContent">
            <div
              class="tab-pane fade show active"
              :id="`today${item.id}`"
            >
              <span v-for="eventime in item.eventime" :key="eventime"
               class="px-3 border-right">{{eventime}}</span>
            </div>
            <div
              class="tab-pane fade"
              :id="`tomorrow${item.id}`"
            >
              <span
                v-for="oddtime
                in item.oddtime"
                :key="oddtime"
                class="px-3 border-right"
              >{{oddtime}}</span>
            </div>
            <div
              class="tab-pane fade"
              :id="`date3${item.id}`"
            >
              <span v-for="eventime in item.eventime" :key="eventime" class="px-3 border-right">
                {{eventime}}
              </span>
            </div>
          </div>
          <div class="pl-3 py-2 mb-3 bg-primary text-light">2廳 :&nbsp;&nbsp;{{item.title}}</div>
          <ul class="nav nav-tabs mb-3" id="tabs-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-item nav-link active"
                id="tabs-home-tab"
                data-toggle="tab"
                :href="`#today${item.id}2`"
              >{{today}}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="tabs-profile-tab"
                data-toggle="tab"
                :href="`#tomorrow${item.id}2`"
              >{{tomorrow}}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="tabs-profile-tab"
                data-toggle="tab"
                :href="`#date3${item.id}2`"
              >{{date3}}</a>
            </li>
          </ul>
          <div class="tab-content mb-5" id="tabs-tabContent">
            <div
              class="tab-pane fade show active"
              :id="`today${item.id}2`"
            >
              <span v-for="oddtime in item.oddtime"
               :key="oddtime" class="px-3 border-right">{{oddtime}}</span>
            </div>
            <div
              class="tab-pane fade"
              :id="`tomorrow${item.id}2`"
            >
              <span v-for="eventime in item.eventime" :key="eventime" class="px-3 border-right">
                {{eventime}}
              </span>
            </div>
            <div
              class="tab-pane fade"
              :id="`date3${item.id}2`"
            >
              <span v-for="oddtime in item.oddtime" :key="oddtime" class="px-3 border-right">
                {{oddtime}}
              </span>
            </div>
          </div>
          <div class="pl-3 py-2 mb-3 bg-primary text-light">3廳 :&nbsp;&nbsp;{{item.title}}</div>
          <ul class="nav nav-tabs mb-3" id="tabs-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-item nav-link active"
                id="tabs-home-tab"
                data-toggle="tab"
                :href="`#today${item.id}3`"
              >{{today}}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="tabs-profile-tab"
                data-toggle="tab"
                :href="`#tomorrow${item.id}3`"
              >{{tomorrow}}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="tabs-profile-tab"
                data-toggle="tab"
                :href="`#date3${item.id}3`"
              >{{date3}}</a>
            </li>
          </ul>
          <div class="tab-content mb-5" id="tabs-tabContent">
            <div
              class="tab-pane fade show active"
              :id="`today${item.id}3`"
            >
              <span v-for="eventime in item.eventime"
               :key="eventime" class="px-3 border-right">{{eventime}}</span>
            </div>
            <div
              class="tab-pane fade"
              :id="`tomorrow${item.id}3`"
            >
              <span v-for="oddtime in item.oddtime" :key="oddtime" class="px-3 border-right">
                {{oddtime}}
              </span>
            </div>
            <div
              class="tab-pane fade"
              :id="`date3${item.id}3`"
            >
              <span v-for="eventime in item.eventime"
               :key="eventime" class="px-3 border-right">{{eventime}}</span>
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
      titleArray: [],
      filter: '',
      date: [],
      today: '',
      tomorrow: '',
      date3: '',
      isLoading: false,
    };
  },
  methods: {
    getdate() {
      const vm = this;
      vm.date = [];
      let timestamp = Date.now();
      let text = '';
      for (let i = 0; i < 3; i += 1) {
        const date = new Date(timestamp);
        if (date.getMonth() <= 8) {
          if (date.getDate() <= 9) {
            text = `0${date.getMonth() + 1}-0${date.getDate()}`;
          } else {
            text = `0${date.getMonth() + 1}-${date.getDate()}`;
          }
        } else if (date.getDate() <= 9) {
          text = `${date.getMonth() + 1}-0${date.getDate()}`;
        } else {
          text = `${date.getMonth() + 1}-${date.getDate()}`;
        }
        vm.date.push(text);
        text = '';
        timestamp += 86400000;
      }
      vm.today = vm.date[0];
      vm.tomorrow = vm.date[1];
      vm.date3 = vm.date[2];
    },
    getProducts() {
      this.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      const vm = this;
      this.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);

        const storage = response.data.products;

        storage.forEach((item) => {
          if (item.category === '電影' && item.is_enabled === '1') {
            vm.products.push(item);
          }
        });

        vm.products.forEach((item) => {
          vm.titleArray.push(item.title);
        });
      });
    },
    goMovie(id) {
      this.$router.push(`/movie/${id}`);
    },
  },
  computed: {
    filterArray() {
      const vm = this;
      return vm.products.filter(item => item.title.match(vm.filter));
    },
  },
  created() {
    this.getProducts();
    this.getdate();
  },
};
</script>

<style>
@media (max-width: 767px) {
  .title-time {
    text-align: center;
  }
}
</style>
