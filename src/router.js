import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import NotFound from '@/pages/NotFound/NotFound';
import CoinDetail from '@/pages/CoinDetail/CoinDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
        path:'/coin/:id',
        name: 'coin-detail',
        component: CoinDetail
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});
