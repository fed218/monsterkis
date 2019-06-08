<template>
  <div>
    <section>
      <swiper :options="swiperHeaderOption" class="swiper">
        <swiper-slide>
          <img src="@/assets/Carousel1.jpg" alt class="img-fluid">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/Carousel2.jpg" alt class="img-fluid">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/Carousel3.jpg" alt class="img-fluid">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/Carousel4.jpg" alt class="img-fluid">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/Carousel5.jpg" alt class="img-fluid">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>
    <section class="mt-5 mb-4 pt-3">
      <div class="container">
        <div class="row">
          <div class="col-xl-6">
            <h2 class="text-primary">哈燒排行榜</h2>
            <div class="row mt-5 pt-3">
              <div class="col-lg-5 col-md-4 mb-3 d-flex justify-content-center mb-4">
                <div class="card border-0 text-center">
                  <div class="card border-0" style="width: 12.5rem;">
                    <h4 class="rank-home">NO.1</h4>
                    <a href="#" @click.prevent="goMovie('-LfcigN0f107BPFdT0GQ')">
                      <img src="@/assets/Movie1.jpg" class="card-img-top img-shadow">
                    </a>
                    <div class="card-body text-center">
                      <p
                        class="card-title text-primary"
                        @click.prevent="goMovie('-LfcigN0f107BPFdT0GQ')"
                      >
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
              </div>
              <div class="col-md-7">
                <div class="content">
                  <p>復仇者聯盟系列最終章！灰飛煙毀後的世界該如何走下去，是否還有逆轉結局的機會？一切都將在此揭曉。</p>
                </div>
                <div class="text-right mt-5 pr-2">
                  <p>
                    <router-link to="/rank">
                      More&nbsp;
                      <i class="fas fa-angle-right"></i>
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-5 newest">
            <h2 class="text-primary">獨家限量套餐</h2>
            <div class="mt-5 pt-3 newest-content">
              <a href="#" @click.prevent="goProduct('-Lf2X4V9qd7YO5B_0MWT')">
                <img src="@/assets/UniqueA.jpg" class="img-fluid img-shadow">
              </a>
              <p class="text-primary mt-3" @click.prevent="goProduct('-Lf2X4V9qd7YO5B_0MWT')">
                <a href="#" class="h4">【名偵探皮卡丘】電影A套餐</a>
              </p>
            </div>
            <div class="text-right mt-5 pr-2">
              <p>
                <router-link to="/shops">
                  More&nbsp;
                  <i class="fas fa-angle-right"></i>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="px-5 py-3 bg-info">
        <swiper :options="swiperFooterOption">
          <swiper-slide>
            <img src="@/assets/CarouselFooter1.jpg" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/CarouselFooter2.jpg" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/CarouselFooter3.jpg" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/CarouselFooter4.jpg" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/CarouselFooter5.jpg" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/CarouselFooter6.jpg" class="img-fluid">
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/CarouselFooter7.jpg" class="img-fluid">
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperHeaderOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperFooterOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  methods: {
    goMovie(id) {
      this.$router.push(`/movie/${id}`);
    },
    goProduct(id) {
      this.$router.push(`/product/${id}`);
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
.rank-home {
  position: absolute;
  top: -25px;
  left: -15%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 30px;
  background: #cf3030;
  color: #fff;
  text-align: center;
  font-family: 'Arial Black';
  font-size: 15px;
  transform: rotate(-15deg);
}
@media (max-width: 1199px) {
  .newest {
    margin-top: 30px;
  }
}
@media (max-width: 767px) {
  .content {
    text-align: center;
  }
}
@media (max-width: 1199px) {
  .newest-content {
    text-align: center;
  }
}
</style>
