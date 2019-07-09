<template>
  <div>
    <div class="py-3 bg-primary text-white">
      <div class="container">
        <div class="text-center">
          <p class="mb-1">
            作者：Wei-Cheng&nbsp;&nbsp;
            <a href="https://github.com/fed218" class="text-white">
              <i class="fab fa-github fa-lg animated"></i>
            </a>
          </p>
        </div>
        <div class="text-center">
          <small class="text-right">資料、圖片來源皆來自網路，僅用來做為學習用途。</small>
          <router-link to="/login" class="mr-3 text-white" title="後台管理系統">
            <i class="fas fa-user-cog animated"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    animatedStart() {
      $.fn.extend({
        animateCss(animationName, callback) {
          const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          this.addClass(`animated ${animationName}`).one(animationEnd, () => {
            $(this).removeClass(`animated ${animationName}`);
            if (callback) {
              callback();
            }
          });
          return this;
        },
      });

      $(document).ready(() => {
        $('.animated').hover(function animateCss() {
          $(this).animateCss('heartBeat');
        });
      });
    },
  },
  created() {
    this.animatedStart();
  },
};
</script>
