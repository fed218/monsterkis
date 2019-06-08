<template>
  <div>
    <nav aria-label="breadcrumb" class="bg-info">
      <div class="container">
        <ol class="breadcrumb">
          <router-link to="/" class="breadcrumb-item">首頁</router-link>
          <li class="breadcrumb-item active">影城介紹</li>
        </ol>
      </div>
    </nav>
    <section class="container my-5">
      <h2 class="text-primary title-introduce">影城介紹</h2>
      <div class="row mt-5">
        <div class="col-lg-4">
          <div class="row">
            <div class="col-lg-12 col-md-6 pb-4 text-center">
              <img src="@/assets/Cinemas1.jpeg" class="img-fluid">
            </div>
            <div class="col-lg-12 col-md-6 pb-4 text-center">
              <img src="@/assets/Cinemas2.jpeg" class="img-fluid">
            </div>
            <div class="col-lg-12 col-md-6 pb-4 text-center ds-none">
              <img src="@/assets/Cinemas3.jpeg" class="img-fluid">
            </div>
            <div class="col-lg-12 col-md-6 pb-4 text-center ds-none">
              <img src="@/assets/Cinemas4.jpeg" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <table class="table">
            <tbody>
              <tr>
                <th width="105" class="text-primary">特色：</th>
                <td>
                  <p>MK 影城斥資超過破億打造大台中地區最佳觀影環境。全台中最大巨型銀幕廳，廳高15米(約五層樓高)，
                    寬22米，並配備全台第一台EWD雷射4K放映系統，不論在亮度、色度、對比度都是業界最高的標準，
                    提供您畫面最細膩、色彩最鮮豔、畫質最飽滿的觀影品質。音響採用杜比7.1聲道數位環繞系統，
                    座椅升級為英國頂級品牌FERCO豪華座椅，久坐不累，搭配110公分間距，寬敞舒適。
                    我們常舉辦影展及觀摩影片，服務廣大熱愛電影的消費者。帶給您寬敞的空間與美好的視覺饗宴。
                  </p>
                </td>
              </tr>
              <tr>
                <th width="105" class="text-primary">地址：</th>
                <td>台中市西屯區台灣大道三段 666 號</td>
              </tr>
              <tr>
                <th width="105" class="text-primary">連絡電話：</th>
                <td>(04) 2666-8888</td>
              </tr>
              <tr>
                <th width="105" class="text-primary">交通方式：</th>
                <td>
                  <ul class="list-group">
                    <li class="list-group-item border-0 p-0 mb-2">【大眾運輸】</li>
                    <li
                      class="list-group-item border-0 p-0 mb-2"
                    >◎火車，至台中火車站下車，轉搭 66、6868 號公車，20分鐘即可到達 MK 影城</li>
                    <li
                      class="list-group-item border-0 p-0 mb-2"
                    >◎客運，至台中朝馬站下車，轉搭 88、168 號公車，10分鐘即可到達 MK 影城</li>
                    <li
                      class="list-group-item border-0 p-0 mb-2"
                    >◎高鐵，至台中高鐵站下車，轉搭 186、6688 號公車，45分鐘即可到達 MK 影城</li>
                    <li class="list-group-item border-0 p-0 mb-2">◎公車，66、88、168、186、6868、6688</li>
                    <li class="list-group-item border-0 p-0 mb-2 mt-3">【自行開車】</li>
                    <li
                      class="list-group-item border-0 p-0 mb-2"
                    >國道1號→從台中出口下交流道→走台灣大道三段→10分鐘即可到達 MK 影城</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th width="105" class="text-primary">影城位置：</th>
                <td>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1575.3560160643174!2d120.64319970884486!3d24.165290589610645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf456935a4fb45d2f!2zaUJpa2Ug5paw5YWJL-mBoOeZvg!5e0!3m2!1szh-TW!2stw!4v1558581979682!5m2!1szh-TW!2stw"
                    width="100%"
                    height="450"
                    frameborder="0"
                    style="border:0"
                    allowfullscreen
                  ></iframe>
                </td>
              </tr>
            </tbody>
          </table>
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
  .ds-none {
    display: none;
  }
  .title-introduce {
    text-align: center;
  }
}
</style>
