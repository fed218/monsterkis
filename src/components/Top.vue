<template>
  <div>
    <div class="top-box">
      <a href="#" class="text-primary">
        <i class="fas fa-chevron-up fa-2x"></i>
      </a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

$(document).ready(() => {
  $('.top-box').click((event) => {
    event.preventDefault();
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      1500,
    );
  });

  $(window).scroll(() => {
    const scrollPos = $(window).scrollTop();
    if (scrollPos > 500) {
      $('.top-box').addClass('fadein');
    } else {
      $('.top-box').removeClass('fadein');
    }
  });
});

export default {};
</script>

<style>
.top-box {
  width: 50px;
  height: 50px;
  background-color: black;
  opacity: 0;
  position: fixed;
  bottom: 34px;
  right: 10px;
  z-index: 999;
}
.top-box a {
  display: block;
  padding-top: 10px;
  padding-left: 12px;
}
.fadein {
  opacity: 0;
}
@media (max-width: 767px) {
  .fadein {
    opacity: 0.15;
  }
  .top-box:hover {
    opacity: 0.35;
  }
}
</style>
