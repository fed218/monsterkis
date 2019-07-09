<template>
  <div>
    <div class="text-right my-4">
      <button type="button" class="btn btn-primary" @click="openModal(true)">建立新的產品</button>
    </div>
    <div class="main">
      <table class="table">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th width="120">名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="80">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for=" item in products" :key="item.id">
            <td>{{item.category}}</td>
            <td>{{item.title}}</td>
            <td class="text-right">{{item.origin_price | currency}}</td>
            <td class="text-right">{{item.price | currency}}</td>
            <td>
              <span v-if="item.is_enabled == 1" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-outline-primary btn-sm mr-1"
                @click="openModal(false, item)"
              >編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm"
               @click="openDel(item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span v-if="isNew">新增產品</span>
              <span v-if="!isNew">編輯產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div>
                  <label for="category1">分類</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="category1"
                    value="電影"
                    v-model="tempProduct.category"
                  >
                  <label class="form-check-label" for="category1">電影</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="category2"
                    value="熱食"
                    v-model="tempProduct.category"
                  >
                  <label class="form-check-label" for="category2">熱食</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="category3"
                    value="飲料"
                    v-model="tempProduct.category"
                  >
                  <label class="form-check-label" for="category3">飲料</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="category4"
                    value="套餐"
                    v-model="tempProduct.category"
                  >
                  <label class="form-check-label" for="category4">套餐</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="category5"
                    value="獨家"
                    v-model="tempProduct.category"
                  >
                  <label class="form-check-label" for="category5">獨家</label>
                </div>
                <div class="form-group mt-3">
                  <label for="YouTube">輸入 YouTube 影片代碼</label>
                  <input
                    type="text"
                    class="form-control"
                    id="YouTube"
                    v-model="tempProduct.youTube"
                    placeholder="請輸入 YouTube 影片代碼"
                  >
                </div>
                <div class="form-group mt-3">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結"
                  >
                </div>
                <div class="form-group">
                  <label for="customFile">或 上傳圖片</label>
                  <i class="fas fa-spinner fa-pulse" v-if="status.loading"></i>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile"
                  >
                </div>
                <img class="img-fluid position:relative" :src="tempProduct.imageUrl">
              </div>
              <div class="col-sm-8">
                <div class="form-row">
                  <div class="form-group col-md-9">
                    <label for="title">標題</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      v-model="tempProduct.title"
                      placeholder="請輸入標題"
                    >
                  </div>
                  <div class="form-group col-md-3">
                    <label for="unit">單位</label>
                    <input
                      type="text"
                      class="form-control"
                      id="unit"
                      v-model="tempProduct.unit"
                      placeholder="請輸入單位"
                    >
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      placeholder="請輸入原價"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      v-model="tempProduct.price"
                      placeholder="請輸入售價"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <label for="content">產品內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    v-model="tempProduct.content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="my-3" v-if="tempProduct.category == '電影'">
                  <h2 class="text-danger mt-5">電影內容設定</h2>
                  <div class="mt-4">
                    <label for="grading1">分級</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="grading1"
                      value="普遍級"
                      v-model="tempProduct.grading"
                    >
                    <label class="form-check-label" for="grading1">普遍級</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="grading2"
                      value="保護級"
                      v-model="tempProduct.grading"
                    >
                    <label class="form-check-label" for="grading2">保護級</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="grading3"
                      value="輔12級"
                      v-model="tempProduct.grading"
                    >
                    <label class="form-check-label" for="grading3">輔12級</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="grading4"
                      value="輔15級"
                      v-model="tempProduct.grading"
                    >
                    <label class="form-check-label" for="grading4">輔15級</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      id="grading5"
                      value="限制級"
                      v-model="tempProduct.grading"
                    >
                    <label class="form-check-label" for="grading5">限制級</label>
                  </div>
                </div>
                <div class="form-row" v-if="tempProduct.category == '電影'">
                  <div class="form-group col-md-6">
                    <label for="released">上映日期</label>
                    <input
                      type="text"
                      class="form-control"
                      id="released"
                      v-model="tempProduct.released"
                      placeholder="日期格式 YYYY/MM/DD"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="length">片長</label>
                    <input
                      type="number"
                      class="form-control"
                      id="length"
                      v-model="tempProduct.length"
                      placeholder="請輸入分鐘數"
                    >
                  </div>
                </div>
                <div class="form-row" v-if="tempProduct.category == '電影'">
                  <div class="form-group col-md-5">
                    <label for="director">導演</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="director"
                      v-model="tempProduct.director"
                      placeholder="請輸入導演名字"
                    ></textarea>
                  </div>
                  <div class="form-group col-md-7">
                    <label for="actor">演員</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="actor"
                      v-model="tempProduct.actor"
                      placeholder="請輸入演員名字"
                    ></textarea>
                  </div>
                </div>
                <div class="form-row" v-if="tempProduct.category == '電影'">
                  <div class="form-group col-md-4">
                    <label for="time1">時刻 1</label>
                    <input type="time" class="form-control" id="time1" v-model="time[0].times">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="time2">時刻 2</label>
                    <input type="time" class="form-control" id="time2" v-model="time[1].times">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="time3">時刻 3</label>
                    <input type="time" class="form-control" id="time3" v-model="time[2].times">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="time4">時刻 4</label>
                    <input type="time" class="form-control" id="time4" v-model="time[3].times">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="time5">時刻 5</label>
                    <input type="time" class="form-control" id="time5" v-model="time[4].times">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="time6">時刻 6</label>
                    <input type="time" class="form-control" id="time6" v-model="time[5].times">
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProduct.is_enabled"
                      true-value="1"
                      false-value="0"
                      id="is_enabled"
                    >
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click.prevent="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button
              type="button"
              class="btn btn-danger"
              @click.prevent="delProduct(tempProduct.id)"
            >確認刪除</button>
          </div>
        </div>
      </div>
    </div>

    <Pagination
      v-if="pagination.current_page != 0"
      :page-datas="pagination"
      v-on:increment="incrementTotal"
    ></Pagination>
  </div>
