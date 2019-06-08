<template>
  <div>
    <nav aria-label="breadcrumb" class="bg-info">
      <div class="container">
        <ol class="breadcrumb">
          <router-link to="/" class="breadcrumb-item">首頁</router-link>
          <li class="breadcrumb-item active">最新公告</li>
        </ol>
      </div>
    </nav>
    <section class="container my-5">
      <h2 class="text-primary title-newest">最新公告</h2>
      <div class="row mt-5 pt-2">
        <div class="col-md-5 mb-5">
          <div class="list-group" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action active"
              id="list-Disney-list"
              data-toggle="list"
              href="#list-Disney"
              role="tab"
              aria-controls="Disney"
            >迪士尼皮克斯動畫廳 6/15 (六) 夢幻開幕</a>
            <a
              class="list-group-item list-group-item-action"
              id="list-bank-list"
              data-toggle="list"
              href="#list-bank"
              role="tab"
              aria-controls="bank"
            >花旗銀行 ※ 影城聯名卡 天天購票六折起</a>
            <a
              class="list-group-item list-group-item-action"
              id="list-MobilePay-list"
              data-toggle="list"
              href="#list-MobilePay"
              role="tab"
              aria-controls="MobilePay"
            >行動支付公告</a>
            <a
              class="list-group-item list-group-item-action"
              id="list-fraud-list"
              data-toggle="list"
              href="#list-fraud"
              role="tab"
              aria-controls="fraud"
            >反詐騙宣導公告</a>
            <a
              class="list-group-item list-group-item-action"
              id="list-prohibit-list"
              data-toggle="list"
              href="#list-prohibit"
              role="tab"
              aria-controls="prohibit"
            >影廳內禁止行為公告</a>
            <a
              class="list-group-item list-group-item-action"
              id="list-grade-list"
              data-toggle="list"
              href="#list-grade"
              role="tab"
              aria-controls="grade"
            >電影分級說明</a>
          </div>
        </div>
        <div class="col-md-7">
          <div class="tab-content d-flex justify-content-center" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="list-Disney"
              role="tabpanel"
              aria-labelledby="list-Disney-list"
            >
              <img src="@/assets/bulletin1.jpg" class="img-fluid">
            </div>
            <div
              class="tab-pane fade show"
              id="list-bank"
              role="tabpanel"
              aria-labelledby="list-bank-list"
            >
              <ul class="list-group">
                <li class="list-group-item border-0 p-0 mb-5">
                  <img src="@/assets/CarouselFooter1.jpg" class="img-fluid">
                </li>
                <li class="list-group-item border-0 p-0 mb-2">
                  活動日期：
                  2019/01/01 - 2019/12/31
                </li>
                <li class="list-group-item border-0 p-0 mb-2">
                  活動內容：
                  不分平假日、免簽單，享現場購買 2D 電影票優惠 6 折起。
                </li>
                <li class="list-group-item border-0 p-0 mb-2">
                  注意事項：
                  每卡每日限購 4 張，不適用於 3D 電影。
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade show"
              id="list-MobilePay"
              role="tabpanel"
              aria-labelledby="list-MobilePay-list"
            >
              <img src="@/assets/bulletin2.jpg" class="img-fluid">
            </div>
            <div
              class="tab-pane fade"
              id="list-fraud"
              role="tabpanel"
              aria-labelledby="list-fraud-list"
            >
              <img src="@/assets/bulletin3.jpg" class="img-fluid">
            </div>
            <div
              class="tab-pane fade"
              id="list-prohibit"
              role="tabpanel"
              aria-labelledby="list-prohibit-list"
            >
              <img src="@/assets/bulletin4.jpg" class="img-fluid">
            </div>
            <div
              class="tab-pane fade"
              id="list-grade"
              role="tabpanel"
              aria-labelledby="list-grade-list"
            >
              <img src="@/assets/bulletin5.jpg" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    const vm = this;
    vm.$store.dispatch('updateLoading', true);
    setTimeout(() => {
      vm.$store.dispatch('updateLoading', false);
    }, 500);
  },
};
</script>

<style>
@media (max-width: 767px) {
  .title-newest {
    text-align: center;
  }
}
</style>
