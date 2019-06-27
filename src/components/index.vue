<template>
  <div>
    <header>
      <Navbar></Navbar>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    <Top></Top>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Top from './Top.vue';

export default {
  components: {
    Navbar,
    Footer,
    Top,
  },
};
</script>

<style>
@media (max-width: 767px) {
  .main {
    padding-top: 116px;
  }
}
</style>