</template>

<script>
import $ from 'jquery';

import 'vue-loading-overlay/dist/vue-loading.css';

import Pagination from '../Pagination.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      isNew: false,
      status: {
        loading: false,
      },
      pagination: {},
      time: [{ times: '' }, { times: '' }, { times: '' }, { times: '' }, { times: '' }, { times: '' }],
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      this.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      const vm = this;
      this.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(New, item) {
      if (New) {
        this.tempProduct = {};
        for (let i = 0; i < 6; i += 1) {
          this.time[i].times = '';
        }
        this.isNew = true;
      } else {
        this.tempProduct = item;
        if (item.time) {
          for (let i = 0; i < 6; i += 1) {
            this.time[i].times = item.time[i];
          }
        }
        this.isNew = false;
      }
      $('#productModal').modal('show');
    },
    updateProduct() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      let httpMethods = 'post';
      const vm = this;
      const Alltime = [];
      for (let i = 0; i < 6; i += 1) {
        const Alonetime = vm.time[i].times;
        if (Alonetime) {
          Alltime.push(Alonetime);
        }
      }
      vm.tempProduct.time = Alltime;

      const Eventime = [];
      for (let i = 0; i < 6; i += 2) {
        Eventime.push(Alltime[i]);
      }
      vm.tempProduct.eventime = Eventime;

      const Oddtime = [];
      for (let i = 1; i < 6; i += 2) {
        Oddtime.push(Alltime[i]);
      }
      vm.tempProduct.oddtime = Oddtime;

      vm.tempProduct.count = 1;

      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethods = 'put';
      }
      this.$http[httpMethods](api, { data: vm.tempProduct }).then((response) => {
        if (response.data.success) {
          $('#productModal').modal('hide');
          vm.getProducts(vm.pagination.current_page);
        } else {
          $('#productModal').modal('hide');
          vm.getProducts(vm.pagination.current_page);
        }
      });
    },
    openDel(item) {
      this.tempProduct = Object.assign({}, item);
      $('#delProductModal').modal('show');
    },
    delProduct(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${id}`;
      const vm = this;
      this.$http.delete(api).then(() => {
        $('#delProductModal').modal('hide');
        vm.getProducts();
      });
    },
    uploadFile() {
      this.status.loading = true;
      const uploadedFile = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      const vm = this;
      this.$http
        .post(api, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          vm.status.loading = false;
          if (response.data.success) {
            vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl);
          } else if (response.data.message === '檔案格式錯誤') {
            const { message } = response.data;
            const status = 'danger';
            vm.$store.dispatch('messagePush', { message, status });
          } else {
            const { message } = response.data;
            const status = 'danger';
            vm.$store.dispatch('messagePush', { message, status });
          }
        });
    },
    incrementTotal(page) {
      this.getProducts(page);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
