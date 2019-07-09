<template>
  <div>
    <form class="form-signin text-center" @submit.prevent="signin">
      <img class="mt-5" src="@/assets/login-logo.png">
      <input
        type="email"
        id="inputEmail"
        class="form-control mt-4"
        placeholder="Email address"
        required
        autofocus
        v-model="user.username"
      >
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="user.password"
      >
      <button class="btn btn-lg btn-primary btn-block mt-4" type="submit">
        登入
        <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
      </button>
      <p class="mt-4">
        <router-link to="/">
          回前台首頁 &nbsp;
          <i class="fas fa-angle-right"></i>
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      loading: false,
    };
  },
  methods: {
    signin() {
      this.loading = true;
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then((response) => {
        vm.loading = false;
        if (response.data.success) {
          vm.$router.push('/admin/products');
        } else {
          const { message } = response.data;
          const status = 'danger';
          vm.$store.dispatch('messagePush', { message, status });
        }
      });
    },
  },
};
</script>

<style scoped>
html,body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
