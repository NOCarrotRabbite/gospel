import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/Home';
import MyShop from '@/views/shop/Myshop';
import EditShop from '@/views/shop/EditShop';
import Goods from '@/views/shop/Goods';
import ChargeInfo from '@/views/order/ChargeInfo';
import TakeMoneyInfo from '@/views/money/TakeMoneyInfo';
import MatchCard from '@/views/money/TakeMoneyAdMatchCard';
import TakeMoney from '@/views/money/TakeMoney';
import BindAlipay from '@/views/money/BindAlipay';
import BindBankCard from '@/views/money/BindBankCard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 店铺开始
    {
      path: '/my_shop',
      name: 'MyShop',
      component: MyShop
    },
    {
      path: '/edit_shop',
      name: 'EditShop',
      component: EditShop
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    // 店铺结束
    // 订单开始
    {
      path: '/charge_info',
      name: 'ChargeInfo',
      component: ChargeInfo
    },
    // 订单结束
    // 提现开始
    {
      path: '/take_money_info',
      name: 'TakeMoneyInfo',
      component: TakeMoneyInfo
    },
    {
      path: '/take_money',
      name: 'TakeMoney',
      component: TakeMoney
    },
    {
      path: '/bind_alipay',
      name: 'BindAlipay',
      component: BindAlipay
    },
    {
      path: '/bind_bank_card',
      name: 'BindBankCard',
      component: BindBankCard
    },
    // 提现结束
    //兑卡开始
    {
      path: '/match_card',
      name: 'MatchCard',
      component: MatchCard
    }
    //兑卡结束
  ]
})
