<template>
  <div>
    <nav aria-label="breadcrumb" class="bg-info">
      <div class="container">
        <ol class="breadcrumb">
          <router-link to="/" class="breadcrumb-item">首頁</router-link>
          <li class="breadcrumb-item active">哈燒排行榜</li>
        </ol>
      </div>
    </nav>
    <section class="container mt-5 pb-2 border-bottom">
      <h2 class="text-primary title-rank">哈燒排行榜</h2>
      <div class="row pb-5 mt-5">
        <div class="col-lg-3 mt-5 d-flex justify-content-center mb-4">
          <div class="card border-0" style="width: 15rem;">
            <h4 class="rank1">NO.1</h4>
            <a href="#" @click.prevent="goMovie('-LfcigN0f107BPFdT0GQ')">
              <img src="@/assets/Movie1.jpg" class="card-img-top img-fluid img-shadow">
            </a>
            <div class="card-body text-center">
              <p class="card-title text-primary" @click.prevent="goMovie('-LfcigN0f107BPFdT0GQ')">
                <a href="#">復仇者聯盟 : 終局之戰</a>
              </p>
              <p class="card-text">
                排名變動 &nbsp;&nbsp;
                <span class="text-danger">
                  <i class="fas fa-caret-up"></i>
                </span>
              </p>
              <p class="card-text">
                進榜週數 &nbsp;&nbsp;
                <span class="text-danger">2</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <p>復仇者聯盟系列最終章！灰飛煙毀後的世界該如何走下去，是否還有逆轉結局的機會？一切都將在此揭曉。</p>
          <div class="embed-responsive embed-responsive-16by9 mt-4">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/ZrB7EdfPBJU"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <section class="container border-info">
      <div class="row py-5 mt-5">
        <div class="col-lg-3 col-md-6 d-flex justify-content-center mb-4">
          <div class="card border-0" style="width: 15rem;">
            <h4 class="rank">NO.2</h4>
            <a href="#" @click.prevent="goMovie('-LfcjG__8VAid5OdcXrx')">
              <img src="@/assets/Movie2.jpg" class="card-img-top img-fluid img-shadow">
            </a>
            <div class="card-body text-center">
              <p class="card-title text-primary" @click.prevent="goMovie('-LfcjG__8VAid5OdcXrx')">
                <a href="#">詐騙女神</a>
              </p>
              <p class="card-text">
                排名變動 &nbsp;&nbsp;
                <span class="text-danger">
                  <i class="fas fa-caret-up"></i>
                </span>
              </p>
              <p class="card-text">
                進榜週數 &nbsp;&nbsp;
                <span class="text-danger">3</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex justify-content-center mb-4">
          <div class="card border-0" style="width: 15rem;">
            <h4 class="rank">NO.3</h4>
            <a href="#" @click.prevent="goMovie('-Lfchz5UBj9G3ccTCJ9r')">
              <img src="@/assets/Movie3.jpg" class="card-img-top img-fluid img-shadow">
            </a>
            <div class="card-body text-center">
              <p class="card-title text-primary" @click.prevent="goMovie('-Lfchz5UBj9G3ccTCJ9r')">
                <a href="#">哭泣的女人</a>
              </p>
              <p class="card-text">
                排名變動 &nbsp;&nbsp;
                <span>&minus;</span>
              </p>
              <p class="card-text">
                進榜週數 &nbsp;&nbsp;
                <span class="text-danger">1</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex justify-content-center mb-4">
          <div class="card border-0" style="width: 15rem;">
            <h4 class="rank">NO.4</h4>
            <a href="#" @click.prevent="goMovie('-LfckMOZIcV6bkVfTtGI')">
              <img src="@/assets/Movie7.jpg" class="card-img-top img-fluid img-shadow">
            </a>
            <div class="card-body text-center">
              <p class="card-title text-primary" @click.prevent="goMovie('-LfckMOZIcV6bkVfTtGI')">
                <a href="#">捍衛任務3：全面開戰</a>
              </p>
              <p class="card-text">
                排名變動 &nbsp;&nbsp;
                <span class="text-success">
                  <i class="fas fa-caret-down"></i>
                </span>
              </p>
              <p class="card-text">
                進榜週數 &nbsp;&nbsp;
                <span class="text-danger">2</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex justify-content-center mb-4">
          <div class="card border-0" style="width: 15rem;">
            <h4 class="rank">NO.5</h4>
            <a href="#" @click.prevent="goMovie('-LfchLtb4HciFj08u8WE')">
              <img src="@/assets/Movie5.jpg" class="card-img-top img-fluid img-shadow">
            </a>
            <div class="card-body text-center">
              <p class="card-title text-primary" @click.prevent="goMovie('-LfchLtb4HciFj08u8WE')">
                <a href="#">愛上觸不到的你</a>
              </p>
              <p class="card-text">
                排名變動 &nbsp;&nbsp;
                <span class="text-success">
                  <i class="fas fa-caret-down"></i>
                </span>
              </p>
              <p class="card-text">
                進榜週數 &nbsp;&nbsp;
                <span class="text-danger">5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goMovie(id) {
      this.$router.push(`/movie/${id}`);
    },
  },
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
@media (max-width: 991px) {
  .title-rank {
    text-align: center;
  }
}
.card {
  position: relative;
}
.rank {
  position: absolute;
  top: -30px;
  left: -15%;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 30px;
  background: #0484ec;
  color: #fff;
  text-align: center;
  font-family: 'Arial Black';
  font-size: 18px;
  transform: rotate(-15deg);
}
.rank1 {
  position: absolute;
  top: -30px;
  left: -15%;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 30px;
  background: #cf3030;
  color: #fff;
  text-align: center;
  font-family: 'Arial Black';
  font-size: 18px;
  transform: rotate(-15deg);
}
</style>
