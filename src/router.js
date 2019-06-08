import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      component: () => import('./components/index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('./views/Home.vue'),
        },
        {
          path: 'introduce',
          name: 'Introduce',
          component: () => import('./views/Introduce.vue'),
        },
        {
          path: 'movies',
          name: 'Movies',
          component: () => import('./views/Movies.vue'),
        },
        {
          path: 'movie/:movieId',
          name: 'Movie',
          component: () => import('./views/Movie.vue'),
        },
        {
          path: 'rank',
          name: 'Rank',
          component: () => import('./views/Rank.vue'),
        },
        {
          path: 'time',
          name: 'Time',
          component: () => import('./views/Time.vue'),
        },
        {
          path: 'shops',
          name: 'Shops',
          component: () => import('./views/Shops.vue'),
        },
        {
          path: 'product/:productId',
          name: 'Product',
          component: () => import('./views/Product.vue'),
        },
        {
          path: 'price',
          name: 'Price',
          component: () => import('./views/Price.vue'),
        },
        {
          path: 'newest',
          name: 'Newest',
          component: () => import('./views/Newest.vue'),
        },
        {
          path: 'order',
          name: 'Order',
          component: () => import('./views/Order.vue'),
        },
        {
          path: 'checkout/:orderId',
          name: 'Checkout',
          component: () => import('./views/Checkout.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./components/backstage/Login.vue'),
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./components/backstage/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('./components/backstage/Products.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('./components/backstage/Orders.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: () => import('./components/backstage/Coupons.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
