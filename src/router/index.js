import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/*/:id',
    name: 'ID',
    component: () => import('../views/[id].vue'),
    params: {
      id: 'id'
    }
  },
  {
    path: '/bios',
    name: 'Bios',
    component: () => import('../views/Bios.vue'),
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/Books.vue'),
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: () => import('../views/Maintenance.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
