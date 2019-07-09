<template>
  <div>
    <div class="text-right my-4">
      <button type="button" class="btn btn-primary"
       @click.prevent="openModal(true)">建立新的優惠券</button>
    </div>
    <div class="main-coupons">
      <table class="table">
        <thead>
          <tr>
            <th width="150">名稱</th>
            <th width="80">折扣百分比</th>
            <th width="100">到期日</th>
            <th width="80">是否啟用</th>
            <th width="80">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <td>{{item.title}}</td>
            <td>{{item.percent}}%</td>
            <td>{{item.due_date | timetamps}}</td>
            <td>
              <span v-if="item.is_enabled == 1" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-outline-primary btn-sm mr-1"
                @click.prevent="openModal(false, item)"
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
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span v-if="isNew">新增優惠券</span>
              <span v-if="!isNew">編輯優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="請輸入標題"
                v-model="tempCoupons.title"
              >
            </div>
            <div class="form-group">
              <label for="title">優惠碼</label>
              <input
                type="text"
                class="form-control"
                id="code"
                placeholder="請輸入優惠碼"
                v-model="tempCoupons.code"
              >
            </div>
            <div class="form-group">
              <label for="title">到期日</label>
              <input
                type="date"
                class="form-control"
                id="due_date"
                placeholder="請輸入到期日"
                v-model="tempCoupons.due_date"
              >
            </div>
            <div class="form-group">
              <label for="title">折扣百分比</label>
              <input
                type="text"
                class="form-control"
                id="percent"
                placeholder="此處是填寫銷售百分比，輸入 80 代表打八折"
                v-model="tempCoupons.percent"
              >
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="tempCoupons.is_enabled"
                  true-value="1"
                  false-value="0"
                  id="is_enabled"
                >
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary"
             @click.prevent="updataCoupons()">確認</button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="delCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupons.title }}</strong> 優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger"
             @click="delCoupons(tempCoupons.id)">確認刪除</button>
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

import Pagination from '../Pagination.vue';

export default {
  data() {
    return {
      coupons: [],
      tempCoupons: {},
      couponSend: {},
      isNew: false,
      pagination: {},
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getCoupons(page = 1) {
      this.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      const vm = this;
      this.$http.get(api).then((response) => {
        vm.$store.dispatch('updateLoading', false);
        const str = JSON.stringify(response.data.coupons);
        vm.coupons = JSON.parse(str);
        vm.pagination = response.data.pagination;
      });
    },
    openModal(New, item) {
      if (New) {
        this.tempCoupons = {};
        this.isNew = true;
      } else {
        this.tempCoupons = Object.assign({}, item);
        const timestamp = this.tempCoupons.due_date;
        const date = new Date(timestamp * 1000);
        if (date.getMonth() <= 8) {
          if (date.getDate() <= 9) {
            this.tempCoupons.due_date = `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()}`;
          } else {
            this.tempCoupons.due_date = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
          }
        } else if (date.getDate() <= 9) {
          this.tempCoupons.due_date = `${date.getFullYear()}-${date.getMonth() + 1}-0${date.getDate()}`;
        } else {
          this.tempCoupons.due_date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        }
        this.isNew = false;
      }
      $('#couponModal').modal('show');
    },
    updataCoupons() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      let httpMethods = 'post';
      const vm = this;
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupons.id}`;
        httpMethods = 'put';
      }
      if (vm.tempCoupons.percent && vm.tempCoupons.percent !== '0') {
        vm.tempCoupons.percent = parseInt(vm.tempCoupons.percent, 10);
        const str = JSON.stringify(vm.tempCoupons, 10);
        vm.couponSend = JSON.parse(str);
        const timestamp = new Date(vm.couponSend.due_date).getTime();
        vm.couponSend.due_date = Math.floor(timestamp / 1000);
        this.$http[httpMethods](api, { data: vm.couponSend }).then(() => {
          $('#couponModal').modal('hide');
          vm.getCoupons(vm.pagination.current_page);
        });
      } else {
        vm.tempCoupons.percent = 100;
        vm.tempCoupons.percent = parseInt(vm.tempCoupons.percent, 10);
        const str = JSON.stringify(vm.tempCoupons);
        vm.couponSend = JSON.parse(str);
        const timestamp = new Date(vm.couponSend.due_date).getTime();
        vm.couponSend.due_date = Math.floor(timestamp / 1000);
        this.$http[httpMethods](api, { data: vm.couponSend }).then(() => {
          $('#couponModal').modal('hide');
          vm.getCoupons(vm.pagination.current_page);
        });
      }
    },
    openDel(item) {
      this.tempCoupons = Object.assign({}, item);
      $('#delCouponModal').modal('show');
    },
    delCoupons(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${id}`;
      const vm = this;
      this.$http.delete(api).then(() => {
        $('#delCouponModal').modal('hide');
        vm.getCoupons();
      });
    },
    incrementTotal(page) {
      this.getCoupons(page);
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>

<style>
.main-coupons {
  min-height: calc(100vh - (48px + 38px + 48px + 35px + 16px + 16px));
}
</style>
