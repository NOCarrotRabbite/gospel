import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/Home';
import MyShop from '@/views/shop/Myshop';
import Goods from '@/views/shop/Goods';
import ChargeInfo from '@/views/order/ChargeInfo';
import TakeMoneyInfo from '@/views/money/TakeMoneyInfo';
import MatchCard from '@/views/money/TakeMoneyAdMatchCard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my_shop',
      name: 'MyShop',
      component: MyShop
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/charge_info',
      name: 'ChargeInfo',
      component: ChargeInfo
    },
    {
      path: '/take_money_info',
      name: 'TakeMoneyInfo',
      component: TakeMoneyInfo
    },
    {
      path: '/match_card',
      name: 'MatchCard',
      component: MatchCard
    }
  ]
})