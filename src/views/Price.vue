<template>
  <div>
    <nav aria-label="breadcrumb" class="bg-info">
      <div class="container">
        <ol class="breadcrumb">
          <router-link to="/" class="breadcrumb-item">首頁</router-link>
          <li class="breadcrumb-item active">票價說明</li>
        </ol>
      </div>
    </nav>
    <section class="container my-5">
      <h2 class="text-primary title-price">票價說明</h2>
      <table class="table mt-5 text-center">
        <thead class="bg-primary text-light">
          <tr>
            <th scope="col">電影總類</th>
            <th scope="col">全票</th>
            <th scope="col">優待票</th>
            <th scope="col">愛心票</th>
          </tr>
        </thead>
        <tbody class="price-table">
          <tr>
            <td>2D數位電影</td>
            <td>NT $280</td>
            <td>NT $250</td>
            <td>NT $140</td>
          </tr>
          <tr>
            <td>3D數位電影</td>
            <td>NT $330</td>
            <td>NT $300</td>
            <td>NT $160</td>
          </tr>
          <tr>
            <td>2D巨幕電影</td>
            <td>NT $330</td>
            <td>NT $300</td>
            <td>NT $160</td>
          </tr>
          <tr>
            <td>3D巨幕電影</td>
            <td>NT $380</td>
            <td>NT $350</td>
            <td>NT $190</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="container my-5 pt-5">
      <h5 class="text-primary mb-3">優惠購票注意事項</h5>
      <ul class="list-group">
        <li
          class="list-group-item border-0 p-0 mb-2"
        >
          ◎優待票的種類包括學生票、軍警票、愛心票，欲購買優待票時購票及進場皆需出示相關有效證件供服務人員核對
        </li>
        <li class="list-group-item border-0 p-0 mb-2">
          ◎購買愛心票需於購票/進場/取票時出示您的身心障礙手冊(證件)做確認
        </li>
        <li class="list-group-item border-0 p-0 mb-2">
          ◎敬老票資格為年滿65歲以上之老年人，票價如同愛心票
        </li>
        <li class="list-group-item border-0 p-0 mb-2">
          ◎二歲以上且未滿十二歲之兒童，需購買優待票進場
        </li>
        <li class="list-group-item border-0 p-0 mb-2">
          ◎兒童未滿二歲，無需購票可入場觀賞【普遍級】影片，每位購票者限免費攜帶一名未滿二歲兒童入場
        </li>
      </ul>
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
.price-table tr:nth-child(odd) {
  background-color: rgb(233, 236, 239);
}
@media (max-width: 767px) {
  .title-price {
    text-align: center;
  }
}
</style>
