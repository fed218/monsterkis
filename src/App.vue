<template>
  <div id="app">
    <Alert></Alert>

    <loading :active.sync="isLoading" :is-full-page="true">
      <template slot="default">
        <img src="@/assets/loading-logo.png" class="w-50">
      </template>
      <template slot="after">
        <img src="@/assets/loading.gif">
      </template>
    </loading>

    <router-view/>
  </div>
</template>

<script>
import Alert from './components/Alert.vue';

export default {
  name: 'App',
  components: {
    Alert,
  },
  computed: {
    isLoading() {
      return this.$store.state.Loading.isLoading;
    },
  },
};
</script>

<style lang="scss">
@import './assets/all';
</style>
